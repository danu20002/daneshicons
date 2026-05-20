const fs = require('fs');
const path = require('path');

let code = fs.readFileSync(path.join(__dirname, '..', 'src', 'App.jsx'), 'utf8');

// ─── BACKGROUNDS (dark → light) ───────────────────────────────────────────
const bgMap = [
  // Main app backgrounds
  ['bg-[#06070a]', 'bg-white'],
  ['bg-[#090a10]', 'bg-white'],
  ['bg-[#07080d]', 'bg-gray-50'],
  ['bg-[#0c0d16]', 'bg-gray-50'],
  ['bg-[#0e0f19]', 'bg-gray-50'],
  ['bg-[#0b0c13]', 'bg-gray-100'],
  ['bg-slate-950', 'bg-gray-50'],
  ['bg-slate-950/80', 'bg-gray-50/80'],
  ['bg-slate-950/60', 'bg-gray-50/60'],
  ['bg-slate-900/80', 'bg-gray-100/80'],
  ['bg-slate-900', 'bg-gray-100'],
  ['bg-slate-950/40', 'bg-gray-50/40'],
  ['bg-slate-950/30', 'bg-gray-50/30'],
  ['bg-slate-950/[0.02]', 'bg-gray-50'],
  ['bg-rose-500/10', 'bg-red-50'],
  ['bg-emerald-500/10', 'bg-emerald-50'],
  ['bg-indigo-500/5', 'bg-indigo-50'],
  ['bg-rose-500/10', 'bg-red-50'],
  ['bg-amber-500/10', 'bg-amber-50'],
  ['bg-[#06070a]/95', 'bg-white/95'],
  ['bg-cyan-500/15', 'bg-cyan-50'],
  ['bg-slate-950/[0.02]', 'bg-gray-50'],
  ['bg-slate-950/80', 'bg-gray-50/80'],
  ['bg-slate-900/[0.02]', 'bg-gray-100'],
  ['bg-[#090a10]/40', 'bg-gray-50/40'],
  ['bg-purple-500/10', 'bg-blue-50'],
  ['bg-purple-600/10', 'bg-blue-50'],
  ['bg-purple-600/20', 'bg-blue-100'],
  ['bg-purple-950/[0.02]', 'bg-blue-50/50'],
  ['bg-purple-500/30', 'bg-blue-100'],
  ['bg-pink-500/10', 'bg-blue-50'],
  ['bg-cyan-400/10', 'bg-cyan-50'],
  ['bg-emerald-500/20', 'bg-emerald-50'],
  ['bg-rose-500/10', 'bg-red-50'],
  ['bg-emerald-500/5', 'bg-emerald-50/50'],
  ['bg-sky-500/10', 'bg-sky-50'],
  ['bg-amber-500/20', 'bg-amber-50'],
];
for (const [old, next] of bgMap) {
  code = code.replaceAll(old, next);
}

// Fix remaining dark bg patterns like bg-slate-950 (after replacements)
// Some may have been partially replaced, catch any remaining
code = code.replaceAll('bg-gray-50/80', 'bg-gray-50/80');
code = code.replaceAll('bg-gray-50/60', 'bg-gray-50/60');

// ─── TEXT COLORS (light → dark) ────────────────────────────────────────────
const textMap = [
  ['text-slate-100', 'text-gray-900'],
  ['text-slate-200', 'text-gray-800'],
  ['text-slate-300', 'text-gray-700'],
  ['text-slate-400', 'text-gray-500'],
  ['text-slate-500', 'text-gray-400'],
  ['text-slate-600', 'text-gray-400'],
];
for (const [old, next] of textMap) {
  code = code.replaceAll(old, next);
}

// ─── ACCENT COLORS (purple/pink → blue/indigo) ────────────────────────────
const accentMap = [
  ['from-purple-600 to-pink-600', 'from-blue-600 to-indigo-600'],
  ['from-purple-600 to-pink-500', 'from-blue-600 to-indigo-500'],
  ['from-purple-500 to-pink-500', 'from-blue-500 to-indigo-500'],
  ['from-purple-600 to-indigo-600', 'from-blue-600 to-indigo-600'],
  ['from-purple-600/20 to-indigo-600/20', 'from-blue-600/10 to-indigo-600/10'],
  ['from-cyan-600 to-indigo-600', 'from-blue-600 to-indigo-600'],
  ['text-purple-400', 'text-blue-600'],
  ['text-purple-300', 'text-blue-600'],
  ['text-pink-400', 'text-indigo-500'],
  ['text-cyan-400', 'text-sky-600'],
  ['text-emerald-400', 'text-emerald-600'],
  ['text-rose-400', 'text-red-500'],
  ['text-amber-300', 'text-amber-600'],
  ['text-cyan-200', 'text-sky-700'],
  ['text-cyan-300', 'text-sky-600'],
  ['text-emerald-300', 'text-emerald-700'],
  ['text-purple-200/90', 'text-blue-700/90'],
  ['text-purple-200', 'text-blue-700'],
  ['text-rose-300', 'text-red-600'],
  ['text-amber-400', 'text-amber-600'],
  ['text-sky-400', 'text-sky-600'],
  ['text-cyan-400', 'text-sky-600'],
  ['text-cyan-500', 'text-sky-600'],
  ['text-indigo-300', 'text-indigo-600'],
  ['text-rose-500', 'text-red-500'],
];
for (const [old, next] of accentMap) {
  code = code.replaceAll(old, next);
}

