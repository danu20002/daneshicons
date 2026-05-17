import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import pg from "pg";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" })); // Support large SVGs

const dbType = process.env.DATABASE_TYPE || "sqlite";

// Abstract DB Connection & References
let pgPool = null;
let sqliteDb = null;

if (dbType === "postgres") {
  console.log("Connecting to remote PostgreSQL database at " + process.env.PGHOST + "...");
  pgPool = new pg.Pool({
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT || "5432"),
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    ssl: false // Plain text TCP as indicated in connection string
  });

  // Verify and create table
  pgPool.query(`
    CREATE TABLE IF NOT EXISTS custom_icons (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      svg_string TEXT NOT NULL,
      category VARCHAR(100) NOT NULL,
      description TEXT,
      tags TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `).then(() => {
    console.log("Successfully connected to PostgreSQL. Custom icons table is verified.");
  }).catch((err) => {
    console.error("PostgreSQL connection failed! Gracefully falling back to SQLite...", err.message);
    pgPool = null;
    initSQLite();
  });
} else {
  initSQLite();
}

function initSQLite() {
  console.log("Initializing local SQLite database fallback...");
  const dbPath = process.env.DATABASE_PATH || join(__dirname, "database.sqlite");
  sqliteDb = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error("SQLite connection failure:", err.message);
    } else {
      console.log(`Connected to SQLite database at ${dbPath}`);
      sqliteDb.run(`
        CREATE TABLE IF NOT EXISTS custom_icons (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT UNIQUE NOT NULL,
          svg_string TEXT NOT NULL,
          category TEXT NOT NULL,
          description TEXT,
          tags TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
    }
  });
}

// REST APIs

// 1. Get all custom database icons
app.get("/api/icons", async (req, res) => {
  if (pgPool) {
    try {
      const { rows } = await pgPool.query(
        'SELECT name, svg_string as "svgString", category, description, tags, created_at as "createdAt" FROM custom_icons ORDER BY id DESC'
      );
      const formattedRows = rows.map(row => ({
        ...row,
        isCustom: true,
        tags: row.tags ? JSON.parse(row.tags) : ["custom"]
      }));
      return res.json(formattedRows);
    } catch (err) {
      console.error("PostgreSQL fetch error:", err.message);
      return res.status(500).json({ error: "Failed to retrieve icons from remote PostgreSQL database." });
    }
  }

  if (sqliteDb) {
    sqliteDb.all("SELECT name, svg_string as svgString, category, description, tags, created_at as createdAt FROM custom_icons ORDER BY id DESC", [], (err, rows) => {
      if (err) {
        console.error("SQLite fetch error:", err.message);
        return res.status(500).json({ error: "Failed to retrieve custom icons." });
      }
      const formattedRows = rows.map(row => ({
        ...row,
        isCustom: true,
        tags: row.tags ? JSON.parse(row.tags) : ["custom"]
      }));
      res.json(formattedRows);
    });
  }
});

// 2. Upload a new custom SVG icon
app.post("/api/icons", async (req, res) => {
  const { name, svgString, category, description, tags } = req.body;

  if (!name || !svgString) {
    return res.status(400).json({ error: "Icon name and SVG XML string are required." });
  }

  const cleanCategory = category || "custom";
  const cleanDescription = description || "User uploaded vector asset via PostgreSQL database connection.";
  const tagsString = JSON.stringify(tags || ["custom"]);

  if (pgPool) {
    try {
      const query = `
        INSERT INTO custom_icons (name, svg_string, category, description, tags)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (name) DO UPDATE SET
          svg_string = EXCLUDED.svg_string,
          category = EXCLUDED.category,
          description = EXCLUDED.description,
          tags = EXCLUDED.tags
        RETURNING id;
      `;
      const { rows } = await pgPool.query(query, [name, svgString, cleanCategory, cleanDescription, tagsString]);
      console.log(`Icon saved to PostgreSQL: ${name}`);
      return res.status(201).json({
        name,
        svgString,
        category: cleanCategory,
        description: cleanDescription,
        tags: tags || ["custom"],
        isCustom: true,
        id: rows[0]?.id
      });
    } catch (err) {
      console.error("PostgreSQL save error:", err.message);
      return res.status(500).json({ error: "Failed to persist icon in remote PostgreSQL database." });
    }
  }

  if (sqliteDb) {
    const query = `
      INSERT INTO custom_icons (name, svg_string, category, description, tags)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(name) DO UPDATE SET
        svg_string = excluded.svg_string,
        category = excluded.category,
        description = excluded.description,
        tags = excluded.tags
    `;
    sqliteDb.run(query, [name, svgString, cleanCategory, cleanDescription, tagsString], function (err) {
      if (err) {
        console.error("SQLite save error:", err.message);
        return res.status(500).json({ error: "Failed to save icon to fallback DB." });
      }
      res.status(201).json({
        name,
        svgString,
        category: cleanCategory,
        description: cleanDescription,
        tags: tags || ["custom"],
        isCustom: true,
        id: this.lastID
      });
    });
  }
});

// 3. Delete a custom SVG icon
app.delete("/api/icons/:name", async (req, res) => {
  const name = req.params.name;

  if (!name) {
    return res.status(400).json({ error: "Icon name is required for deletion." });
  }

  if (pgPool) {
    try {
      const { rowCount } = await pgPool.query("DELETE FROM custom_icons WHERE name = $1", [name]);
      if (rowCount === 0) {
        return res.status(404).json({ error: `Icon with name "${name}" not found in remote database.` });
      }
      console.log(`Icon deleted from PostgreSQL: ${name}`);
      return res.json({ message: `Successfully deleted custom icon "${name}" from remote PostgreSQL database.` });
    } catch (err) {
      console.error("PostgreSQL delete error:", err.message);
      return res.status(500).json({ error: "Failed to delete icon from remote database." });
    }
  }

  if (sqliteDb) {
    sqliteDb.run("DELETE FROM custom_icons WHERE name = ?", [name], function (err) {
      if (err) {
        console.error("SQLite delete error:", err.message);
        return res.status(500).json({ error: "Failed to delete icon from fallback DB." });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: `Icon with name "${name}" not found.` });
      }
      res.json({ message: `Successfully deleted custom icon "${name}" from database.` });
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`DaneshIcons backend running on http://localhost:${PORT}`);
});
