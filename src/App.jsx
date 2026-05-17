import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  Upload,
  Settings,
  Sliders,
  Check,
  Copy,
  X,
  Code,
  Eye,
  Terminal,
  Sparkles,
  Info,
  FileCode,
  Grid,
  Maximize2,
  Trash2,
  Plus,
  Compass,
  Paperclip,
  Gift,
  Briefcase,
  Key,
  Layers,
  Shield,
  Activity,
  Tv,
  Wifi,
  ChevronRight,
  Download,
  Share2,
  PenTool,
  RotateCcw,
  Save,
  CheckSquare,
  Folder,
  FolderOpen,
  ChevronDown
} from 'lucide-react';

const THEME_COLORS = [
  { name: 'Purple', hex: '#a855f7', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.5)]' },
  { name: 'Teal', hex: '#06b6d4', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.5)]' },
  { name: 'Emerald', hex: '#10b981', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.5)]' },
  { name: 'Rose', hex: '#f43f5e', glow: 'shadow-[0_0_15px_rgba(244,63,94,0.5)]' },
  { name: 'Amber', hex: '#f59e0b', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.5)]' },
  { name: 'Indigo', hex: '#6366f1', glow: 'shadow-[0_0_15px_rgba(99,102,241,0.5)]' },
  { name: 'White', hex: '#ffffff', glow: 'shadow-[0_0_15px_rgba(255,255,255,0.3)]' },
];

const CATEGORIES = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), 'Custom'];

const iconModules = import.meta.glob('./icons/**/*.jsx');
const LOADED_ICONS = Object.keys(iconModules).map(filePath => {
  const parts = filePath.split('/');
  const name = parts.pop().replace('.jsx', '');
  const category = parts.pop();
  return {
    id: name.toLowerCase(),
    name,
    category,
    type: 'standard',
    nodes: [], // will be loaded lazily
    importFn: iconModules[filePath]
  };
});

const LazyIcon = ({ icon, renderStyle, strokeWidth, globalSize, selectedColor }) => {
  const [nodes, setNodes] = useState(icon?.nodes || []);

  useEffect(() => {
    let mounted = true;
    if (icon && nodes.length === 0 && icon.importFn) {
      icon.importFn().then(mod => {
        if (mounted && mod.iconData) {
          setNodes(mod.iconData.nodes || []);
          icon.nodes = mod.iconData.nodes || [];
        }
      });
    }
    return () => { mounted = false; };
  }, [icon]);

  if (!icon) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={globalSize}
      height={globalSize}
      style={{ color: selectedColor.hex }}
      className="transition-all"
    >
      {nodes.length === 0 ? (
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" className="animate-spin opacity-20" />
      ) : (
        nodes.map(([Tag, attrs], idx) => {
          const reactAttrs = {};
          for (const [k, v] of Object.entries(attrs)) {
            let camelKey = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
            if (camelKey === 'class') camelKey = 'className';
            reactAttrs[camelKey] = v;
          }
          
          if (renderStyle === 'solid') {
             reactAttrs.fill = 'currentColor';
          } else {
             reactAttrs.fill = 'none';
             reactAttrs.stroke = 'currentColor';
             reactAttrs.strokeWidth = strokeWidth;
          }
          
          return <Tag key={idx} {...reactAttrs} />;
        })
      )}
    </svg>
  );
};