// Special: text on colored backgrounds should stay white
// These are button texts that were white and should stay white
// Keep text-white as is

// ─── BORDERS (dark → light) ────────────────────────────────────────────────
const borderMap = [
  ['border-white/[0.03]', 'border-gray-200'],
  ['border-white/[0.04]', 'border-gray-200'],
  ['border-white/[0.05]', 'border-gray-200'],
  ['border-white/5', 'border-gray-200'],
  ['border-white/10', 'border-gray-300'],
  ['border-white/[0.04]', 'border-gray-200'],
  ['border-white/[0.03]', 'border-gray-200'],
  ['border-purple-500/20', 'border-blue-500/20'],
  ['border-purple-500/10', 'border-blue-500/20'],
  ['border-purple-500/30', 'border-blue-500/30'],
  ['border-purple-400/20', 'border-blue-400/20'],
  ['border-cyan-500/30', 'border-sky-500/30'],
  ['border-rose-500/20', 'border-red-500/20'],
  ['border-emerald-500/30', 'border-emerald-500/30'],
  ['border-emerald-500/20', 'border-emerald-500/20'],
  ['border-indigo-500/20', 'border-indigo-500/20'],
  ['border-cyan-500/30', 'border-sky-500/30'],
  ['border-pink-500/30', 'border-indigo-500/30'],
];
for (const [old, next] of borderMap) {
  code = code.replaceAll(old, next);
}

// ─── SHADOWS (purple → blue, dark → subtle) ────────────────────────────────
const shadowMap = [
  ['shadow-[0_0_15px_rgba(168,85,247,0.5)]', 'shadow-[0_0_15px_rgba(59,130,246,0.15)]'],
  ['shadow-[0_0_15px_rgba(168,85,247,0.3)]', 'shadow-[0_0_15px_rgba(59,130,246,0.12)]'],
  ['shadow-[0_0_15px_rgba(168,85,247,0.2)]', 'shadow-[0_0_15px_rgba(59,130,246,0.1)]'],
  ['shadow-[0_0_15px_rgba(168,85,247,0.15)]', 'shadow-[0_0_15px_rgba(59,130,246,0.08)]'],
  ['shadow-[0_0_15px_rgba(236,72,153,0.4)]', 'shadow-[0_0_15px_rgba(99,102,241,0.15)]'],
  ['shadow-[0_0_20px_rgba(236,72,153,0.4)]', 'shadow-[0_0_20px_rgba(99,102,241,0.15)]'],
  ['shadow-[0_0_15px_rgba(34,211,238,0.2)]', 'shadow-[0_0_15px_rgba(14,165,233,0.12)]'],
  ['shadow-[0_0_15px_rgba(139,92,246,0.3)]', 'shadow-[0_0_15px_rgba(59,130,246,0.12)]'],
  ['shadow-[0_0_15px_rgba(255,255,255,0.3)]', 'shadow-[0_0_15px_rgba(0,0,0,0.08)]'],
  ['shadow-sm', 'shadow-sm'],
  ['shadow-inner', 'shadow-inner'],
  ['shadow-md', 'shadow-md'],
  ['shadow-2xl', 'shadow-lg'],
  ['shadow-xl', 'shadow-md'],
];
for (const [old, next] of shadowMap) {
  code = code.replaceAll(old, next);
}

// ─── RING COLORS (focus rings) ────────────────────────────────────────────
const ringMap = [
  ['ring-purple-500', 'ring-blue-500'],
  ['ring-offset-\[#06070a\]', 'ring-offset-white'],
];
for (const [old, next] of ringMap) {
  code = code.replaceAll(old, next);
}

// ─── BACKGROUND GRADIENT ACCENTS ──────────────────────────────────────────
// Gradient text
code = code.replaceAll(
  'bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent',
  'text-gray-900'
);

// Logo gradient bg
code = code.replaceAll(
  'bg-gradient-to-tr from-purple-600 to-pink-500',
  'bg-gradient-to-tr from-blue-600 to-indigo-600'
);

// Sidebar active bg
code = code.replaceAll(
  "bg-gradient-to-r from-purple-600/10 to-indigo-600/10 text-purple-300 border border-purple-500/20 shadow-sm",
  "bg-blue-50 text-blue-700 border border-blue-500/20 shadow-sm"
);
// But there are multiple occurrences of this pattern with slight variations - handle specifically
// Actually replaceAll won't catch variations. Let me handle the main patterns carefully.

// Fix selection background
code = code.replaceAll('bg-purple-500/30', 'bg-blue-100');

// ─── SPECIFIC UI FIXES ────────────────────────────────────────────────────

// Fix the "selected" style for icon grid items
code = code.replaceAll(
  "border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)] bg-[#0e0f19]",
  "border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-blue-50/50"
);

// Fix hover styles for icon items
code = code.replaceAll(
  "border-white/[0.03] hover:border-white/10 hover:bg-[#0c0d16]",
  "border-gray-200 hover:border-gray-300 hover:bg-gray-100"
);

// Fix the studio header
code = code.replaceAll(
  "bg-[#090a10] border border-white/[0.03] p-4 rounded-2xl",
  "bg-white border border-gray-200 p-4 rounded-xl"
);

// Fix asset library title
code = code.replaceAll("text-slate-200 flex items-center gap-2", "text-gray-800 flex items-center gap-2");
code = code.replaceAll("text-slate-500 mt-0.5", "text-gray-400 mt-0.5");

// Fix density selector
code = code.replaceAll("bg-slate-950 p-1 rounded-xl border border-white/[0.04]", "bg-gray-100 p-1 rounded-xl border border-gray-200");

// Fix sidebar
code = code.replaceAll(
  "bg-[#090a10] border-r border-white/[0.03]",
  "bg-white border-r border-gray-200"
);

// Fix left sidebar tab buttons
code = code.replaceAll(
  "border-purple-500 text-white bg-white/[0.01]",
  "border-blue-500 text-blue-700 bg-blue-50/50"
);
code = code.replaceAll(
  "border-transparent text-slate-500 hover:text-slate-300",
  "border-transparent text-gray-400 hover:text-gray-600"
);

// Fix category buttons
code = code.replaceAll(
  "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]",
  "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
);

// Fix search input
code = code.replaceAll(
  "bg-slate-950 border border-white/[0.05] focus:border-purple-500/50 focus:outline-none text-slate-200 placeholder:text-slate-600 text-xs",
  "bg-white border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-800 placeholder:text-gray-400 text-xs"
);

// Fix section dividers
code = code.replaceAll("bg-white/[0.03]", "bg-gray-200");

// Fix sidebar header
code = code.replaceAll("bg-slate-950/60 border-t border-white/[0.03]", "bg-gray-50 border-t border-gray-200");

// Fix "Add Custom" button
code = code.replaceAll(
  "bg-purple-500/10 flex items-center justify-center mb-1 group-hover:scale-105",
  "bg-blue-50 flex items-center justify-center mb-1 group-hover:scale-105"
);
code = code.replaceAll("text-purple-300 group-hover:text-white", "text-blue-600 group-hover:text-blue-700");

// Fix category labels
code = code.replaceAll("text-[10px] font-bold text-slate-500 uppercase tracking-widest", "text-[10px] font-bold text-gray-400 uppercase tracking-widest");

// Fix virtual file tree
code = code.replaceAll(
  "bg-purple-600/15 text-purple-300 border border-purple-500/10",
  "bg-blue-50 text-blue-700 border border-blue-500/20"
);
code = code.replaceAll(
  'text-slate-400 hover:bg-white/[0.02]',
  'text-gray-500 hover:bg-gray-50'
);

// Fix file tree folder text
code = code.replaceAll('text-slate-300', 'text-gray-700');
// Re-apply to avoid duplicates
code = code.replaceAll('text-gray-700', 'text-gray-700');

// Fix sidebars
code = code.replaceAll(
  "bg-[#090a10] border-l border-white/[0.03]",
  "bg-white border-l border-gray-200"
);

// Fix right sidebar header
code = code.replaceAll("text-slate-400 uppercase tracking-widest", "text-gray-500 uppercase tracking-widest");

// Fix compiled viewport
code = code.replaceAll(
  "bg-slate-950 rounded-2xl border border-white/[0.04] p-5",
  "bg-gray-50 rounded-xl border border-gray-200 p-5"
);