export default function App() {
  const [icons, setIcons] = useState(LOADED_ICONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(200);

  // Customization States
  const [globalSize, setGlobalSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [selectedColor, setSelectedColor] = useState(THEME_COLORS[0]);
  const [renderStyle, setRenderStyle] = useState('outline');
  const [gridDensity, setGridDensity] = useState('compact');

  // Sidebars and Navigation Controls
  const [activePlatformMode, setActivePlatformMode] = useState('studio'); // studio | design-system
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState(LOADED_ICONS[0] || null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [activeLeftPanel, setActiveLeftPanel] = useState('controls'); // controls | svg-creator | bundle-shake

  // Tree-Shaking Sizing Visualizer simulator state
  const [bundledIcons, setBundledIcons] = useState(LOADED_ICONS.slice(0, 3).map(i => i.id));
  const [importStyle, setImportStyle] = useState('tree-shaked'); // tree-shaked | bulk

  // Virtual Folder Structure Explorer State
  const [selectedVirtualFile, setSelectedVirtualFile] = useState('package.json');
  const [expandedFolders, setExpandedFolders] = useState({
    src: true,
    icons: true,
    General: true,
    System: false,
    Tech: false,
    Nav: false,
    Commerce: false,
    Custom: false
  });

  // Custom SVG upload states
  const [newIconName, setNewIconName] = useState('');
  const [newIconCategory, setNewIconCategory] = useState('General');
  const [newIconPath, setNewIconPath] = useState('');
  const [uploadError, setUploadError] = useState('');

  // Floating compiler tab in right panel
  const [activeConvertTab, setActiveConvertTab] = useState('react');

  // Matrix Board Creator States
  const [gridPoints, setGridPoints] = useState([]);
  const [creatorIconName, setCreatorIconName] = useState('');
  const [creatorCategory, setCreatorCategory] = useState('General');

  // Simulated CLI logs
  const [terminalLogs, setTerminalLogs] = useState([
    { text: 'danesh-icons modular-compiler engine initialized.', type: 'info' },
    { text: 'Type "help" to list modern modular diagnostic routines.', type: 'hint' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  const toastRef = useRef(null);
  const [toast, setToast] = useState({ show: false, message: '' });

  const triggerToast = (msg) => {
    setToast({ show: true, message: msg });
    if (toastRef.current) clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2500);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
    setNewIconName('');
    setNewIconCategory('General');
    setNewIconPath('');
    setUploadError('');
  };

  const handleAddCustomIcon = (e) => {
    if (e) e.preventDefault();
    if (!newIconName.trim()) {
      setUploadError('Please provide an icon name.');
      return;
    }
    if (!newIconPath.trim()) {
      setUploadError('Please provide at least one valid SVG path d-attribute.');
      return;
    }

    let pathsToSave = [];
    const svgPathRegex = /d="([^"]+)"/g;
    let match;
    const pathMatches = [];

    while ((match = svgPathRegex.exec(newIconPath)) !== null) {
      pathMatches.push(match[1]);
    }

    if (pathMatches.length > 0) {
      pathsToSave = pathMatches;
    } else {
      const cleanPath = newIconPath.replace(/<path[^>]*>/, '').replace('/>', '').trim();
      pathsToSave = [cleanPath];
    }

    const cleanName = newIconName.trim().replace(/\s+/g, '');
    const newIcon = {
      id: `custom-${Date.now()}`,
      name: cleanName,
      category: newIconCategory,
      type: 'custom',
      paths: pathsToSave
    };

    setIcons([newIcon, ...icons]);
    triggerToast(`"${cleanName}" added to src/icons/${newIconCategory}/${cleanName}.jsx!`);
    setSelectedIcon(newIcon);
    setSelectedVirtualFile(`src/icons/${newIconCategory}/${cleanName}.jsx`);
    closeUploadModal();
  };

  const handleDeleteIcon = (id, name, e) => {
    e.stopPropagation();
    setIcons(icons.filter(icon => icon.id !== id));
    if (selectedIcon?.id === id) {
      setSelectedIcon(null);
    }
    triggerToast(`"${name}" removed from file directory.`);
  };

  const filteredIcons = useMemo(() => {
    return icons.filter(icon => {
      const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        icon.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === 'All' ||
        (activeCategory === 'Custom' && icon.type === 'custom') ||
        (icon.category === activeCategory && activeCategory !== 'Custom');

      return matchesSearch && matchesCategory;
    });
  }, [icons, searchQuery, activeCategory]);

  useEffect(() => {
    setVisibleCount(200);
  }, [searchQuery, activeCategory]);

  const visibleIcons = useMemo(() => {
    return filteredIcons.slice(0, visibleCount);
  }, [filteredIcons, visibleCount]);

  const stats = useMemo(() => {
    const standard = icons.filter(i => i.type === 'standard').length;
    const custom = icons.filter(i => i.type === 'custom').length;
    return { standard, custom, total: standard + custom };
  }, [icons]);

  const generatedCodes = useMemo(() => {
    if (!selectedIcon || !selectedIcon.nodes || selectedIcon.nodes.length === 0) return { svg: '', react: '', vue: '', tailwind: '', css: '' };

    const colorValue = selectedColor.hex;
    const pathsMarkup = selectedIcon.nodes.map(([tag, attrs]) => {
      const props = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
      if (renderStyle === 'solid') {
        return `<${tag} ${props} fill="${colorValue}" />`;
      } else {
        return `<${tag} ${props} stroke="${colorValue}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
    }).join('\n  ');

    const cleanSvgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="${globalSize}" height="${globalSize}" viewBox="0 0 24 24">\n  ${pathsMarkup}\n</svg>`;

    // Independent React Single Component File Module Code
    const reactPathsMarkup = selectedIcon.nodes.map(([tag, attrs]) => {
      const props = Object.entries(attrs).map(([k, v]) => {
        const reactKey = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${reactKey}="${v}"`;
      }).join(' ');
      if (renderStyle === 'solid') {
        return `      <${tag} ${props} fill="${colorValue}" />`;
      } else {
        return `      <${tag} ${props} stroke="${colorValue}" strokeWidth={${strokeWidth}} strokeLinecap="round" strokeLinejoin="round" fill="none" />`;
      }
    }).join('\n');
    const reactComponentCode = `import React from 'react';\n\nexport const ${selectedIcon.name} = ({ size = ${globalSize}, className = "" }) => {\n  return (\n    <svg \n      xmlns="http://www.w3.org/2000/svg" \n      width={size} \n      height={size} \n      viewBox="0 0 24 24"\n      className={className}\n    >\n${reactPathsMarkup}\n    </svg>\n  );\n};\n\nexport default ${selectedIcon.name};`;

    // Vue Template Single File Component
    const vuePathsMarkup = selectedIcon.nodes.map(([tag, attrs]) => {
      const props = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
      if (renderStyle === 'solid') {
        return `    <${tag} ${props} fill="${colorValue}" />`;
      } else {
        return `    <${tag} ${props} stroke="${colorValue}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
      }
    }).join('\n');
    const vueComponentCode = `<template>\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    :width="size"\n    :height="size"\n    viewBox="0 0 24 24"\n    :class="className"\n  >\n${vuePathsMarkup}\n  </svg>\n</template>\n\n<script setup>\ndefineProps({\n  size: { type: [Number, String], default: ${globalSize} },\n  className: { type: String, default: '' }\n});\n</script>`;

    // Modern Tailwind Inline Code
    const tailwindHtmlMarkup = `<div class="p-2 inline-flex items-center justify-center rounded-lg bg-slate-900">\n  <svg \n    class="w-[${globalSize}px] h-[${globalSize}px] text-[${colorValue}]" \n    xmlns="http://www.w3.org/2000/svg" \n    viewBox="0 0 24 24"\n  >\n    ${pathsMarkup.replace(new RegExp(colorValue, 'g'), 'currentColor')}\n  </svg>\n</div>`;

    // CSS data-uri variable
    const encodedSvg = encodeURIComponent(cleanSvgCode.replace(/"/g, "'").replace(/\n/g, "").replace(/\s+/g, " "));
    const cssDataUri = `.icon-${selectedIcon.name.toLowerCase()} {\n  display: inline-block;\n  width: ${globalSize}px;\n  height: ${globalSize}px;\n  background-image: url("data:image/svg+xml,${encodedSvg}");\n  background-repeat: no-repeat;\n  background-size: contain;\n}`;

    return {
      svg: cleanSvgCode,
      react: reactComponentCode,
      vue: vueComponentCode,
      tailwind: tailwindHtmlMarkup,
      css: cssDataUri
    };
  }, [selectedIcon, globalSize, strokeWidth, selectedColor, renderStyle]);

  const virtualFileContent = useMemo(() => {
    if (selectedVirtualFile === 'package.json') {
      return `{
  "name": "danesh-icons",
  "version": "2.5.0",
  "description": "Premium ultra-high performance tree-shakable modular SVG icons",
  "main": "./dist/index.js",
  "module": "./dist/esm/index.js",
  "types": "./dist/index.d.ts",
  "sideEffects": false,
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./icons/*": {
      "import": "./dist/esm/icons/*",
      "require": "./dist/icons/*"
    }
  },
  "peerDependencies": {
    "react": ">=16.8.0"
  },
  "keywords": ["icons", "react", "tree-shaking", "svg", "design-system"]
}`;
    }

    if (selectedVirtualFile === 'README.md') {
      return `# DaneshIcons Modular Library

Comprehensive, zero-dependency SVG icons structured as standalone single-file components.

## Standalone Subfolder Import (Guaranteed Zero-Slicing Overhead)
If your bundler lacks optimized ES Tree-Shaking, import components directly from their namespace:
\`\`\`javascript
import Search from 'danesh-icons/src/icons/General/Search.jsx';
\`\`\`

## Standard Import (ESM Bundled)
\`\`\`javascript
import { Search, Shield } from 'danesh-icons';
\`\`\``;
    }

    if (selectedVirtualFile === 'src/index.js') {
      return icons.map(i => `export { default as ${i.name} } from './icons/${i.category}/${i.name}.jsx';`).join('\n');
    }

    // Match path pattern: src/icons/Category/Name.jsx
    const match = selectedVirtualFile.match(/^src\/icons\/([^/]+)\/([^/]+)\.jsx$/);
    if (match) {
      const [_, category, name] = match;
      const targetIcon = icons.find(i => i.name === name && i.category === category);
      if (targetIcon) {
        const colorValue = selectedColor.hex;
        const reactPathsMarkup = targetIcon.nodes.map(([tag, attrs]) => {
          const props = Object.entries(attrs).map(([k, v]) => {
            const reactKey = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${reactKey}="${v}"`;
          }).join(' ');
          if (renderStyle === 'solid') {
            return `      <${tag} ${props} fill="${colorValue}" />`;
          } else {
            return `      <${tag} ${props} stroke="${colorValue}" strokeWidth={${strokeWidth}} strokeLinecap="round" strokeLinejoin="round" fill="none" />`;
          }
        }).join('\n');

        return `import React from 'react';

/**
 * DaneshIcons: ${targetIcon.name} (${targetIcon.category})
 * Standalone modular React component file.
 */
export const ${targetIcon.name} = ({ size = ${globalSize}, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} \n      viewBox="0 0 24 24"
      className={className}
    >
${reactPathsMarkup}
    </svg>
  );
};

export default ${targetIcon.name};`;
      }
    }

    return `// Select a file from the directory tree on the left to inspect its standalone code.`;
  }, [selectedVirtualFile, icons, globalSize, strokeWidth, selectedColor, renderStyle]);

  const handleUpdateSelectedPaths = (newVal) => {
    if (!selectedIcon) return;
    const pathsArray = newVal.split('\n').map(p => p.trim()).filter(Boolean);
    const newNodes = pathsArray.map(d => ['path', { d }]);

    setIcons(prev => prev.map(icon => {
      if (icon.id === selectedIcon.id) {
        const updated = { ...icon, nodes: newNodes };
        setSelectedIcon(updated);
        return updated;
      }
      return icon;
    }));
  };

  const creatorSvgPath = useMemo(() => {
    if (gridPoints.length === 0) return '';
    const scaleFactor = 2; // Map 12x12 builder coordinates onto Lucide 24x24 standard canvas
    let d = `M ${gridPoints[0].x * scaleFactor} ${gridPoints[0].y * scaleFactor}`;
    for (let i = 1; i < gridPoints.length; i++) {
      d += ` L ${gridPoints[i].x * scaleFactor} ${gridPoints[i].y * scaleFactor}`;
    }
    return d;
  }, [gridPoints]);

  const handleAddCreatorPointsToLibrary = () => {
    if (gridPoints.length < 2) {
      triggerToast('Click at least 2 grid coordinate points first.');
      return;
    }
    const finalName = creatorIconName.trim().replace(/\s+/g, '') || `VectorNode_${Date.now().toString().slice(-4)}`;

    const newIcon = {
      id: `custom-grid-${Date.now()}`,
      name: finalName,
      category: creatorCategory,
      type: 'custom',
      paths: [creatorSvgPath]
    };

    setIcons([newIcon, ...icons]);
    triggerToast(`"${finalName}" compiled to src/icons/${creatorCategory}/${finalName}.jsx`);
    setSelectedIcon(newIcon);
    setSelectedVirtualFile(`src/icons/${creatorCategory}/${finalName}.jsx`);
    setGridPoints([]);
    setCreatorIconName('');
  };

  const handleGridPointClick = (x, y) => {
    const existingIndex = gridPoints.findIndex(pt => pt.x === x && pt.y === y);
    if (existingIndex !== -1) {
      setGridPoints(prev => prev.filter((_, idx) => idx !== existingIndex));
    } else {
      setGridPoints(prev => [...prev, { x, y }]);
    }
  };

  const handleTerminalSubmit = (e) => {
    if (e) e.preventDefault();
    const query = terminalInput.trim().toLowerCase();
    if (!query) return;

    let reply = [];
    if (query === 'help') {
      reply = [
        { text: 'Available dynamic optimization CLI commands:', type: 'info' },
        { text: '  npm install danesh-icons  - Simulates modular workspace initialization', type: 'hint' },
        { text: '  danesh-icons optimize   - Triggers treeshake compression diagnostic', type: 'hint' },
        { text: '  clear                    - Clears terminal output logs', type: 'hint' }
      ];
    } else if (query.includes('install')) {
      reply = [
        { text: 'Fetching "danesh-icons" manifest from global npm registry...', type: 'info' },
        { text: 'Installed package. Zero high-severity vulnerabilities found.', type: 'success' },
        { text: `Package exports compiled: ${icons.length} tree-shakable ES modules structured in src/icons/`, type: 'info' }
      ];
    } else if (query.includes('optimize')) {
      const activeCount = bundledIcons.length;
      const totalCount = icons.length;
      const optimizedPct = Math.round((1 - (activeCount / totalCount)) * 100);
      reply = [
        { text: `Running modular workspace diagnostic on ${activeCount} imported modules...`, type: 'info' },
        { text: `Bundled size (standard ESM): ${(activeCount * 0.9).toFixed(1)} KB`, type: 'success' },
        { text: `Eliminated Dead Code: ${totalCount - activeCount} unused files excluded from bundle chunk!`, type: 'success' },
        { text: `Saved approx ${optimizedPct}% bundle footprint compared to monolithic imports!`, type: 'success' }
      ];
    } else if (query === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      reply = [{ text: `Command "${query}" not recognized. Type "help" for a list of valid routines.`, type: 'error' }];
    }

    setTerminalLogs(prev => [...prev, { text: `> ${terminalInput}`, type: 'user' }, ...reply]);
    setTerminalInput('');
  };

  const copyToClipboard = (text, typeLabel) => {
    try {
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = text;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextArea);
      triggerToast(`Copied ${typeLabel} successfully!`);
    } catch (err) {
      triggerToast('Could not copy automatically. Select text manually.');
    }
  };

  const downloadSvgFile = () => {
    if (!selectedIcon) return;
    const element = document.createElement("a");
    const file = new Blob([generatedCodes.svg], { type: 'image/svg+xml' });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedIcon.id}-${renderStyle}.svg`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    triggerToast(`Downloaded ${selectedIcon.name}.svg`);
  };

  const handleRasterExport = (format) => {
    if (!selectedIcon) return;
    const svgString = generatedCodes.svg;
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URLObject = window.URL || window.webkitURL || window;
    const blobUrl = URLObject.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const renderCanvas = document.createElement('canvas');
      const highResMultiplier = 4;
      renderCanvas.width = globalSize * highResMultiplier;
      renderCanvas.height = globalSize * highResMultiplier;

      const ctx = renderCanvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      if (format === 'jpg' || format === 'jpeg') {
        ctx.fillStyle = '#0f111a';
        ctx.fillRect(0, 0, renderCanvas.width, renderCanvas.height);
      } else {
        ctx.clearRect(0, 0, renderCanvas.width, renderCanvas.height);
      }

      ctx.drawImage(image, 0, 0, renderCanvas.width, renderCanvas.height);
      const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
      const outputDataUrl = renderCanvas.toDataURL(mimeType, 1.0);

      const downloader = document.createElement('a');
      downloader.href = outputDataUrl;
      downloader.download = `${selectedIcon.id}-${globalSize}px.${format}`;
      document.body.appendChild(downloader);
      downloader.click();
      document.body.removeChild(downloader);

      URLObject.revokeObjectURL(blobUrl);
      triggerToast(`Rasterized & exported to ${format.toUpperCase()}`);
    };
    image.src = blobUrl;
  };

  const toggleIconBundleStatus = (id) => {
    if (bundledIcons.includes(id)) {
      if (bundledIcons.length > 1) {
        setBundledIcons(prev => prev.filter(x => x !== id));
      } else {
        triggerToast("At least one icon must remain in the production bundle.");
      }
    } else {
      setBundledIcons(prev => [...prev, id]);
    }
  };

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  // Organize files in structure
  const iconsByCategory = useMemo(() => {
    const map = {};
    CATEGORIES.filter(c => c !== 'All').forEach(cat => {
      map[cat] = icons.filter(i => {
        if (cat === 'Custom') return i.type === 'custom';
        return i.category === cat && i.type !== 'custom';
      });
    });
    return map;
  }, [icons]);

  return (
    <div className="min-h-screen bg-[#06070a] text-slate-100 font-sans selection:bg-purple-500/30 overflow-hidden flex flex-col h-screen">

      {/* Floating Toast Alerts */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 rounded-xl shadow-[0_4px_25px_rgba(168,85,247,0.5)] border border-purple-400/20 text-white animate-fade-in-up">
          <Sparkles size={16} className="text-amber-200" />
          <span className="font-bold text-xs tracking-wide">{toast.message}</span>
        </div>
      )}

      {/* Main Top Navbar */}
      <header className="border-b border-white/[0.03] bg-[#090a10] shrink-0 h-16 flex items-center justify-between px-6 z-40">

        {/* Logo and control panel trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
            className={`p-1.5 rounded-lg hover:bg-slate-900 border transition-all ${isLeftSidebarOpen ? 'bg-purple-600/10 border-purple-500/20 text-purple-400' : 'border-white/[0.04] text-slate-400'}`}
            title="Toggle Sidebar Control Panel"
          >
            <Sliders size={18} />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5-3 5 3-.813-5.096M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              </svg>
            </div>
            <div>
              <span className="font-black text-md tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Danesh<span className="text-purple-400">Icons</span>
              </span>
              <span className="text-[9px] bg-slate-900 border border-white/5 text-purple-400 px-1.5 py-0.2 rounded ml-1.5 font-mono uppercase tracking-widest font-bold">Design System Pro</span>
            </div>
          </div>
        </div>

        {/* Platform View Mode Toggles */}
        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-white/[0.05]">
          <button
            onClick={() => setActivePlatformMode('studio')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${activePlatformMode === 'studio' ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-300 border border-purple-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            <Grid size={13} />
            <span>Studio Workspace</span>
          </button>
          <button
            onClick={() => setActivePlatformMode('design-system')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${activePlatformMode === 'design-system' ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-300 border border-purple-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            <Layers size={13} />
            <span>Developer Package Explorer</span>
          </button>
        </div>

        {/* Global Statistics & Upload trigger */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex bg-slate-950/80 border border-white/[0.05] rounded-xl p-0.5 text-[10px] font-bold">
            <div className="px-3 py-1 text-slate-400 border-r border-white/10 flex items-center gap-1">
              STANDARD <span className="text-purple-400 font-mono">{stats.standard}</span>
            </div>
            <div className="px-3 py-1 text-slate-400 border-r border-white/10 flex items-center gap-1">
              CUSTOM DB <span className="text-cyan-400 font-mono">{stats.custom}</span>
            </div>
            <div className="px-3 py-1 text-white flex items-center gap-1">
              TOTAL ASSETS <span className="text-pink-400 font-mono">{stats.total}</span>
            </div>
          </div>

          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] flex items-center gap-1.5"
          >
            <Plus size={14} className="group-hover:rotate-90 transition-transform duration-300" />
            <span>Upload SVG</span>
          </button>
        </div>

      </header>

      {/* Main Container Layer (Fully flexible columns layout) */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* ========================================================= */}
        {/* COLUMN 1: LEFT SIDEBAR (Controls, Vector Editor, Performance Metrics) */}
        {/* ========================================================= */}
        <aside
          className={`bg-[#090a10] border-r border-white/[0.03] transition-all duration-300 shrink-0 overflow-y-auto flex flex-col justify-between ${isLeftSidebarOpen ? 'w-80 opacity-100' : 'w-0 opacity-0 pointer-events-none border-r-0'}`}
        >
          <div className="flex flex-col h-full">

            {/* Upper Tab selector */}
            <div className="grid grid-cols-3 border-b border-white/[0.03] shrink-0">
              <button
                onClick={() => setActiveLeftPanel('controls')}
                className={`py-3 text-[10px] font-black tracking-wider uppercase flex flex-col items-center justify-center gap-1 border-b-2 transition-all ${activeLeftPanel === 'controls' ? 'border-purple-500 text-white bg-white/[0.01]' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
              >
                <Sliders size={13} />
                <span>Customizer</span>
              </button>
              <button
                onClick={() => setActiveLeftPanel('svg-creator')}
                className={`py-3 text-[10px] font-black tracking-wider uppercase flex flex-col items-center justify-center gap-1 border-b-2 transition-all ${activeLeftPanel === 'svg-creator' ? 'border-purple-500 text-white bg-white/[0.01]' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
              >
                <PenTool size={13} className="text-cyan-400" />
                <span>Grid Editor</span>
              </button>
              <button
                onClick={() => setActiveLeftPanel('bundle-shake')}
                className={`py-3 text-[10px] font-black tracking-wider uppercase flex flex-col items-center justify-center gap-1 border-b-2 transition-all ${activeLeftPanel === 'bundle-shake' ? 'border-purple-500 text-white bg-white/[0.01]' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
              >
                <Activity size={13} className="text-emerald-400" />
                <span>Sizing</span>
              </button>
            </div>

            {/* Sub-Panel 1: Global Customizers, Categories & Styles */}
            {activeLeftPanel === 'controls' && (
              <div className="p-5 space-y-5 flex-1 overflow-y-auto">

                {/* Search Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Search Assets</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                    <input
                      type="text"
                      placeholder="Type to filter..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-slate-950 border border-white/[0.05] focus:border-purple-500/50 focus:outline-none text-slate-200 placeholder:text-slate-600 text-xs transition-all focus:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-400 rounded px-1.5 py-0.5"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {/* Categories listing */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Library Categories</label>
                  <div className="space-y-1">
                    {CATEGORIES.map(cat => {
                      const count = cat === 'All' ? icons.length :
                        cat === 'Custom' ? icons.filter(i => i.type === 'custom').length :
                          icons.filter(i => i.category === cat).length;
                      const isActive = activeCategory === cat;

                      return (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${isActive
                            ? 'bg-gradient-to-r from-purple-600/10 to-indigo-600/10 text-purple-300 border border-purple-500/20 shadow-sm'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'}`}
                        >
                          <span className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-purple-500' : 'bg-slate-700'}`} />
                            {cat}
                          </span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${isActive ? 'bg-purple-500/30 text-white' : 'bg-slate-900 text-slate-500'}`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="h-px bg-white/[0.03]"></div>

                {/* Customization Sliders */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <Maximize2 size={12} className="text-purple-400" />
                        Global Size
                      </span>
                      <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 px-1.5 py-0.2 rounded">
                        {globalSize}PX
                      </span>
                    </div>
                    <input
                      type="range"
                      min="16"
                      max="64"
                      value={globalSize}
                      onChange={(e) => setGlobalSize(parseInt(e.target.value))}
                      className="w-full accent-purple-500 bg-slate-950 h-1 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <Sliders size={12} className="text-pink-400" />
                        Stroke Width
                      </span>
                      <span className="text-[10px] font-mono font-bold text-pink-400 bg-pink-500/10 px-1.5 py-0.2 rounded">
                        {strokeWidth}PX
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="4"
                      step="0.5"
                      value={strokeWidth}
                      disabled={renderStyle === 'solid'}
                      onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
                      className={`w-full accent-pink-500 bg-slate-950 h-1 rounded-lg cursor-pointer ${renderStyle === 'solid' ? 'opacity-20 cursor-not-allowed' : ''}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Render Style</span>
                    <div className="grid grid-cols-2 gap-1 bg-slate-950 p-1 rounded-xl border border-white/[0.04]">
                      <button
                        onClick={() => setRenderStyle('outline')}
                        className={`py-1 rounded-lg text-xs font-bold transition-all ${renderStyle === 'outline' ? 'bg-slate-900 text-white shadow border border-white/[0.03]' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        Outline
                      </button>
                      <button
                        onClick={() => setRenderStyle('solid')}
                        className={`py-1 rounded-lg text-xs font-bold transition-all ${renderStyle === 'solid' ? 'bg-slate-900 text-white shadow border border-white/[0.03]' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        Solid
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Theme Color Swatch</span>
                    <div className="flex flex-wrap gap-2 py-1">
                      {THEME_COLORS.map(color => {
                        const isSelected = selectedColor.name === color.name;
                        return (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(color)}
                            style={{ backgroundColor: color.hex }}
                            className={`w-5 h-5 rounded-full transition-all relative ${isSelected ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-[#06070a] scale-110 ' + color.glow : 'hover:scale-105 opacity-70 hover:opacity-100'}`}
                            title={color.name}
                          >
                            {isSelected && (
                              <Check size={10} className={`absolute inset-0 m-auto ${color.name === 'White' ? 'text-black' : 'text-white'}`} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Sub-Panel 2: INTERACTIVE SVG VECTOR GRID CREATOR */}
            {activeLeftPanel === 'svg-creator' && (
              <div className="p-5 space-y-4 flex-1 overflow-y-auto flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Interactive Vector Matrix</span>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Click points on the $12 \times 12$ matrix coordinates system to connect paths and compile custom vector objects.
                    </p>
                  </div>

                  {/* Interactive Drawing Matrix */}
                  <div className="bg-slate-950 p-3 rounded-2xl border border-white/5 flex flex-col items-center">
                    <div className="grid grid-cols-12 gap-1 w-full aspect-square bg-[#0b0c13] p-2 rounded-xl relative border border-white/[0.03]">

                      {/* Grid background lines */}
                      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-20">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="border-r border-slate-600 h-full" />
                        ))}
                      </div>
                      <div className="absolute inset-0 grid grid-rows-12 pointer-events-none opacity-20">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="border-b border-slate-600 w-full" />
                        ))}
                      </div>

                      {/* Map Nodes on Matrix */}
                      {Array.from({ length: 12 }).map((_, y) => (
                        Array.from({ length: 12 }).map((_, x) => {
                          const pointIndex = gridPoints.findIndex(pt => pt.x === x && pt.y === y);
                          const isSelected = pointIndex !== -1;

                          return (
                            <button
                              key={`${x}-${y}`}
                              type="button"
                              onClick={() => handleGridPointClick(x, y)}
                              className={`aspect-square rounded-full transition-all relative z-10 ${isSelected ? 'bg-cyan-400 scale-125 ring-2 ring-cyan-400/50' : 'bg-white/5 hover:bg-white/20 scale-75'}`}
                              title={`Coordinate (${x}, ${y})`}
                            >
                              {isSelected && (
                                <span className="absolute -top-3 -left-3 bg-cyan-950 text-cyan-300 text-[8px] font-mono px-1 rounded border border-cyan-500/30 scale-75">
                                  {pointIndex + 1}
                                </span>
                              )}
                            </button>
                          );
                        })
                      ))}
                    </div>

                    <div className="flex w-full justify-between mt-3">
                      <button
                        onClick={() => setGridPoints([])}
                        className="text-[10px] text-slate-500 hover:text-slate-300 flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-white/5"
                      >
                        <RotateCcw size={10} />
                        Reset Canvas
                      </button>

                      <span className="text-[10px] font-mono text-slate-400 flex items-center">
                        Nodes: <strong className="text-cyan-400 ml-1">{gridPoints.length}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Vector Label Name</label>
                      <input
                        type="text"
                        placeholder="e.g. HexagonNode, Polygon"
                        value={creatorIconName}
                        onChange={(e) => setCreatorIconName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/[0.05] text-slate-200 text-xs focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Compiled d-Attribute</label>
                      <div className="bg-slate-950 p-2 rounded-xl border border-white/5 font-mono text-[9px] text-cyan-200 break-all select-all">
                        {creatorSvgPath || 'Select matrix nodes above to design coordinate paths.'}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddCreatorPointsToLibrary}
                  disabled={gridPoints.length < 2}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-black tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none mt-2 shrink-0"
                >
                  <Save size={13} />
                  Compile to Library
                </button>
              </div>
            )}

            {/* Sub-Panel 3: BUNDLE SIZE & TREE-SHAKING RADAR SIMULATOR */}
            {activeLeftPanel === 'bundle-shake' && (
              <div className="p-5 space-y-4 flex-1 overflow-y-auto">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Optimization & Bundle Analytics</span>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Visualize how modular imports eliminate unused code pathways compared to traditional monolithic package architectures.
                  </p>
                </div>

                {/* Import method selector */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Import Sourcing Strategy</span>
                  <div className="grid grid-cols-2 gap-1 bg-slate-950 p-1 rounded-xl border border-white/[0.04]">
                    <button
                      onClick={() => setImportStyle('tree-shaked')}
                      className={`py-1.5 rounded-lg text-[10px] font-bold transition-all ${importStyle === 'tree-shaked' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 shadow' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      ESM Tree-shaked
                    </button>
                    <button
                      onClick={() => setImportStyle('bulk')}
                      className={`py-1.5 rounded-lg text-[10px] font-bold transition-all ${importStyle === 'bulk' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/20 shadow' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      Monolithic Import
                    </button>
                  </div>
                </div>

                {/* Footprint metrics gauge */}
                <div className="bg-slate-950 rounded-2xl p-4 border border-white/5 space-y-3">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Calculated Package Weight</span>

                  <div className="flex justify-between items-baseline">
                    <span className="text-3xl font-black font-mono tracking-tight text-white">
                      {importStyle === 'tree-shaked'
                        ? `${(bundledIcons.length * 0.9).toFixed(1)} KB`
                        : `${(icons.length * 0.9).toFixed(1)} KB`
                      }
                    </span>
                    <span className="text-[10px] font-bold text-slate-500">
                      {importStyle === 'tree-shaked' ? 'Highly Optimized' : 'Monolithic payload'}
                    </span>
                  </div>

                  {/* Weight bar */}
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden flex">
                    <div
                      className={`h-full transition-all duration-500 ${importStyle === 'tree-shaked' ? 'bg-emerald-500' : 'bg-rose-500'}`}
                      style={{
                        width: importStyle === 'tree-shaked'
                          ? `${(bundledIcons.length / icons.length) * 100}%`
                          : '100%'
                      }}
                    />
                  </div>

                  <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                    <span>Used Modules: {importStyle === 'tree-shaked' ? bundledIcons.length : icons.length}</span>
                    <span>Total Library: {icons.length}</span>
                  </div>
                </div>

                {/* AST Pruning explanation graphic */}
                <div className="bg-[#0c0d15] rounded-xl p-3 border border-white/[0.03] space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles size={12} className="text-emerald-400" />
                    <span className="text-[10px] font-bold text-slate-300 uppercase">Tree Pruning (Tree-Shaking)</span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-slate-400">
                    Because <code className="text-purple-300">danesh-icons</code> contains <code className="text-emerald-300">"sideEffects": false</code> in <code className="text-amber-300">package.json</code>, compilers will extract only the icons designated in your import syntax, excluding unused pathways.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Select Icons to Add to Bundle</span>
                  <div className="grid grid-cols-4 gap-1 max-h-40 overflow-y-auto p-1 bg-slate-950 rounded-xl border border-white/5">
                    {visibleIcons.map(icon => {
                      const isIncluded = bundledIcons.includes(icon.id);
                      return (
                        <button
                          key={icon.id}
                          onClick={() => toggleIconBundleStatus(icon.id)}
                          className={`p-1 text-[9px] font-bold rounded border truncate transition-all ${isIncluded ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-slate-900 border-white/5 text-slate-500'}`}
                        >
                          {icon.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Footer info */}
          <div className="p-4 bg-slate-950/60 border-t border-white/[0.03] text-[10px] text-slate-500 space-y-1 shrink-0">
            <p className="font-bold text-slate-400">DaneshIcons Engine v2.5.0</p>
            <p>Export vector or standalone modular file components.</p>
          </div>

        </aside>

        {/* ========================================================= */}
        {/* COLUMN 2: CENTER VIEWPORT (The Studio Grid OR Developer Workspace) */}
        {/* ========================================================= */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-[#07080d] p-6 relative">

          {activePlatformMode === 'studio' ? (
            /* PLATFORM MODE A: STUDIO WORKSPACE */
            <div className="flex-1 flex flex-col min-h-0">

              {/* Density control header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 bg-[#090a10] border border-white/[0.03] p-4 rounded-2xl shrink-0">
                <div>
                  <h2 className="text-sm font-black uppercase tracking-wider text-slate-200 flex items-center gap-2">
                    <Grid size={14} className="text-purple-400" />
                    Asset Library Workspace ({filteredIcons.length} components)
                  </h2>
                  <p className="text-[10px] text-slate-500 mt-0.5">Click any standard or custom design asset below to view production exports</p>
                </div>

                {/* Grid density selector */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-white/[0.04] text-[10px] font-bold">
                  <span className="text-slate-500 px-2 uppercase tracking-widest text-[8px]">Density:</span>
                  <button
                    onClick={() => setGridDensity('ultra')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${gridDensity === 'ultra' ? 'bg-purple-600/20 text-purple-300' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Ultra
                  </button>
                  <button
                    onClick={() => setGridDensity('compact')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${gridDensity === 'compact' ? 'bg-purple-600/20 text-purple-300' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Compact
                  </button>
                  <button
                    onClick={() => setGridDensity('comfortable')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${gridDensity === 'comfortable' ? 'bg-purple-600/20 text-purple-300' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Comfortable
                  </button>
                </div>
              </div>

              {/* Grid Renderer */}
              {filteredIcons.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-2xl p-12 text-center bg-[#090a10]/40">
                  <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center mb-3">
                    <Search size={18} className="text-slate-600" />
                  </div>
                  <h3 className="text-slate-300 font-bold text-xs">No matching components</h3>
                  <p className="text-slate-500 text-xs mt-1">Try tweaking filters or upload custom SVG markups.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                    className="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-850 border border-white/5 rounded-xl text-xs font-bold text-slate-300 transition-all"
                  >
                    Reset Explorer Filter
                  </button>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto pr-1">
                  <div className={`grid gap-3 transition-all ${gridDensity === 'ultra'
                    ? 'grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12'
                    : gridDensity === 'comfortable'
                      ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'
                      : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8'}`}
                  >
                    {/* Inline direct custom upload item */}
                    <div
                      onClick={() => setIsUploadModalOpen(true)}
                      className={`group border border-dashed border-purple-500/10 hover:border-purple-500/40 bg-purple-950/[0.02] hover:bg-purple-950/[0.05] rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center text-center ${gridDensity === 'ultra' ? 'p-2 min-h-[85px]' : gridDensity === 'comfortable' ? 'p-5 min-h-[130px]' : 'p-3.5 min-h-[105px]'}`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center mb-1 group-hover:scale-105 transition-all">
                        <Plus className="text-purple-400" size={14} />
                      </div>
                      <span className="text-[10px] font-bold text-purple-300 group-hover:text-white">Add Custom</span>
                      <span className="text-[8px] text-purple-500/60 mt-0.5">Vector DB</span>
                    </div>

                    {/* Mapped Icons */}
                    {visibleIcons.map(icon => {
                      const isSelected = selectedIcon?.id === icon.id;
                      return (
                        <div
                          key={icon.id}
                          onClick={() => {
                            setSelectedIcon(icon);
                            // Highlight in virtual editor tree as well
                            setSelectedVirtualFile(`src/icons/${icon.category}/${icon.name}.jsx`);
                          }}
                          className={`group relative rounded-xl bg-[#090a10] border transition-all cursor-pointer flex flex-col items-center justify-center text-center select-none ${isSelected
                            ? 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)] bg-[#0e0f19]'
                            : 'border-white/[0.03] hover:border-white/10 hover:bg-[#0c0d16]'
                            } ${gridDensity === 'ultra' ? 'p-2 min-h-[85px]' : gridDensity === 'comfortable' ? 'p-5 min-h-[130px]' : 'p-3.5 min-h-[105px]'}`}
                        >
                          {icon.type === 'custom' && (
                            <button
                              onClick={(e) => handleDeleteIcon(icon.id, icon.name, e)}
                              className="absolute top-1.5 right-1.5 p-1 rounded-md opacity-0 group-hover:opacity-100 hover:bg-rose-500/20 hover:text-rose-400 text-slate-500 transition-all"
                              title="Delete component"
                            >
                              <Trash2 size={11} />
                            </button>
                          )}

                          <div
                            className="flex items-center justify-center transition-transform group-hover:scale-105 duration-200"
                            style={{
                              width: `${Math.max(globalSize, 28)}px`,
                              height: `${Math.max(globalSize, 28)}px`
                            }}
                          >
                            <LazyIcon
                              icon={icon}
                              renderStyle={renderStyle}
                              strokeWidth={strokeWidth}
                              globalSize={globalSize}
                              selectedColor={selectedColor}
                            />
                          </div>

                          <div className="mt-2 w-full overflow-hidden text-ellipsis px-1">
                            <p className="text-[10px] font-bold text-slate-300 group-hover:text-white truncate">
                              {icon.name}
                            </p>
                            <span className={`text-[7px] font-bold uppercase tracking-wider px-1 py-0.2 rounded-sm ${icon.type === 'custom' ? 'bg-cyan-500/15 text-cyan-400' : 'bg-slate-950 text-slate-500'}`}>
                              {icon.type === 'custom' ? 'CUSTOM' : 'STANDARD'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* PLATFORM MODE B: DEVELOPER PORTAL PACKAGE FILES */
            <div className="flex-1 flex flex-col min-h-0 space-y-6">

              <div className="bg-[#090a10] border border-white/[0.03] p-4 rounded-2xl flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <h2 className="text-sm font-black uppercase tracking-wider text-slate-200 flex items-center gap-2">
                    <Layers size={14} className="text-emerald-400" />
                    Distributed Package Registry Tree (Modular Hierarchy)
                  </h2>
                  <p className="text-[10px] text-slate-500 mt-0.5">Explore compile-ready outputs supporting standalone direct subfolder component imports.</p>
                </div>
                <div className="text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-white/5 flex items-center gap-2 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  sideEffects: false
                </div>
              </div>

              {/* Developer explorer column division */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">

                {/* Visual File Tree Structure */}
                <div className="bg-[#090a10] border border-white/[0.03] rounded-2xl p-4 flex flex-col overflow-y-auto">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-3">Modular Directory Structure</span>

                  <div className="space-y-1 text-xs select-none">
                    <div className="flex items-center gap-2 p-1 text-slate-400 font-bold font-mono">
                      <FolderOpen className="text-amber-500" size={14} />
                      <span>danesh-icons/</span>
                    </div>

                    <div className="pl-4 space-y-1">
                      {/* package.json */}
                      <button
                        onClick={() => setSelectedVirtualFile('package.json')}
                        className={`w-full text-left font-mono flex items-center gap-2 p-1 rounded-lg transition-all ${selectedVirtualFile === 'package.json' ? 'bg-purple-600/15 text-purple-300 border border-purple-500/10' : 'text-slate-400 hover:bg-white/[0.02]'}`}
                      >
                        <FileCode size={13} className="text-cyan-400" />
                        <span>package.json</span>
                      </button>

                      {/* README.md */}
                      <button
                        onClick={() => setSelectedVirtualFile('README.md')}
                        className={`w-full text-left font-mono flex items-center gap-2 p-1 rounded-lg transition-all ${selectedVirtualFile === 'README.md' ? 'bg-purple-600/15 text-purple-300 border border-purple-500/10' : 'text-slate-400 hover:bg-white/[0.02]'}`}
                      >
                        <Info size={13} className="text-blue-400" />
                        <span>README.md</span>
                      </button>

                      {/* src/ folder structure */}
                      <div className="space-y-1">
                        <button
                          onClick={() => toggleFolder('src')}
                          className="w-full text-left font-mono flex items-center justify-between p-1 rounded hover:bg-white/[0.01] text-slate-300"
                        >
                          <span className="flex items-center gap-2">
                            {expandedFolders.src ? <FolderOpen className="text-amber-500" size={13} /> : <Folder className="text-amber-500" size={13} />}
                            <span className="font-bold">src/</span>
                          </span>
                          <ChevronDown size={12} className={`text-slate-500 transition-transform ${expandedFolders.src ? '' : '-rotate-90'}`} />
                        </button>

                        {expandedFolders.src && (
                          <div className="pl-4 border-l border-white/5 ml-2.5 space-y-1">

                            {/* index.js inside src/ */}
                            <button
                              onClick={() => setSelectedVirtualFile('src/index.js')}
                              className={`w-full text-left font-mono flex items-center gap-2 p-1 rounded-lg transition-all ${selectedVirtualFile === 'src/index.js' ? 'bg-purple-600/15 text-purple-300 border border-purple-500/10' : 'text-slate-400 hover:bg-white/[0.02]'}`}
                            >
                              <Code size={13} className="text-purple-400" />
                              <span>index.js</span>
                            </button>

                            {/* icons/ folder structure */}
                            <div className="space-y-1">
                              <button
                                onClick={() => toggleFolder('icons')}
                                className="w-full text-left font-mono flex items-center justify-between p-1 rounded hover:bg-white/[0.01] text-slate-300"
                              >
                                <span className="flex items-center gap-2">
                                  {expandedFolders.icons ? <FolderOpen className="text-amber-500" size={13} /> : <Folder className="text-amber-500" size={13} />}
                                  <span>icons/</span>
                                </span>
                                <ChevronDown size={12} className={`text-slate-500 transition-transform ${expandedFolders.icons ? '' : '-rotate-90'}`} />
                              </button>

                              {expandedFolders.icons && (
                                <div className="pl-4 border-l border-white/5 ml-2.5 space-y-1">

                                  {/* Subfolders for categories */}
                                  {CATEGORIES.filter(c => c !== 'All').map(cat => {
                                    const hasIcons = iconsByCategory[cat]?.length > 0;
                                    const isExpanded = expandedFolders[cat];

                                    return (
                                      <div key={cat} className="space-y-0.5">
                                        <button
                                          onClick={() => toggleFolder(cat)}
                                          className="w-full text-left font-mono flex items-center justify-between p-0.5 rounded hover:bg-white/[0.01] text-slate-400"
                                        >
                                          <span className="flex items-center gap-1.5 text-[11px]">
                                            {isExpanded ? <FolderOpen className="text-yellow-600/80" size={11} /> : <Folder className="text-yellow-600/80" size={11} />}
                                            <span className="font-semibold">{cat}/</span>
                                          </span>
                                          <span className="text-[9px] text-slate-600 px-1 font-mono">({iconsByCategory[cat]?.length || 0})</span>
                                        </button>

                                        {isExpanded && hasIcons && (
                                          <div className="pl-3 border-l border-white/5 ml-1.5 space-y-0.5">
                                            {iconsByCategory[cat].slice(0, 100).map(icon => {
                                              const fileKey = `src/icons/${cat}/${icon.name}.jsx`;
                                              const isFileSelected = selectedVirtualFile === fileKey;
                                              return (
                                                <button
                                                  key={icon.id}
                                                  onClick={() => {
                                                    setSelectedVirtualFile(fileKey);
                                                    setSelectedIcon(icon);
                                                  }}
                                                  className={`w-full text-left font-mono flex items-center gap-1.5 p-1 rounded text-[10px] transition-all ${isFileSelected ? 'bg-emerald-500/10 text-emerald-300 border-l-2 border-emerald-500' : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.01]'}`}
                                                >
                                                  <FileCode size={11} className={isFileSelected ? 'text-emerald-400' : 'text-slate-600'} />
                                                  <span>{icon.name}.jsx</span>
                                                </button>
                                              );
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}

                                </div>
                              )}
                            </div>

                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Optimization highlights */}
                  <div className="mt-auto bg-slate-950 p-3 rounded-xl border border-white/5 space-y-2 text-[10px] shrink-0">
                    <span className="font-bold text-slate-300 block flex items-center gap-1">
                      <Sparkles size={11} className="text-emerald-400" />
                      Standalone Direct Import
                    </span>
                    <p className="text-slate-500 leading-normal">
                      Every icon is isolated in its own folder category component. You don't have to load the whole package bundle—simply fetch exactly what you require.
                    </p>
                  </div>
                </div>

                {/* Simulated File Code Editor */}
                <div className="lg:col-span-2 bg-[#090a10] border border-white/[0.03] rounded-2xl p-4 flex flex-col min-h-0">
                  <div className="flex items-center justify-between mb-3 border-b border-white/[0.03] pb-2 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="text-[10px] text-slate-500 font-mono ml-2 uppercase tracking-wide truncate max-w-[200px] md:max-w-xs">
                        {selectedVirtualFile}
                      </span>
                    </div>

                    <button
                      onClick={() => copyToClipboard(virtualFileContent, 'Virtual File Code')}
                      className="px-2.5 py-1 bg-slate-950 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white rounded-lg text-[10px] font-bold transition-all flex items-center gap-1.5"
                    >
                      <Copy size={11} />
                      <span>Copy Code</span>
                    </button>
                  </div>

                  <div className="flex-1 overflow-auto bg-slate-950 rounded-xl p-4 border border-white/[0.05] font-mono text-xs text-purple-200">
                    <pre className="whitespace-pre">{virtualFileContent}</pre>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* Collapsible Interactive Terminal Sandbox Console */}
          <div className="mt-6 bg-slate-950 rounded-2xl border border-white/5 overflow-hidden shrink-0 flex flex-col">
            <div className="bg-[#0b0c13] px-4 py-2 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal size={12} className="text-purple-400 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Simulated CLI Terminal Terminal</span>
              </div>
              <span className="text-[8px] font-bold text-slate-600 font-mono">CONSOLE INTERACTION ACTIVE</span>
            </div>

            <div className="p-3 max-h-32 overflow-y-auto font-mono text-[10px] space-y-1 bg-slate-950">
              {terminalLogs.map((log, index) => (
                <div key={index} className={`flex gap-1.5 ${log.type === 'error' ? 'text-rose-400' :
                    log.type === 'success' ? 'text-emerald-400' :
                      log.type === 'hint' ? 'text-cyan-400' :
                        log.type === 'user' ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                  <span className="select-none text-slate-600">[{new Date().toLocaleTimeString()}]</span>
                  <span>{log.text}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleTerminalSubmit} className="flex border-t border-white/5 bg-slate-950">
              <span className="px-3 py-2 text-purple-400 font-mono text-[10px] select-none">$</span>
              <input
                type="text"
                placeholder='Type "help" to display optimization routines...'
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-[10px] font-mono py-2 text-white placeholder:text-slate-700"
              />
              <button
                type="submit"
                className="px-4 bg-purple-600/10 text-purple-300 hover:bg-purple-600/20 text-[10px] font-bold border-l border-white/5 font-mono"
              >
                Execute
              </button>
            </form>
          </div>

        </main>

        {/* ========================================================= */}
        {/* COLUMN 3: RIGHT SIDEBAR (THE COMPREHENSIVE CONVERTER)     */}
        {/* ========================================================= */}
        <aside
          className={`bg-[#090a10] border-l border-white/[0.03] transition-all duration-300 shrink-0 overflow-y-auto flex flex-col justify-between ${selectedIcon ? 'w-80 opacity-100' : 'w-0 opacity-0 pointer-events-none border-l-0'}`}
        >
          {selectedIcon && (
            <div className="p-5 space-y-5 flex-1 flex flex-col justify-between h-full">

              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles size={11} className="text-purple-400 animate-pulse" />
                    Asset Compiler
                  </span>
                  <button
                    onClick={() => setSelectedIcon(null)}
                    className="p-1 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-white/5 transition-all"
                  >
                    <X size={13} />
                  </button>
                </div>

                {/* Compiled Viewport */}
                <div className="bg-slate-950 rounded-2xl border border-white/[0.04] p-5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:8px_8px] opacity-15"></div>

                  <div className="w-16 h-16 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-center shadow-inner relative z-10">
                    <LazyIcon
                      icon={selectedIcon}
                      renderStyle={renderStyle}
                      strokeWidth={strokeWidth}
                      globalSize={Math.min(52, Math.max(20, globalSize))}
                      selectedColor={selectedColor}
                    />
                  </div>

                  <div className="mt-3 z-10">
                    <h3 className="text-xs font-black text-white">{selectedIcon.name}</h3>
                    <p className="text-[9px] text-slate-500 uppercase font-semibold mt-0.5">{selectedIcon.category} Category</p>
                  </div>
                </div>

                {/* Compiler Tabs */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Export Target Code</label>
                  <div className="grid grid-cols-5 gap-0.5 bg-slate-950 p-1 rounded-xl border border-white/[0.04]">
                    {[
                      { id: 'react', label: 'React' },
                      { id: 'vue', label: 'Vue' },
                      { id: 'svg', label: 'SVG' },
                      { id: 'tailwind', label: 'Tailwind' },
                      { id: 'css', label: 'CSS' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveConvertTab(tab.id)}
                        className={`py-1 text-[9px] rounded-lg font-bold transition-all text-center ${activeConvertTab === tab.id ? 'bg-purple-600/20 text-purple-300' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real-time Code Output Block */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Live Snippet</span>
                    <span className="text-[8px] bg-slate-950 text-purple-400 px-1.5 py-0.2 rounded font-mono uppercase">LIVE COMPILER</span>
                  </div>

                  <div className="bg-slate-950 rounded-xl border border-white/[0.05] p-3 text-xs font-mono text-purple-200/90 relative group/box">
                    <pre className="max-h-36 overflow-y-auto whitespace-pre-wrap text-[9px] leading-relaxed scrollbar-thin">
                      {activeConvertTab === 'react' && generatedCodes.react}
                      {activeConvertTab === 'vue' && generatedCodes.vue}
                      {activeConvertTab === 'svg' && generatedCodes.svg}
                      {activeConvertTab === 'tailwind' && generatedCodes.tailwind}
                      {activeConvertTab === 'css' && generatedCodes.css}
                    </pre>

                    <button
                      onClick={() => {
                        let textToCopy = '';
                        if (activeConvertTab === 'react') textToCopy = generatedCodes.react;
                        if (activeConvertTab === 'vue') textToCopy = generatedCodes.vue;
                        if (activeConvertTab === 'svg') textToCopy = generatedCodes.svg;
                        if (activeConvertTab === 'tailwind') textToCopy = generatedCodes.tailwind;
                        if (activeConvertTab === 'css') textToCopy = generatedCodes.css;
                        copyToClipboard(textToCopy, activeConvertTab.toUpperCase() + ' Code');
                      }}
                      className="absolute bottom-2 right-2 p-1.5 rounded bg-slate-900 border border-white/10 hover:bg-slate-800 text-slate-300 hover:text-white transition-all flex items-center gap-1 text-[9px] font-sans font-bold shadow-md"
                    >
                      <Copy size={11} />
                      <span>Copy</span>
                    </button>
                  </div>
                </div>

                {/* Direct Vector Path Node Editor */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Live SVG Paths (Editable)</span>
                    <span className="text-[9px] text-purple-400 font-bold uppercase tracking-wider">EDITABLE</span>
                  </div>
                  <textarea
                    rows="2"
                    value={(selectedIcon.nodes || []).map(([tag, attrs]) => attrs.d || '').join('\n')}
                    onChange={(e) => handleUpdateSelectedPaths(e.target.value)}
                    className="w-full bg-slate-950 text-[10px] font-mono p-2.5 rounded-xl border border-white/[0.05] text-cyan-200 focus:outline-none focus:border-purple-500/50 leading-relaxed"
                    placeholder="Enter d-attribute vector per line..."
                  />
                  <p className="text-[9px] text-slate-500">Edit coordinate lines here to live-preview morphs.</p>
                </div>

              </div>

              {/* Action operations buttons */}
              <div className="space-y-2 pt-4 border-t border-white/[0.04] shrink-0">
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Convert & Download Raster Images</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleRasterExport('png')}
                      className="py-2 rounded-xl bg-slate-950 hover:bg-slate-900 border border-white/5 hover:border-cyan-500/30 text-[10px] font-black tracking-wider uppercase text-cyan-400 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Export PNG</span>
                    </button>
                    <button
                      onClick={() => handleRasterExport('jpg')}
                      className="py-2 rounded-xl bg-slate-950 hover:bg-slate-900 border border-white/5 hover:border-pink-500/30 text-[10px] font-black tracking-wider uppercase text-pink-400 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Export JPG</span>
                    </button>
                  </div>
                </div>

                <div className="h-px bg-white/[0.03] my-2"></div>

                <button
                  onClick={downloadSvgFile}
                  className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-505 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  <Download size={13} />
                  <span>Download SVG File</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => copyToClipboard(generatedCodes.svg, 'SVG Markup')}
                    className="py-2 rounded-xl bg-slate-950 hover:bg-[#121422] text-[10px] font-bold text-slate-400 hover:text-white border border-white/5 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Code size={11} />
                    <span>Copy SVG</span>
                  </button>

                  <button
                    onClick={() => copyToClipboard(generatedCodes.react, 'React Component')}
                    className="py-2 rounded-xl bg-slate-950 hover:bg-[#121422] text-[10px] font-bold text-slate-400 hover:text-white border border-white/5 transition-all flex items-center justify-center gap-1.5"
                  >
                    <FileCode size={11} />
                    <span>Copy Component</span>
                  </button>
                </div>

              </div>

            </div>
          )}
        </aside>

      </div>

      {/* Pop-up Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-[#06070a]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#090a10] w-full max-w-lg rounded-2xl border border-purple-500/20 shadow-2xl p-6 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-xl pointer-events-none"></div>

            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <Upload size={18} className="text-purple-400" />
                <h3 className="text-sm font-extrabold text-white">Upload Custom SVG Code</h3>
              </div>
              <button
                onClick={closeUploadModal}
                className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white transition-all border border-white/5"
              >
                <X size={14} />
              </button>
            </div>

            {uploadError && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs px-3 py-2 rounded-xl mb-4 font-semibold">
                ⚠️ {uploadError}
              </div>
            )}

            <form onSubmit={handleAddCustomIcon} className="space-y-4 text-xs">

              <div className="space-y-1.5">
                <label className="text-slate-300 font-bold block">Icon Name</label>
                <input
                  type="text"
                  placeholder="e.g. ShieldVerified, CustomBolt"
                  value={newIconName}
                  onChange={(e) => setNewIconName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/[0.05] focus:border-purple-500/50 focus:outline-none text-slate-200 placeholder:text-slate-700 font-bold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-bold block">Library Category Folder</label>
                <select
                  value={newIconCategory}
                  onChange={(e) => setNewIconCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/[0.05] focus:border-purple-500/50 focus:outline-none text-slate-200 font-bold"
                >
                  <option value="General">General</option>
                  <option value="Commerce">Commerce</option>
                  <option value="System">System</option>
                  <option value="Tech">Tech</option>
                  <option value="Nav">Nav</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-slate-300 font-bold block">SVG Markup or Path (d)</label>
                  <span className="text-[10px] text-slate-500 font-mono">Auto parses `d="..."` values</span>
                </div>
                <textarea
                  rows="4"
                  placeholder="Paste raw SVG markup or direct d-attributes here...&#10;e.g. M12 2L2 22h20L12 2z"
                  value={newIconPath}
                  onChange={(e) => setNewIconPath(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/[0.05] focus:border-purple-500/50 focus:outline-none text-slate-200 placeholder:text-slate-700 font-mono text-[10px]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={closeUploadModal}
                  className="px-4 py-2 bg-slate-950 hover:bg-slate-900 text-slate-300 font-bold rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                  Compile Component to Directory
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* Styled Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 99px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.2);
        }
      `}</style>

    </div>
  );
}