// Fix grid background pattern
code = code.replaceAll('bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]', 'bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]');

// Fix export code block
code = code.replaceAll(
  "bg-slate-950 rounded-xl border border-white/[0.05] p-3 text-xs font-mono text-purple-200/90",
  "bg-gray-50 rounded-xl border border-gray-200 p-3 text-xs font-mono text-blue-700/90"
);

// Fix live snippet header
code = code.replaceAll("text-slate-500 uppercase tracking-widest font-mono", "text-gray-400 uppercase tracking-widest font-mono");

// Fix code block Live Compiler badge
code = code.replaceAll("bg-slate-950 text-purple-400", "bg-gray-100 text-blue-600");

// Fix textarea editor
code = code.replaceAll(
  "bg-slate-950 text-[10px] font-mono p-2.5 rounded-xl border border-white/[0.05] text-cyan-200",
  "bg-white text-[10px] font-mono p-2.5 rounded-xl border border-gray-300 text-gray-800"
);

// Fix terminal
code = code.replaceAll(
  "bg-slate-950 rounded-2xl border border-white/5 overflow-hidden",
  "bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
);
code = code.replaceAll(
  "bg-[#0b0c13] px-4 py-2 flex items-center justify-between border-b border-white/5",
  "bg-gray-100 px-4 py-2 flex items-center justify-between border-b border-gray-200"
);

// Fix terminal logs
code = code.replaceAll("bg-slate-950", "bg-gray-50");

// Fix terminal input
code = code.replaceAll("bg-transparent border-none focus:outline-none focus:ring-0 text-[10px] font-mono py-2 text-white placeholder:text-slate-700", "bg-transparent border-none focus:outline-none focus:ring-0 text-[10px] font-mono py-2 text-gray-800 placeholder:text-gray-400");

// Fix terminal execute button
code = code.replaceAll("bg-purple-600/10 text-purple-300 hover:bg-purple-600/20 border-l border-white/5", "bg-blue-50 text-blue-600 hover:bg-blue-100 border-l border-gray-200");

// Fix platform mode tabs
code = code.replaceAll(
  "bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-300 border border-purple-500/20",
  "bg-blue-50 text-blue-700 border border-blue-500/20"
);
code = code.replaceAll('text-slate-400 hover:text-white', 'text-gray-500 hover:text-gray-700');

// Fix download/action buttons  
code = code.replaceAll(
  "bg-slate-950 hover:bg-slate-900 border border-white/5 hover:border-cyan-500/30 text-[10px] font-black tracking-wider uppercase text-cyan-400",
  "bg-white hover:bg-gray-50 border border-gray-200 hover:border-sky-500/30 text-[10px] font-black tracking-wider uppercase text-sky-600"
);

// Fix JPG export button
code = code.replaceAll(
  "bg-slate-950 hover:bg-slate-900 border border-white/5 hover:border-pink-500/30 text-[10px] font-black tracking-wider uppercase text-pink-400",
  "bg-white hover:bg-gray-50 border border-gray-200 hover:border-indigo-500/30 text-[10px] font-black tracking-wider uppercase text-indigo-600"
);

// Fix "Download SVG" button
code = code.replaceAll(
  'bg-purple-600 hover:bg-purple-505 text-xs font-bold text-white',
  'bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white'
);
code = code.replaceAll('shadow-[0_0_15px_rgba(168,85,247,0.2)]', 'shadow-[0_0_15px_rgba(59,130,246,0.12)]');

// Fix copy buttons
code = code.replaceAll(
  "bg-slate-950 hover:bg-[#121422] text-[10px] font-bold text-slate-400 hover:text-white border border-white/5",
  "bg-white hover:bg-gray-50 text-[10px] font-bold text-gray-500 hover:text-gray-700 border border-gray-200"
);

// Fix upload modal
code = code.replaceAll(
  "bg-[#090a10] w-full max-w-lg rounded-2xl border border-purple-500/20 shadow-2xl",
  "bg-white w-full max-w-lg rounded-xl border border-blue-500/20 shadow-lg"
);
code = code.replaceAll(
  "bg-purple-500/5 rounded-full blur-xl",
  "bg-blue-500/5 rounded-full blur-xl"
);

// Fix upload input
code = code.replaceAll(
  "bg-slate-950 border border-white/[0.05] focus:border-purple-500/50 focus:outline-none text-slate-200 placeholder:text-slate-700 font-bold",
  "bg-white border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-800 placeholder:text-gray-400 font-bold"
);

// Fix upload select
code = code.replaceAll(
  "bg-slate-950 border border-white/[0.05] focus:border-purple-500/50 focus:outline-none text-slate-200 font-bold",
  "bg-white border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-800 font-bold"
);

// Fix upload textarea
code = code.replaceAll(
  "bg-slate-950 border border-white/[0.05] focus:border-purple-500/50 focus:outline-none text-slate-200 placeholder:text-slate-700 font-mono",
  "bg-white border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-800 placeholder:text-gray-400 font-mono"
);

// Fix upload cancel button
code = code.replaceAll(
  "bg-slate-950 hover:bg-slate-900 text-slate-300 font-bold rounded-xl",
  "bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl"
);

// Fix upload submit button
code = code.replaceAll(
  "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl",
  "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl"
);
code = code.replaceAll('shadow-[0_0_15px_rgba(168,85,247,0.3)]', 'shadow-[0_0_15px_rgba(59,130,246,0.12)]');

// Fix integration guide sections
code = code.replaceAll(
  "bg-[#090a10] border border-white/[0.03] p-5 rounded-2xl",
  "bg-white border border-gray-200 p-5 rounded-xl"
);
code = code.replaceAll(
  "bg-[#090a10] border border-white/[0.03] p-6 rounded-2xl",
  "bg-white border border-gray-200 p-6 rounded-xl"
);

// Fix integration guide text
code = code.replaceAll(
  "bg-slate-950 rounded-xl border border-white/[0.05] p-3 font-mono text-[10px] text-purple-200 leading-relaxed",
  "bg-gray-50 rounded-xl border border-gray-200 p-3 font-mono text-[10px] text-blue-700 leading-relaxed"
);
code = code.replaceAll(
  "bg-slate-950 rounded-xl border border-white/[0.05] p-3 font-mono text-xs text-cyan-200",
  "bg-gray-50 rounded-xl border border-gray-200 p-3 font-mono text-xs text-sky-700"
);
code = code.replaceAll(
  "bg-indigo-500/5 border border-indigo-500/20 p-3 rounded-xl text-xs text-indigo-300",
  "bg-indigo-50 border border-indigo-500/20 p-3 rounded-xl text-xs text-indigo-600"
);
code = code.replaceAll(
  "bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-xl text-xs text-emerald-300",
  "bg-emerald-50 border border-emerald-500/20 p-3 rounded-xl text-xs text-emerald-600"
);

// Fix integration guide title
code = code.replaceAll("text-slate-200 flex items-center gap-2", "text-gray-800 flex items-center gap-2");
code = code.replaceAll("text-slate-400 leading-relaxed", "text-gray-500 leading-relaxed");

// Fix integration guide code blocks
code = code.replaceAll(
  "bg-slate-950 rounded-xl border border-white/[0.05] overflow-hidden",
  "bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
);

// Fix table in integration guide
code = code.replaceAll(
  'text-slate-400 text-[10px] uppercase tracking-wider',
  'text-gray-500 text-[10px] uppercase tracking-wider'
);
code = code.replaceAll(
  'text-slate-300 text-[11px]',
  'text-gray-700 text-[11px]'
);
code = code.replaceAll(
  'border-b border-white/5',
  'border-b border-gray-200'
);

// Additional fixes for pro tips
code = code.replaceAll(
  'text-xs text-slate-400',
  'text-xs text-gray-500'
);

// Fix developer package explorer
code = code.replaceAll(
  "bg-slate-950 px-3 py-1.5 rounded-xl border border-white/5",
  "bg-gray-100 px-3 py-1.5 rounded-xl border border-gray-200"
);

// Fix the "Modular Directory Structure" header
code = code.replaceAll(
  "text-slate-500 uppercase tracking-widest block mb-3",
  "text-gray-400 uppercase tracking-widest block mb-3"
);

// Fix tree directory items
code = code.replaceAll(
  "text-slate-400 font-bold font-mono",
  "text-gray-500 font-bold font-mono"
);

// Fix tree sub-items
code = code.replaceAll('text-slate-400', 'text-gray-500');
code = code.replaceAll('text-slate-500 hover:text-slate-300 hover:bg-white/[0.01]', 'text-gray-400 hover:text-gray-600 hover:bg-gray-50');

// Fix optimization highlights box
code = code.replaceAll(
  "bg-slate-950 p-3 rounded-xl border border-white/5",
  "bg-gray-100 p-3 rounded-xl border border-gray-200"
);

// Fix toast notification
code = code.replaceAll(
  "bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 rounded-xl shadow-[0_4px_25px_rgba(168,85,247,0.5)] border border-purple-400/20 text-white",
  "bg-white px-5 py-3 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-gray-200 text-gray-800"
);

// Fix toast icon
code = code.replaceAll('text-amber-200', 'text-blue-500');

// Fix SVG creator panel
code = code.replaceAll(
  "bg-slate-950 p-3 rounded-2xl border border-white/5 flex flex-col items-center",
  "bg-gray-50 p-3 rounded-xl border border-gray-200 flex flex-col items-center"
);
code = code.replaceAll(
  "bg-[#0b0c13] p-2 rounded-xl relative border border-white/[0.03]",
  "bg-white p-2 rounded-xl relative border border-gray-200"
);

// Fix vector builder input
code = code.replaceAll(
  "bg-slate-950 p-2 rounded-xl border border-white/5 font-mono text-[9px] text-cyan-200",
  "bg-white p-2 rounded-xl border border-gray-200 font-mono text-[9px] text-sky-700"
);

// Fix compile button
code = code.replaceAll(
  "bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-black",
  "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black"
);

// Fix bundle shake panel
code = code.replaceAll(
  "bg-slate-950 rounded-2xl p-4 border border-white/5 space-y-3",
  "bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-3"
);

// Fix weight bar
code = code.replaceAll('bg-slate-900 rounded-full', 'bg-gray-200 rounded-full');
code = code.replaceAll('bg-emerald-500', 'bg-emerald-500');
code = code.replaceAll('bg-rose-500', 'bg-red-500');

// Fix import method selector
code = code.replaceAll(
  "bg-slate-950 p-1 rounded-xl border border-white/[0.04]",
  "bg-gray-100 p-1 rounded-xl border border-gray-200"
);

// Fix AST pruning box
code = code.replaceAll(
  "bg-[#0c0d15] rounded-xl p-3 border border-white/[0.03]",
  "bg-gray-50 rounded-xl p-3 border border-gray-200"
);

// Fix text colors in AST box
code = code.replaceAll('text-slate-300 uppercase', 'text-gray-700 uppercase');
code = code.replaceAll('text-slate-400', 'text-gray-500');
code = code.replaceAll('text-purple-300', 'text-blue-600');
code = code.replaceAll('text-emerald-300', 'text-emerald-700');
code = code.replaceAll('text-amber-300', 'text-amber-600');

// Fix bundle icons grid
code = code.replaceAll(
  "bg-slate-950 rounded-xl border border-white/5",
  "bg-white rounded-xl border border-gray-200"
);

// Fix toggle buttons in bundle
code = code.replaceAll(
  "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  "bg-emerald-50 border-emerald-500/30 text-emerald-600"
);
code = code.replaceAll(
  "bg-slate-900 border-white/5 text-slate-500",
  "bg-gray-100 border-gray-200 text-gray-500"
);

// Fix B button selected style
code = code.replaceAll(
  "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 shadow",
  "bg-emerald-50 text-emerald-600 border border-emerald-500/20 shadow-sm"
);
code = code.replaceAll(
  "bg-rose-500/20 text-rose-300 border border-rose-500/20 shadow",
  "bg-red-50 text-red-600 border border-red-500/20 shadow-sm"
);

// Fix sidebar label
code = code.replaceAll("text-slate-500 uppercase tracking-widest block", "text-gray-400 uppercase tracking-widest block");

// Fix render style toggle
code = code.replaceAll(
  "bg-slate-900 text-white shadow border border-white/[0.03]",
  "bg-gray-200 text-gray-800 shadow-sm border border-gray-300"
);

// Fix global stats bar
code = code.replaceAll(
  'bg-slate-950/80 border border-white/[0.05] rounded-xl p-0.5 text-[10px] font-bold',
  'bg-gray-50 border border-gray-200 rounded-xl p-0.5 text-[10px] font-bold'
);
code = code.replaceAll('text-slate-400', 'text-gray-500');

// Fix Github link
code = code.replaceAll(
  'text-slate-400 border-r border-white/10',
  'text-gray-500 border-r border-gray-200'
);
code = code.replaceAll(
  'text-white flex items-center gap-1',
  'text-gray-800 flex items-center gap-1'
);

// Fix divider lines
code = code.replaceAll('h-px bg-white/[0.03]', 'h-px bg-gray-200');

// Fix upload modal divider
code = code.replaceAll('border-t border-white/5', 'border-t border-gray-200');

// ─── STYLE TAG CONTENT ──────────────────────────────────────────────────
// Fix scrollbar styles
code = code.replaceAll(
  'background: rgba(255, 255, 255, 0.05)',
  'background: rgba(0, 0, 0, 0.05)'
);
code = code.replaceAll(
  'rgba(168, 85, 247, 0.2)',
  'rgba(59, 130, 246, 0.2)'
);

// Fix the main top navbar
code = code.replaceAll(
  "border-b border-white/[0.03] bg-[#06070a] shrink-0 h-16",
  "border-b border-gray-200 bg-white shrink-0 h-16"
);

// Fix left sidebar toggle button
code = code.replaceAll(
  "bg-purple-600/10 border-purple-500/20 text-purple-400",
  "bg-blue-50 border-blue-500/20 text-blue-600"
);

// Fix "Load More" button
code = code.replaceAll(
  "bg-slate-950 hover:bg-slate-900 border border-white/10 hover:border-purple-500/30 text-xs font-bold text-slate-300 hover:text-white",
  "bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-500/30 text-xs font-bold text-gray-500 hover:text-gray-700"
);

// Fix the Logo shadow
code = code.replaceAll(
  'shadow-[0_0_15px_rgba(139,92,246,0.3)]',
  'shadow-[0_0_15px_rgba(59,130,246,0.12)]'
);

// Fix top right upload button
code = code.replaceAll(
  "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl",
  "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl"
);

// Fix "Add Custom" plus icon color
code = code.replaceAll('text-purple-400" size={14}', 'text-blue-600" size={14}');
code = code.replaceAll("text-purple-400}", "text-blue-600}");

// Fix "Clear" search button
code = code.replaceAll(
  "bg-slate-900 hover:bg-slate-800 text-slate-400",
  "bg-gray-100 hover:bg-gray-200 text-gray-500"
);

// Fix the "no matching" state
code = code.replaceAll(
  'border border-dashed border-white/5 rounded-2xl p-12 text-center bg-[#090a10]/40',
  'border border-dashed border-gray-200 rounded-xl p-12 text-center bg-gray-50/40'
);
code = code.replaceAll('bg-slate-950 rounded-full', 'bg-gray-100 rounded-full');
code = code.replaceAll('text-slate-600', 'text-gray-400');
code = code.replaceAll('text-slate-300 font-bold text-xs', 'text-gray-700 font-bold text-xs');
code = code.replaceAll('text-slate-500 text-xs mt-1', 'text-gray-400 text-xs mt-1');
code = code.replaceAll(
  'bg-slate-900 hover:bg-slate-850 border border-white/5 rounded-xl text-xs font-bold text-slate-300',
  'bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl text-xs font-bold text-gray-700'
);

// Fix "custom" icon badges
code = code.replaceAll('bg-cyan-500/15 text-cyan-400', 'bg-sky-50 text-sky-600');
code = code.replaceAll('bg-slate-950 text-slate-500', 'bg-gray-100 text-gray-500');

// Fix SVG Creator labels
code = code.replaceAll('text-cyan-400 uppercase tracking-widest', 'text-sky-600 uppercase tracking-widest');
code = code.replaceAll('text-slate-400 mt-1', 'text-gray-500 mt-1');

// Fix Vector Label input
code = code.replaceAll(
  "bg-slate-950 border border-white/[0.05] text-slate-200 text-xs focus:outline-none focus:border-cyan-500/50",
  "bg-white border border-gray-300 text-gray-800 text-xs focus:outline-none focus:border-sky-500"
);

// Fix Optimization panel
code = code.replaceAll('text-emerald-400 uppercase tracking-widest', 'text-emerald-600 uppercase tracking-widest');

// Fix Select Icons section
code = code.replaceAll('text-emerald-400', 'text-emerald-600');

// Fix sidebar info
code = code.replaceAll('font-bold text-slate-400', 'font-bold text-gray-500');
code = code.replaceAll('text-slate-500 leading-normal', 'text-gray-400 leading-normal');

// Fix integration guide last section
code = code.replaceAll(
  "bg-[#090a10] border border-white/[0.03] p-5 rounded-2xl text-center",
  "bg-white border border-gray-200 p-5 rounded-xl text-center"
);
code = code.replaceAll('text-xs text-slate-500', 'text-xs text-gray-400');

// Fix table header text
code = code.replaceAll(
  'text-slate-400 text-[10px] uppercase tracking-wider',
  'text-gray-500 text-[10px] uppercase tracking-wider'
);

// Fix table data text
code = code.replaceAll('text-slate-500', 'text-gray-400');
code = code.replaceAll('text-slate-300', 'text-gray-700');

// Fix virtual file editor
code = code.replaceAll(
  "bg-slate-950 rounded-xl p-4 border border-white/[0.05] font-mono text-xs text-purple-200",
  "bg-gray-50 rounded-xl p-4 border border-gray-200 font-mono text-xs text-blue-700"
);

// Fix app background
code = code.replaceAll(
  "bg-[#06070a] text-slate-100 font-sans",
  "bg-gray-50 text-gray-900 font-sans"
);

// Make selection bg blue
code = code.replaceAll('selection:bg-purple-500/30', 'selection:bg-blue-500/20');

// Fix the Developer Portal header
code = code.replaceAll(
  "bg-[#090a10] border border-white/[0.03] p-4 rounded-2xl flex flex-col md:flex-row justify-between gap-4",
  "bg-white border border-gray-200 p-4 rounded-xl flex flex-col md:flex-row justify-between gap-4"
);

// Fix emerald accent in developer portal
code = code.replaceAll('text-emerald-400', 'text-emerald-600');

// Fix virtual tree tool
code = code.replaceAll(
  "bg-[#090a10] border border-white/[0.03] rounded-2xl p-4 flex flex-col overflow-y-auto",
  "bg-white border border-gray-200 rounded-xl p-4 flex flex-col overflow-y-auto"
);
code = code.replaceAll(
  "bg-[#090a10] border border-white/[0.03] rounded-2xl p-4 flex flex-col min-h-0",
  "bg-white border border-gray-200 rounded-xl p-4 flex flex-col min-h-0"
);
code = code.replaceAll(
  "bg-emerald-500/10 text-emerald-300 border-l-2 border-emerald-500",
  "bg-emerald-50 text-emerald-600 border-l-2 border-emerald-500"
);

// Fix the sideEffects badge
code = code.replaceAll('text-slate-400 bg-slate-950', 'text-gray-500 bg-gray-100');

// Fix the density button active states
code = code.replaceAll(
  "bg-purple-600/20 text-purple-300",
  "bg-blue-100 text-blue-700"
);

// Fix dots grid background
code = code.replaceAll(
  'border-r border-slate-600',
  'border-r border-gray-300'
);
code = code.replaceAll(
  'border-b border-slate-600',
  'border-b border-gray-300'
);
code = code.replaceAll(
  'bg-white/5 hover:bg-white/20',
  'bg-gray-200 hover:bg-gray-300'
);

// Fix reset canvas button
code = code.replaceAll(
  'text-slate-500 hover:text-slate-300 px-2.5 py-1 rounded bg-slate-900 border border-white/5',
  'text-gray-500 hover:text-gray-700 px-2.5 py-1 rounded bg-gray-100 border border-gray-200'
);

// Fix SVG Creator Name
code = code.replaceAll('text-slate-200', 'text-gray-700');

// Fix terminal text colors
code = code.replaceAll(
  'text-rose-400',
  'text-red-500'
);
code = code.replaceAll(
  'text-emerald-400',
  'text-emerald-600'
);
code = code.replaceAll(
  'text-cyan-400',
  'text-sky-600'
);
code = code.replaceAll(
  'text-slate-300',
  'text-gray-700'
);
code = code.replaceAll(
  'text-slate-500',
  'text-gray-400'
);
code = code.replaceAll(
  'text-slate-600',
  'text-gray-400'
);
code = code.replaceAll(
  'text-slate-700',
  'text-gray-400'
);

// Fix navbar divider
code = code.replaceAll('border-white/10', 'border-gray-200');
code = code.replaceAll('border-white/5', 'border-gray-200');

// Fix the virtual file editor code background
code = code.replaceAll(
  "flex-1 overflow-auto bg-slate-950 rounded-xl p-4 border border-white/[0.05] font-mono text-xs text-purple-200",
  "flex-1 overflow-auto bg-gray-50 rounded-xl p-4 border border-gray-200 font-mono text-xs text-blue-700"
);

// Fix theme swatches
code = code.replaceAll('bg-slate-700', 'bg-gray-300');
code = code.replaceAll('bg-slate-950', 'bg-gray-50');

// Also fix file tree count badges
code = code.replaceAll('text-slate-600 px-1 font-mono', 'text-gray-400 px-1 font-mono');

// Fix the emerald status dot  
code = code.replaceAll('bg-emerald-500', 'bg-emerald-500');

// Fix the "STANDARD" count display
code = code.replaceAll('text-purple-400 font-mono', 'text-blue-600 font-mono');
code = code.replaceAll('text-cyan-400 font-mono', 'text-sky-600 font-mono');
code = code.replaceAll('text-pink-400 font-mono', 'text-indigo-600 font-mono');

fs.writeFileSync(path.join(__dirname, '..', 'src', 'App.jsx'), code);
console.log('Theme transformed to white/professional.');
