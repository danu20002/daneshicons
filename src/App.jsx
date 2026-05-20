import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search, Upload, Settings, Sliders, Check, Copy, X, Code, Eye,
  Sparkles, Info, FileCode, Grid, Maximize2, Trash2, Plus, Compass, Paperclip,
  Gift, Briefcase, Key, Layers, Shield as ShieldIcon, Activity, Tv, Wifi,
  ChevronRight, Download, Share2, PenTool, RotateCcw, Save, CheckSquare,
  Folder, FolderOpen, ChevronDown, BookOpenText, Palette, Package,
  Star, Heart, Zap, ArrowDown, Menu
} from 'lucide-react';

const THEME_COLORS = [
  { name: 'Blue', hex: '#3b82f6', glow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)]' },
  { name: 'Teal', hex: '#06b6d4', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.5)]' },
  { name: 'Emerald', hex: '#10b981', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.5)]' },
  { name: 'Rose', hex: '#f43f5e', glow: 'shadow-[0_0_15px_rgba(244,63,94,0.5)]' },
  { name: 'Amber', hex: '#f59e0b', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.5)]' },
  { name: 'Indigo', hex: '#6366f1', glow: 'shadow-[0_0_15px_rgba(99,102,241,0.5)]' },
  { name: 'White', hex: '#ffffff', glow: 'shadow-[0_0_15px_rgba(0,0,0,0.08)]' },
];

const CATEGORIES = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), 'Custom'];

const iconModules = import.meta.glob('./icons/**/*.jsx');
const LOADED_ICONS = Object.keys(iconModules).map(filePath => {
  const parts = filePath.split('/');
  const name = parts.pop().replace('.jsx', '');
  const category = parts.pop();
  return {
    id: name.toLowerCase(),
    name, category,
    type: 'standard',
    nodes: [],
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      width={globalSize} height={globalSize}
      style={{ color: selectedColor.hex }}
      className="transition-all duration-200"
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

// --- Hero animated background icons ---
const HERO_ICON_NAMES = ['Search', 'Shield', 'Baby', 'Star', 'Heart', 'Zap', 'Key', 'Compass', 'Gift', 'Eye', 'Bell', 'Flag', 'Sun', 'Moon', 'Cloud', 'Lock'];

export default function App() {
  const [icons, setIcons] = useState(LOADED_ICONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(500);
  const LOAD_MORE_STEP = 300;
  const [copiedIcon, setCopiedIcon] = useState(null);

  const copyImport = (iconName) => {
    const text = `import { ${iconName} } from 'daneshicons'`;
    navigator.clipboard.writeText(text);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 1500);
  };

  const [globalSize, setGlobalSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [selectedColor, setSelectedColor] = useState(THEME_COLORS[0]);
  const [renderStyle, setRenderStyle] = useState('outline');
  const [gridDensity, setGridDensity] = useState('ultra');

  const [activePlatformMode, setActivePlatformMode] = useState('studio');
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState(LOADED_ICONS[0] || null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [activeLeftPanel, setActiveLeftPanel] = useState('controls');

  const [bundledIcons, setBundledIcons] = useState(LOADED_ICONS.slice(0, 3).map(i => i.id));
  const [importStyle, setImportStyle] = useState('tree-shaked');

  const [selectedVirtualFile, setSelectedVirtualFile] = useState('package.json');
  const [expandedFolders, setExpandedFolders] = useState({
    src: true, icons: false, General: true, System: false, Tech: false, Nav: false, Commerce: false, Custom: false
  });

  const [scrolledPast, setScrolledPast] = useState(false);

  const [newIconName, setNewIconName] = useState('');
  const [newIconCategory, setNewIconCategory] = useState('General');
  const [newIconPath, setNewIconPath] = useState('');
  const [uploadError, setUploadError] = useState('');

  const [activeConvertTab, setActiveConvertTab] = useState('react');

  const [gridPoints, setGridPoints] = useState([]);
  const [creatorIconName, setCreatorIconName] = useState('');
  const [creatorCategory, setCreatorCategory] = useState('General');

  const toastRef = useRef(null);
  const [toast, setToast] = useState({ show: false, message: '' });

  const triggerToast = (msg) => {
    setToast({ show: true, message: msg });
    if (toastRef.current) clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2500);
  };

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
    setNewIconName(''); setNewIconCategory('General'); setNewIconPath(''); setUploadError('');
  };

  const handleAddCustomIcon = (e) => {
    if (e) e.preventDefault();
    if (!newIconName.trim()) { setUploadError('Please provide an icon name.'); return; }
    if (!newIconPath.trim()) { setUploadError('Please provide at least one valid SVG path d-attribute.'); return; }
    let pathsToSave = [];
    const svgPathRegex = /d="([^"]+)"/g;
    let match;
    const pathMatches = [];
    while ((match = svgPathRegex.exec(newIconPath)) !== null) { pathMatches.push(match[1]); }
    if (pathMatches.length > 0) { pathsToSave = pathMatches; }
    else { const cleanPath = newIconPath.replace(/<path[^>]*>/, '').replace('/>', '').trim(); pathsToSave = [cleanPath]; }
    const cleanName = newIconName.trim().replace(/\s+/g, '');
    const newIcon = { id: `custom-${Date.now()}`, name: cleanName, category: newIconCategory, type: 'custom', paths: pathsToSave };
    setIcons([newIcon, ...icons]);
    triggerToast(`"${cleanName}" added to src/icons/${newIconCategory}/${cleanName}.jsx!`);
    setSelectedIcon(newIcon);
    setSelectedVirtualFile(`src/icons/${newIconCategory}/${cleanName}.jsx`);
    closeUploadModal();
  };

  const handleDeleteIcon = (id, name, e) => {
    e.stopPropagation();
    setIcons(icons.filter(icon => icon.id !== id));
    if (selectedIcon?.id === id) setSelectedIcon(null);
    triggerToast(`"${name}" removed from file directory.`);
  };

  const filteredIcons = useMemo(() => {
    return icons.filter(icon => {
      const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        icon.category.toLowerCase().includes(searchQuery.toLowerCase());
      const isCustom = icon.type === 'custom';
      let matchesCategory;
      if (activeCategory === 'All') matchesCategory = true;
      else if (activeCategory === 'Custom') matchesCategory = isCustom;
      else if (activeCategory.length === 1) matchesCategory = !isCustom && icon.category.startsWith(activeCategory);
      else matchesCategory = !isCustom && icon.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [icons, searchQuery, activeCategory]);

  useEffect(() => { setVisibleCount(500); }, [searchQuery, activeCategory]);

  const visibleIcons = useMemo(() => filteredIcons.slice(0, visibleCount), [filteredIcons, visibleCount]);
  const hasMore = visibleCount < filteredIcons.length;

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
      return `<${tag} ${props} />`;
    }).join('\n  ');
    const cleanSvgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="${globalSize}" height="${globalSize}" viewBox="0 0 24 24" fill="none" stroke="${colorValue}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">\n  ${pathsMarkup}\n</svg>`;
    const reactPathsMarkup = selectedIcon.nodes.map(([tag, attrs]) => {
      const props = Object.entries(attrs).map(([k, v]) => {
        const reactKey = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${reactKey}="${v}"`;
      }).join(' ');
      return `      <${tag} ${props} />`;
    }).join('\n');
    const reactComponentCode = `import React from 'react';\n\nexport const ${selectedIcon.name} = React.forwardRef(({ size = ${globalSize}, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {\n  return (\n    <svg\n      ref={ref}\n      xmlns="http://www.w3.org/2000/svg"\n      width={size}\n      height={size}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke={color}\n      strokeWidth={strokeWidth}\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      className={className}\n      {...rest}\n    >\n${reactPathsMarkup}\n      {children}\n    </svg>\n  );\n});\n\nexport default ${selectedIcon.name};`;
    const vuePathsMarkup = selectedIcon.nodes.map(([tag, attrs]) => {
      const props = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
      return `    <${tag} ${props} />`;
    }).join('\n');
    const vueComponentCode = `<template>\n  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :class="className">\n${vuePathsMarkup}\n  </svg>\n</template>\n\n<script setup>\ndefineProps({ size: { type: [Number, String], default: ${globalSize} }, color: { type: String, default: 'currentColor' }, strokeWidth: { type: [Number, String], default: 2 }, className: { type: String, default: '' } });\n</script>`;
    const tailwindHtmlMarkup = `<div class="p-2 inline-flex items-center justify-center rounded-lg bg-gray-100">\n  <svg class="w-[${globalSize}px] h-[${globalSize}px] text-[${colorValue}]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">\n    ${pathsMarkup}\n  </svg>\n</div>`;
    const encodedSvg = encodeURIComponent(cleanSvgCode.replace(/"/g, "'").replace(/\n/g, "").replace(/\s+/g, " "));
    const cssDataUri = `.icon-${selectedIcon.name.toLowerCase()} {\n  display: inline-block;\n  width: ${globalSize}px;\n  height: ${globalSize}px;\n  background-image: url("data:image/svg+xml,${encodedSvg}");\n  background-repeat: no-repeat;\n  background-size: contain;\n}`;
    return { svg: cleanSvgCode, react: reactComponentCode, vue: vueComponentCode, tailwind: tailwindHtmlMarkup, css: cssDataUri };
  }, [selectedIcon, globalSize, strokeWidth, selectedColor, renderStyle]);

  const virtualFileContent = useMemo(() => {
    if (selectedVirtualFile === 'package.json') {
      return `{\n  "name": "danesh-icons",\n  "version": "2.5.0",\n  "description": "Premium ultra-high performance tree-shakable modular SVG icons",\n  "main": "./dist/index.js",\n  "module": "./dist/esm/index.js",\n  "types": "./dist/index.d.ts",\n  "sideEffects": false,\n  "exports": {\n    ".": { "import": "./dist/esm/index.js", "require": "./dist/index.js", "types": "./dist/index.d.ts" },\n    "./icons/*": { "import": "./dist/esm/icons/*", "require": "./dist/icons/*" }\n  },\n  "peerDependencies": { "react": ">=16.8.0" },\n  "keywords": ["icons", "react", "tree-shaking", "svg", "design-system"]\n}`;
    }
    if (selectedVirtualFile === 'README.md') {
      return `# DaneshIcons Modular Library\n\nComprehensive, zero-dependency SVG icons structured as standalone single-file components.\n\n## Standalone Subfolder Import\n\`\`\`javascript\nimport Search from 'danesh-icons/src/icons/General/Search.jsx';\n\`\`\`\n\n## Standard Import\n\`\`\`javascript\nimport { Search, Shield } from 'danesh-icons';\n\`\`\``;
    }
    if (selectedVirtualFile === 'src/index.js') {
      return icons.map(i => `export { default as ${i.name} } from './icons/${i.category}/${i.name}.jsx';`).join('\n');
    }
    const match = selectedVirtualFile.match(/^src\/icons\/([^/]+)\/([^/]+)\.jsx$/);
    if (match) {
      const [_, category, name] = match;
      const targetIcon = icons.find(i => i.name === name && i.category === category);
      if (targetIcon) {
        const colorValue = selectedColor.hex;
        const nodesList = targetIcon.nodes || [];
        const reactPathsMarkup = nodesList.map(([tag, attrs]) => {
          const props = Object.entries(attrs).map(([k, v]) => {
            const reactKey = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${reactKey}="${v}"`;
          }).join(' ');
          if (renderStyle === 'solid') {
            return `      <${tag} ${props} fill="${colorValue}" />`;
          }
          return `      <${tag} ${props} stroke="${colorValue}" strokeWidth={${strokeWidth}} strokeLinecap="round" strokeLinejoin="round" fill="none" />`;
        }).join('\n');
        return `import React from 'react';\n\nexport const ${targetIcon.name} = React.forwardRef(({ size = ${globalSize}, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {\n  return (\n    <svg\n      ref={ref}\n      xmlns="http://www.w3.org/2000/svg"\n      width={size}\n      height={size}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke={color}\n      strokeWidth={strokeWidth}\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      className={className}\n      {...rest}\n    >\n${reactPathsMarkup}\n      {children}\n    </svg>\n  );\n});\n\nexport default ${targetIcon.name};`;
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
    const scaleFactor = 2;
    let d = `M ${gridPoints[0].x * scaleFactor} ${gridPoints[0].y * scaleFactor}`;
    for (let i = 1; i < gridPoints.length; i++) {
      d += ` L ${gridPoints[i].x * scaleFactor} ${gridPoints[i].y * scaleFactor}`;
    }
    return d;
  }, [gridPoints]);

  const handleAddCreatorPointsToLibrary = () => {
    if (gridPoints.length < 2) { triggerToast('Click at least 2 grid coordinate points first.'); return; }
    const finalName = creatorIconName.trim().replace(/\s+/g, '') || `VectorNode_${Date.now().toString().slice(-4)}`;
    const newIcon = { id: `custom-grid-${Date.now()}`, name: finalName, category: creatorCategory, type: 'custom', paths: [creatorSvgPath] };
    setIcons([newIcon, ...icons]);
    triggerToast(`"${finalName}" compiled to src/icons/${creatorCategory}/${finalName}.jsx`);
    setSelectedIcon(newIcon);
    setSelectedVirtualFile(`src/icons/${creatorCategory}/${finalName}.jsx`);
    setGridPoints([]); setCreatorIconName('');
  };

  const handleGridPointClick = (x, y) => {
    const existingIndex = gridPoints.findIndex(pt => pt.x === x && pt.y === y);
    if (existingIndex !== -1) setGridPoints(prev => prev.filter((_, idx) => idx !== existingIndex));
    else setGridPoints(prev => [...prev, { x, y }]);
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
    } catch (err) { triggerToast('Could not copy automatically. Select text manually.'); }
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
      if (format === 'jpg' || format === 'jpeg') { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, renderCanvas.width, renderCanvas.height); }
      else { ctx.clearRect(0, 0, renderCanvas.width, renderCanvas.height); }
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
      if (bundledIcons.length > 1) setBundledIcons(prev => prev.filter(x => x !== id));
      else triggerToast("At least one icon must remain in the production bundle.");
    } else setBundledIcons(prev => [...prev, id]);
  };

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => ({ ...prev, [folderName]: !prev[folderName] }));
  };

  const allCategories = useMemo(() => {
    const cats = new Set();
    icons.forEach(i => { if (i.type !== 'custom' && i.category) cats.add(i.category); });
    return [...cats].sort();
  }, [icons]);

  const iconsByRealCategory = useMemo(() => {
    const map = {};
    allCategories.forEach(cat => {
      map[cat] = icons.filter(i => i.category === cat && i.type !== 'custom');
    });
    return map;
  }, [icons, allCategories]);

  const iconsByCategory = useMemo(() => {
    const map = {};
    CATEGORIES.filter(c => c !== 'All').forEach(cat => {
      map[cat] = icons.filter(i => {
        if (cat === 'Custom') return i.type === 'custom';
        return i.category.startsWith(cat) && i.type !== 'custom';
      });
    });
    return map;
  }, [icons]);

  // --- Icon for hero floating preview ---
  const [heroIconIdx, setHeroIconIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIconIdx(prev => (prev + 1) % HERO_ICON_NAMES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const heroIconObj = useMemo(() => {
    const name = HERO_ICON_NAMES[heroIconIdx];
    const found = icons.find(i => i.name === name || i.name.toLowerCase() === name.toLowerCase());
    if (found) return found;
    for (const icon of icons) {
      if (icon.name.toLowerCase().includes(name.toLowerCase())) return icon;
    }
    return icons[Math.floor(Math.random() * Math.min(100, icons.length))];
  }, [heroIconIdx, icons]);

  const [demoSize, setDemoSize] = useState(24);
  const [demoStroke, setDemoStroke] = useState(2);
  const [demoColor, setDemoColor] = useState('#3b82f6');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">

      {/* ===== NAVBAR ===== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledPast ? 'bg-white/90 backdrop-blur-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-gray-200/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.12)]">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5-3 5 3-.813-5.096M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              </svg>
            </div>
            <span className="font-black text-lg tracking-tight text-gray-900">
              Danesh<span className="text-blue-600">Icons</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Features</a>
            <a href="#gallery" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Icons</a>
            <a href="#guide" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Guide</a>
            <a href="#sponsors" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Sponsors</a>
            <a href="https://github.com/danu20002/daneshicons" target="_blank" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.12)] flex items-center gap-1.5"
            >
              <Upload size={13} />
              Upload SVG
            </button>
          </nav>

          <button className="md:hidden p-2 text-gray-500 hover:text-gray-900">
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white pointer-events-none" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Floating icons background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[24, 20, 28, 18, 22, 16, 26, 14].map((size, i) => (
            <div key={i} className="absolute animate-float" style={{
              left: `${10 + (i * 12)}%`, top: `${15 + (i * 8) % 60}%`,
              animationDelay: `${i * 1.2}s`, animationDuration: `${6 + i}s`, opacity: 0.08
            }}>
              <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="rotate-12">
                <circle cx="12" cy="12" r="10" />
                {i % 2 === 0 && <path d="M12 8v4l3 3" />}
              </svg>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200/50 px-3 py-1.5 rounded-full text-xs font-bold text-blue-700 mb-6">
                <Sparkles size={12} />
                <span>{stats.total.toLocaleString()} icons · Tree-shakable · MIT</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] mb-5">
                Beautiful &amp; Consistent
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">SVG Icons</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
                {stats.total.toLocaleString()} premium, tree-shakable SVG icons for your next project.
                Consistent design, fully customizable, and built for React, Vue, and more.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="#gallery" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-[0_4px_20px_rgba(59,130,246,0.2)] flex items-center gap-2">
                  <Grid size={16} />
                  Browse Icons
                </a>
                <a href="#guide" className="bg-white border border-gray-200 hover:border-blue-500/30 text-gray-700 hover:text-gray-900 text-sm font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 shadow-sm">
                  <BookOpenText size={16} />
                  Get Started
                </a>
                <a href="https://github.com/danu20002/daneshicons" target="_blank" className="bg-white border border-gray-200 hover:border-blue-500/30 text-gray-500 hover:text-gray-900 text-sm font-bold px-4 py-3 rounded-xl transition-all flex items-center gap-2 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>

            {/* Hero animated icon preview */}
            <div className="shrink-0 relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-3xl border border-gray-200 shadow-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />
                {heroIconObj && (
                  <div className="animate-hero-pulse" key={heroIconIdx}>
                    <LazyIcon
                      icon={heroIconObj}
                      renderStyle={renderStyle}
                      strokeWidth={2}
                      globalSize={96}
                      selectedColor={{ hex: '#3b82f6' }}
                    />
                  </div>
                )}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm border border-gray-200 px-3 py-1 rounded-full text-[10px] font-mono text-gray-500">
                  {heroIconObj?.name || '...'}
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-indigo-500/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div className="border-y border-gray-200 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: stats.total.toLocaleString(), label: 'Total Icons', icon: <Grid size={16} className="text-blue-600" /> },
              { value: stats.standard.toLocaleString(), label: 'Standard Icons', icon: <ShieldIcon size={16} className="text-emerald-600" /> },
              { value: 'Zero', label: 'Dependencies', icon: <Package size={16} className="text-amber-600" /> },
              { value: 'MIT', label: 'License', icon: <Heart size={16} className="text-rose-600" /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold uppercase tracking-wider">
                  {stat.icon}
                  {stat.label}
                </div>
                <span className="text-2xl font-black text-gray-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Why DaneshIcons?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Designed with precision, built for performance. Every icon follows strict design rules for consistency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Zap size={20} />, title: 'Lightweight & Scalable', desc: 'Highly optimized SVGs that scale from 16px to 64px without quality loss.', color: 'text-amber-600', bg: 'bg-amber-50' },
              { icon: <Palette size={20} />, title: 'Clean & Consistent', desc: 'Strict 24x24 viewBox, 2px stroke, round caps and joins — unified design language.', color: 'text-blue-600', bg: 'bg-blue-50' },
              { icon: <Sliders size={20} />, title: 'Fully Customizable', desc: 'Change color, size, stroke width, and render style (outline/solid) on the fly.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { icon: <Package size={20} />, title: 'Tree-Shakable', desc: 'Import only what you need. Your bundler eliminates unused icons automatically.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { icon: <Grid size={20} />, title: '11,000+ Icons', desc: 'Vast library covering every category from A to Z with unique, hand-crafted designs.', color: 'text-purple-600', bg: 'bg-purple-50' },
              { icon: <Heart size={20} />, title: 'Open Source (MIT)', desc: 'Free for personal and commercial use. Community-driven with active development.', color: 'text-rose-600', bg: 'bg-rose-50' },
            ].map((feature, i) => (
              <div key={i} className="group bg-white border border-gray-200 hover:border-blue-500/20 rounded-2xl p-6 transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.06)]">
                <div className={`w-10 h-10 ${feature.bg} rounded-xl flex items-center justify-center ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE DEMO SECTION ===== */}
      <section className="py-20 sm:py-28 bg-gray-50/60 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">See It in Action</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Customize icons in real-time. Change the size, stroke, color, and style instantly.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Preview */}
              <div className="shrink-0 flex items-center justify-center w-48 h-48 bg-gray-50 rounded-2xl border border-gray-200">
                {(heroIconObj) && (
                  <LazyIcon
                    icon={heroIconObj}
                    renderStyle={renderStyle}
                    strokeWidth={demoStroke}
                    globalSize={demoSize}
                    selectedColor={{ hex: demoColor }}
                  />
                )}
              </div>

              {/* Controls */}
              <div className="flex-1 w-full space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-gray-500">Size</span>
                      <span className="font-mono font-bold text-blue-600">{demoSize}px</span>
                    </div>
                    <input type="range" min="16" max="96" value={demoSize}
                      onChange={e => setDemoSize(parseInt(e.target.value))}
                      className="w-full accent-blue-600 h-1.5 rounded-lg cursor-pointer" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-gray-500">Stroke</span>
                      <span className="font-mono font-bold text-indigo-600">{demoStroke}px</span>
                    </div>
                    <input type="range" min="0.5" max="4" step="0.5" value={demoStroke}
                      onChange={e => setDemoStroke(parseFloat(e.target.value))}
                      className={`w-full accent-indigo-600 h-1.5 rounded-lg cursor-pointer ${renderStyle === 'solid' ? 'opacity-30' : ''}`}
                      disabled={renderStyle === 'solid'} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Color:</span>
                  {['#3b82f6', '#06b6d4', '#10b981', '#f43f5e', '#f59e0b', '#6366f1', '#a855f7', '#000000'].map((c, i) => (
                    <button key={i} onClick={() => setDemoColor(c)}
                      className={`w-6 h-6 rounded-full transition-all ${demoColor === c ? 'ring-2 ring-blue-500 ring-offset-2 scale-110' : 'hover:scale-105 opacity-70 hover:opacity-100'}`}
                      style={{ backgroundColor: c }} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 self-center">Style:</span>
                  <button onClick={() => setRenderStyle('outline')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${renderStyle === 'outline' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-gray-50 text-gray-500 hover:text-gray-700 border border-gray-200'}`}>
                    Outline
                  </button>
                  <button onClick={() => setRenderStyle('solid')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${renderStyle === 'solid' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-gray-50 text-gray-500 hover:text-gray-700 border border-gray-200'}`}>
                    Solid
                  </button>
                </div>

                <p className="text-xs text-gray-400 pt-2 border-t border-gray-100">
                  Current icon: <span className="font-mono text-blue-600">{heroIconObj?.name || '—'}</span> · Rotates every 1.5s
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ICON GALLERY SECTION ===== */}
      <section id="gallery" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Icon Gallery</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Browse all {stats.total.toLocaleString()} icons. Click any icon to view export options.
            </p>
          </div>

          {/* ===== EXISTING WORKSPACE (3-column layout) ===== */}
          <div className="flex flex-col h-[calc(100vh-180px)] min-h-[600px] border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            {/* Gallery Nav */}
            <div className="shrink-0 flex items-center justify-between px-4 h-12 border-b border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
                  className={`p-1.5 rounded-lg hover:bg-gray-100 border transition-all ${isLeftSidebarOpen ? 'bg-blue-50 border-blue-500/20 text-blue-600' : 'border-gray-200 text-gray-500'}`}
                >
                  <Sliders size={14} />
                </button>
                <span className="text-xs font-bold text-gray-500 ml-2">
                  {filteredIcons.length} icons
                </span>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 p-0.5 rounded-lg border border-gray-200">
                <button onClick={() => setActivePlatformMode('studio')}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${activePlatformMode === 'studio' ? 'bg-white text-blue-600 shadow-sm border border-gray-200' : 'text-gray-400 hover:text-gray-700'}`}>
                  <Grid size={12} className="inline mr-1" />Studio
                </button>
                <button onClick={() => setActivePlatformMode('design-system')}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${activePlatformMode === 'design-system' ? 'bg-white text-blue-600 shadow-sm border border-gray-200' : 'text-gray-400 hover:text-gray-700'}`}>
                  <Layers size={12} className="inline mr-1" />Package
                </button>
                <button onClick={() => setActivePlatformMode('integration-guide')}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${activePlatformMode === 'integration-guide' ? 'bg-white text-blue-600 shadow-sm border border-gray-200' : 'text-gray-400 hover:text-gray-700'}`}>
                  <BookOpenText size={12} className="inline mr-1" />Guide
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400 font-mono"><span className="text-blue-600 font-bold">{stats.standard}</span> std</span>
                <button
                  onClick={() => setIsUploadModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
                >
                  <Plus size={12} />
                  Upload
                </button>
              </div>
            </div>

            {/* 3-column workspace */}
            <div className="flex-1 flex overflow-hidden">
              {/* LEFT SIDEBAR */}
              <aside className={`bg-white border-r border-gray-200 transition-all duration-300 shrink-0 overflow-y-auto ${isLeftSidebarOpen ? 'w-72' : 'w-0 opacity-0 pointer-events-none border-r-0'}`}>
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-3 border-b border-gray-200 shrink-0">
                    <button onClick={() => setActiveLeftPanel('controls')}
                      className={`py-2.5 text-[9px] font-black tracking-wider uppercase flex items-center justify-center gap-1 border-b-2 transition-all ${activeLeftPanel === 'controls' ? 'border-blue-500 text-blue-700 bg-blue-50/50' : 'border-transparent text-gray-400 hover:text-gray-700'}`}>
                      <Sliders size={11} /><span>Customize</span>
                    </button>
                    <button onClick={() => setActiveLeftPanel('svg-creator')}
                      className={`py-2.5 text-[9px] font-black tracking-wider uppercase flex items-center justify-center gap-1 border-b-2 transition-all ${activeLeftPanel === 'svg-creator' ? 'border-blue-500 text-blue-700 bg-blue-50/50' : 'border-transparent text-gray-400 hover:text-gray-700'}`}>
                      <PenTool size={11} /><span>Create</span>
                    </button>
                    <button onClick={() => setActiveLeftPanel('bundle-shake')}
                      className={`py-2.5 text-[9px] font-black tracking-wider uppercase flex items-center justify-center gap-1 border-b-2 transition-all ${activeLeftPanel === 'bundle-shake' ? 'border-blue-500 text-blue-700 bg-blue-50/50' : 'border-transparent text-gray-400 hover:text-gray-700'}`}>
                      <Activity size={11} /><span>Size</span>
                    </button>
                  </div>

                  {activeLeftPanel === 'controls' && (
                    <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Search</label>
                        <div className="relative">
                          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={12} />
                          <input type="text" placeholder="Filter..."
                            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-8 pr-7 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500/50 focus:outline-none text-gray-800 placeholder:text-gray-400 text-[11px] transition-all" />
                          {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] bg-gray-100 hover:bg-gray-200 text-gray-500 rounded px-1">Clear</button>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Categories</label>
                        <div className="space-y-0.5 max-h-48 overflow-y-auto">
                          {CATEGORIES.map(cat => {
                            const count = cat === 'All' ? icons.length :
                              cat === 'Custom' ? icons.filter(i => i.type === 'custom').length :
                                icons.filter(i => !i.type || i.type !== 'custom').filter(i => i.category.startsWith(cat)).length;
                            const isActive = activeCategory === cat;
                            return (
                              <button key={cat} onClick={() => setActiveCategory(cat)}
                                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all ${isActive ? 'bg-blue-50 text-blue-700 border border-blue-200/50' : 'text-gray-500 hover:text-gray-800'}`}>
                                <span className="flex items-center gap-2">
                                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-blue-500' : 'bg-gray-300'}`} />
                                  {cat}
                                </span>
                                <span className={`text-[9px] font-mono px-1.5 rounded ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>{count}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="h-px bg-gray-200" />

                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Size</span>
                            <span className="text-[9px] font-mono font-bold text-blue-600 bg-blue-50 px-1.5 rounded">{globalSize}px</span>
                          </div>
                          <input type="range" min="16" max="64" value={globalSize}
                            onChange={(e) => setGlobalSize(parseInt(e.target.value))}
                            className="w-full accent-blue-600 h-1 rounded-lg cursor-pointer" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Stroke</span>
                            <span className="text-[9px] font-mono font-bold text-indigo-500 bg-blue-50 px-1.5 rounded">{strokeWidth}px</span>
                          </div>
                          <input type="range" min="1" max="4" step="0.5" value={strokeWidth}
                            disabled={renderStyle === 'solid'}
                            onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
                            className={`w-full accent-blue-600 h-1 rounded-lg cursor-pointer ${renderStyle === 'solid' ? 'opacity-20 cursor-not-allowed' : ''}`} />
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block">Style</span>
                          <div className="grid grid-cols-2 gap-1 bg-gray-50 p-0.5 rounded-lg border border-gray-200">
                            <button onClick={() => setRenderStyle('outline')}
                              className={`py-1 rounded-md text-[10px] font-bold transition-all ${renderStyle === 'outline' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-400'}`}>Outline</button>
                            <button onClick={() => setRenderStyle('solid')}
                              className={`py-1 rounded-md text-[10px] font-bold transition-all ${renderStyle === 'solid' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-400'}`}>Solid</button>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block">Color</span>
                          <div className="flex flex-wrap gap-1.5">
                            {THEME_COLORS.map(color => {
                              const isSelected = selectedColor.name === color.name;
                              return (
                                <button key={color.name} onClick={() => setSelectedColor(color)}
                                  style={{ backgroundColor: color.hex }}
                                  className={`w-5 h-5 rounded-full transition-all relative ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-white scale-110' : 'hover:scale-105 opacity-70'}`}
                                  title={color.name}>
                                  {isSelected && <Check size={9} className={`absolute inset-0 m-auto ${color.name === 'White' ? 'text-black' : 'text-white'}`} />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeLeftPanel === 'svg-creator' && (
                    <div className="p-4 space-y-3 flex-1 overflow-y-auto flex flex-col justify-between">
                      <div className="space-y-3">
                        <div>
                          <span className="text-[9px] font-bold text-sky-600 uppercase tracking-widest block">Vector Matrix Creator</span>
                          <p className="text-[10px] text-gray-500 mt-0.5">Click points on the 12×12 grid to create paths.</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-xl border border-gray-200">
                          <div className="grid grid-cols-12 gap-0.5 w-full aspect-square bg-gray-100 p-1 rounded-lg relative border border-gray-200">
                            {Array.from({ length: 12 }).map((_, y) =>
                              Array.from({ length: 12 }).map((_, x) => {
                                const pointIndex = gridPoints.findIndex(pt => pt.x === x && pt.y === y);
                                const isSelected = pointIndex !== -1;
                                return (
                                  <button key={`${x}-${y}`} type="button" onClick={() => handleGridPointClick(x, y)}
                                    className={`aspect-square rounded-full transition-all relative z-10 ${isSelected ? 'bg-blue-500 scale-110 ring-2 ring-blue-500/50' : 'bg-gray-200 hover:bg-gray-300 scale-75'}`}
                                    title={`(${x}, ${y})`}>
                                    {isSelected && <span className="absolute -top-2.5 -left-2.5 bg-blue-900 text-blue-400 text-[6px] font-mono px-0.5 rounded border border-blue-500/30 scale-75">{pointIndex + 1}</span>}
                                  </button>
                                );
                              })
                            )}
                          </div>
                          <div className="flex justify-between mt-2">
                            <button onClick={() => setGridPoints([])}
                              className="text-[9px] text-gray-400 hover:text-gray-700 flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 border border-gray-200">
                              <RotateCcw size={9} />Reset
                            </button>
                            <span className="text-[9px] font-mono text-gray-500">Nodes: <strong className="text-blue-600">{gridPoints.length}</strong></span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <input type="text" placeholder="Icon name..." value={creatorIconName}
                            onChange={(e) => setCreatorIconName(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 text-[11px] focus:outline-none focus:border-blue-500/50" />
                          <div className="bg-gray-50 p-2 rounded-lg border border-gray-200 font-mono text-[8px] text-blue-700 break-all select-all min-h-[20px]">
                            {creatorSvgPath || 'Click matrix points above...'}
                          </div>
                        </div>
                      </div>
                      <button type="button" onClick={handleAddCreatorPointsToLibrary} disabled={gridPoints.length < 2}
                        className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black tracking-wider uppercase transition-all disabled:opacity-30 disabled:pointer-events-none shrink-0">
                        <Save size={11} className="inline mr-1" />Compile
                      </button>
                    </div>
                  )}

                  {activeLeftPanel === 'bundle-shake' && (
                    <div className="p-4 space-y-3 flex-1 overflow-y-auto">
                      <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest block">Bundle Analytics</span>
                      <div className="grid grid-cols-2 gap-1 bg-gray-50 p-1 rounded-lg border border-gray-200">
                        <button onClick={() => setImportStyle('tree-shaked')}
                          className={`py-1 rounded text-[9px] font-bold transition-all ${importStyle === 'tree-shaked' ? 'bg-emerald-50 text-emerald-700 border border-emerald-500/20' : 'text-gray-400'}`}>Tree-shaked</button>
                        <button onClick={() => setImportStyle('bulk')}
                          className={`py-1 rounded text-[9px] font-bold transition-all ${importStyle === 'bulk' ? 'bg-red-50 text-red-600 border border-red-500/20' : 'text-gray-400'}`}>Monolithic</button>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 space-y-2">
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest block">Bundle Size</span>
                        <div className="text-2xl font-black font-mono text-gray-900">
                          {importStyle === 'tree-shaked' ? `${(bundledIcons.length * 0.9).toFixed(1)} KB` : `${(icons.length * 0.9).toFixed(1)} KB`}
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full transition-all duration-500 ${importStyle === 'tree-shaked' ? 'bg-emerald-500' : 'bg-red-500'}`}
                            style={{ width: importStyle === 'tree-shaked' ? `${(bundledIcons.length / icons.length) * 100}%` : '100%' }} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest block">Select icons</span>
                        <div className="grid grid-cols-4 gap-1 max-h-24 overflow-y-auto">
                          {visibleIcons.slice(0, 40).map(icon => {
                            const isIncluded = bundledIcons.includes(icon.id);
                            return (
                              <button key={icon.id} onClick={() => toggleIconBundleStatus(icon.id)}
                                className={`p-0.5 text-[7px] font-bold rounded border truncate transition-all ${isIncluded ? 'bg-emerald-50 border-emerald-500/30 text-emerald-600' : 'bg-gray-100 border-gray-200 text-gray-400'}`}>
                                {icon.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </aside>

              {/* CENTER MAIN - ICON GRID OR PACKAGE VIEW */}
              <main className="flex-1 flex flex-col overflow-hidden bg-gray-50/30">
                {activePlatformMode === 'studio' ? (
                  <div className="flex-1 flex flex-col min-h-0 p-4">
                    {/* Density controls */}
                    <div className="flex items-center justify-between mb-3 shrink-0">
                      <span className="text-[11px] font-bold text-gray-500">{filteredIcons.length} components</span>
                      <div className="flex items-center gap-1 bg-gray-100 p-0.5 rounded-lg border border-gray-200 text-[9px] font-bold">
                        <button onClick={() => setGridDensity('ultra')}
                          className={`px-2 py-0.5 rounded-md transition-all ${gridDensity === 'ultra' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>Ultra</button>
                        <button onClick={() => setGridDensity('compact')}
                          className={`px-2 py-0.5 rounded-md transition-all ${gridDensity === 'compact' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>Compact</button>
                        <button onClick={() => setGridDensity('comfortable')}
                          className={`px-2 py-0.5 rounded-md transition-all ${gridDensity === 'comfortable' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>Wide</button>
                      </div>
                    </div>

                    {filteredIcons.length === 0 ? (
                      <div className="flex-1 flex flex-col items-center justify-center border border-dashed border-gray-200 rounded-xl p-8 bg-white/60">
                        <Search size={20} className="text-gray-300 mb-2" />
                        <p className="text-xs font-bold text-gray-500">No icons found</p>
                        <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                          className="mt-3 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg text-[10px] font-bold text-gray-700 transition-all">Reset</button>
                      </div>
                    ) : (
                      <div className="flex-1 overflow-y-auto pr-1">
                        <div className={`grid gap-3 transition-all ${gridDensity === 'ultra' ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8' :
                          gridDensity === 'comfortable' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6' :
                            'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8'}`}>
                          <div onClick={() => setIsUploadModalOpen(true)}
                            className={`group border border-dashed border-blue-500/20 hover:border-blue-500/40 bg-blue-50/50 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center text-center ${gridDensity === 'ultra' ? 'p-2' : gridDensity === 'comfortable' ? 'p-4' : 'p-3'}`}>
                            <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center mb-1 group-hover:scale-105 transition-all"><Plus className="text-blue-600" size={12} /></div>
                            <span className="text-[9px] font-bold text-blue-600">Add</span>
                          </div>
                          {visibleIcons.map(icon => {
                            const isSelected = selectedIcon?.id === icon.id;
                            return (
                              <div key={icon.id} onClick={() => { setSelectedIcon(icon); setSelectedVirtualFile(`src/icons/${icon.category}/${icon.name}.jsx`); }}
                                className={`group relative rounded-xl bg-white border transition-all cursor-pointer flex items-center justify-center select-none ${isSelected ? 'border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.1)] bg-blue-50/30' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'} p-2`}>
                                <button onClick={(e) => { e.stopPropagation(); copyImport(icon.name); }}
                                  className="absolute top-1 left-1 p-0.5 rounded opacity-0 group-hover:opacity-100 hover:bg-emerald-50 hover:text-emerald-600 text-gray-400 transition-all z-20">
                                  {copiedIcon === icon.name ? <Check size={9} /> : <Copy size={9} />}
                                </button>
                                {icon.type === 'custom' && (
                                  <button onClick={(e) => handleDeleteIcon(icon.id, icon.name, e)}
                                    className="absolute top-1 right-1 p-0.5 rounded opacity-0 group-hover:opacity-100 hover:bg-red-50 hover:text-red-500 text-gray-400 transition-all z-20">
                                    <Trash2 size={9} />
                                  </button>
                                )}
                                <LazyIcon icon={icon} renderStyle={renderStyle} strokeWidth={strokeWidth} globalSize={globalSize} selectedColor={selectedColor} />
                              </div>
                            );
                          })}
                        </div>
                        {hasMore && (
                          <div className="flex justify-center mt-4 mb-2">
                            <button onClick={() => setVisibleCount(prev => prev + LOAD_MORE_STEP)}
                              className="px-5 py-2 rounded-lg bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-500/30 text-[11px] font-bold text-gray-700 hover:text-gray-900 transition-all flex items-center gap-2">
                              Load More ({filteredIcons.length - visibleCount} remaining)
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : activePlatformMode === 'design-system' ? (
                  <div className="flex-1 flex flex-col min-h-0 p-4 space-y-4 overflow-y-auto">
                    <div className="bg-white border border-gray-200 rounded-xl p-3">
                      <h3 className="text-xs font-black text-gray-800 flex items-center gap-1.5 mb-2">
                        <Layers size={13} className="text-emerald-600" />Package Explorer
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0 flex-1">
                        <div className="bg-white border border-gray-200 rounded-xl p-3 overflow-y-auto">
                          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Directory Tree</span>
                          <div className="space-y-0.5 text-xs">
                            <div className="flex items-center gap-1.5 p-0.5 text-gray-500 font-bold font-mono text-[10px]">
                              <FolderOpen className="text-amber-500" size={12} />danesh-icons/
                            </div>
                            <div className="pl-3 space-y-0.5">
                              <button onClick={() => setSelectedVirtualFile('package.json')}
                                className={`w-full text-left font-mono flex items-center gap-1.5 p-0.5 rounded text-[10px] transition-all ${selectedVirtualFile === 'package.json' ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:text-gray-700'}`}>
                                <FileCode size={11} className="text-sky-600" />package.json
                              </button>
                              <button onClick={() => setSelectedVirtualFile('README.md')}
                                className={`w-full text-left font-mono flex items-center gap-1.5 p-0.5 rounded text-[10px] transition-all ${selectedVirtualFile === 'README.md' ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:text-gray-700'}`}>
                                <Info size={11} className="text-blue-400" />README.md
                              </button>
                              <div>
                                <button onClick={() => toggleFolder('src')}
                                  className="w-full text-left font-mono flex items-center justify-between p-0.5 rounded text-gray-700 text-[10px]">
                                  <span className="flex items-center gap-1.5">
                                    {expandedFolders.src ? <FolderOpen className="text-amber-500" size={11} /> : <Folder className="text-amber-500" size={11} />}
                                    <span className="font-bold">src/</span>
                                  </span>
                                  <ChevronDown size={10} className={`text-gray-400 transition-transform ${expandedFolders.src ? '' : '-rotate-90'}`} />
                                </button>
                                {expandedFolders.src && (
                                  <div className="pl-3 border-l border-gray-200 ml-2 space-y-0.5">
                                    <button onClick={() => setSelectedVirtualFile('src/index.js')}
                                      className={`w-full text-left font-mono flex items-center gap-1.5 p-0.5 rounded text-[10px] transition-all ${selectedVirtualFile === 'src/index.js' ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:text-gray-700'}`}>
                                      <Code size={11} className="text-blue-600" />index.js
                                    </button>
                                    <div>
                                      <button onClick={() => toggleFolder('icons')}
                                        className="w-full text-left font-mono flex items-center justify-between p-0.5 rounded text-gray-700 text-[10px]">
                                        <span className="flex items-center gap-1.5">
                                          {expandedFolders.icons ? <FolderOpen className="text-amber-500" size={11} /> : <Folder className="text-amber-500" size={11} />}
                                          <span>icons/</span>
                                        </span>
                                        <ChevronDown size={10} className={`text-gray-400 transition-transform ${expandedFolders.icons ? '' : '-rotate-90'}`} />
                                      </button>
                                      {expandedFolders.icons && (
                                        <div className="pl-3 border-l border-gray-200 ml-1.5 space-y-0.5">
                                          {allCategories.map(cat => {
                                            const hasIcons = iconsByRealCategory[cat]?.length > 0;
                                            const isExpanded = expandedFolders[cat];
                                            return (
                                              <div key={cat}>
                                                <button onClick={() => toggleFolder(cat)}
                                                  className="w-full text-left font-mono flex items-center justify-between p-0.5 rounded text-gray-500 text-[9px]">
                                                  <span className="flex items-center gap-1">
                                                    {isExpanded ? <FolderOpen className="text-yellow-600/80" size={10} /> : <Folder className="text-yellow-600/80" size={10} />}
                                                    <span className="font-semibold">{cat}/</span>
                                                  </span>
                                                  <span className="text-[8px] text-gray-400">({iconsByRealCategory[cat]?.length || 0})</span>
                                                </button>
                                                {isExpanded && hasIcons && (
                                                  <div className="pl-2.5 border-l border-gray-200 ml-1.5 space-y-0.5">
                                                    {iconsByRealCategory[cat].slice(0, 50).map(icon => {
                                                      const fileKey = `src/icons/${cat}/${icon.name}.jsx`;
                                                      const isFileSelected = selectedVirtualFile === fileKey;
                                                      return (
                                                        <button key={icon.id} onClick={() => { setSelectedVirtualFile(fileKey); setSelectedIcon(icon); }}
                                                          className={`w-full text-left font-mono flex items-center gap-1 p-0.5 rounded text-[9px] transition-all ${isFileSelected ? 'bg-emerald-50 text-emerald-700 border-l-2 border-emerald-500' : 'text-gray-400 hover:text-gray-700'}`}>
                                                          <FileCode size={9} className={isFileSelected ? 'text-emerald-600' : 'text-gray-400'} />
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
                        </div>
                        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-3 flex flex-col min-h-0">
                          <div className="flex items-center justify-between mb-2 shrink-0">
                            <span className="text-[10px] text-gray-400 font-mono">{selectedVirtualFile}</span>
                            <button onClick={() => copyToClipboard(virtualFileContent, 'Code')}
                              className="px-2 py-1 bg-gray-50 border border-gray-200 text-gray-500 hover:text-gray-900 rounded-lg text-[9px] font-bold transition-all flex items-center gap-1">
                              <Copy size={10} />Copy
                            </button>
                          </div>
                          <div className="flex-1 overflow-auto bg-gray-50 rounded-lg p-3 border border-gray-200 font-mono text-[10px] text-blue-700">
                            <pre className="whitespace-pre">{virtualFileContent}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* INTEGRATION GUIDE */
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-3xl mx-auto space-y-5">
                      <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h2 className="text-base font-black text-gray-900 mb-2 flex items-center gap-2">
                          <BookOpenText size={18} className="text-blue-600" />Integration Guide
                        </h2>
                        <p className="text-xs text-gray-500">Use DaneshIcons in your project as a library.</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
                        <h3 className="text-sm font-black text-gray-800 flex items-center gap-2"><span className="w-1 h-4 rounded bg-blue-500 inline-block" />Installation</h3>
                        <p className="text-xs text-gray-500">Install via npm or yarn:</p>
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-3 font-mono text-xs text-blue-700">npm install daneshicons</div>
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-3 font-mono text-xs text-blue-700">yarn add daneshicons</div>
                        <div className="bg-blue-50 border border-blue-200 p-2.5 rounded-lg text-xs text-blue-700"><strong>Peer Dependency:</strong> Requires <code className="text-blue-600">react &gt;= 16.8.0</code></div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
                        <h3 className="text-sm font-black text-gray-800 flex items-center gap-2"><span className="w-1 h-4 rounded bg-emerald-500 inline-block" />Basic Usage (React)</h3>
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-3 font-mono text-[10px] text-blue-700 leading-relaxed">
                          <pre>{`import { Baby, Shield, Search } from "daneshicons";
export default function App() {
  return (
    <div className="flex items-center gap-3">
      <Baby size={32} color="#3b82f6" strokeWidth={2} />
      <Shield size={32} color="#10b981" strokeWidth={2} />
    </div>
  );
}`}</pre>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
                        <h3 className="text-sm font-black text-gray-800 flex items-center gap-2"><span className="w-1 h-4 rounded bg-amber-500 inline-block" />Component Props</h3>
                        <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden text-xs">
                          <table className="w-full text-left">
                            <thead><tr className="border-b border-gray-200 text-gray-500 text-[9px] uppercase tracking-wider"><th className="p-2.5 font-bold">Prop</th><th className="p-2.5 font-bold">Type</th><th className="p-2.5 font-bold">Default</th><th className="p-2.5 font-bold">Description</th></tr></thead>
                            <tbody className="text-gray-700 text-[10px]">
                              <tr className="border-b border-gray-200"><td className="p-2.5 font-mono text-blue-600">size</td><td className="p-2.5 text-gray-400">number | string</td><td className="p-2.5 text-gray-400">24</td><td className="p-2.5 text-gray-500">Width & height</td></tr>
                              <tr className="border-b border-gray-200"><td className="p-2.5 font-mono text-blue-600">color</td><td className="p-2.5 text-gray-400">string</td><td className="p-2.5 text-gray-400">currentColor</td><td className="p-2.5 text-gray-500">CSS color value</td></tr>
                              <tr className="border-b border-gray-200"><td className="p-2.5 font-mono text-blue-600">strokeWidth</td><td className="p-2.5 text-gray-400">number</td><td className="p-2.5 text-gray-400">2</td><td className="p-2.5 text-gray-500">Stroke width</td></tr>
                              <tr><td className="p-2.5 font-mono text-blue-600">className</td><td className="p-2.5 text-gray-400">string</td><td className="p-2.5 text-gray-400">""</td><td className="p-2.5 text-gray-500">CSS classes</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
                        <h3 className="text-sm font-black text-gray-800 flex items-center gap-2"><span className="w-1 h-4 rounded bg-emerald-500 inline-block" />Tree-Shaking</h3>
                        <p className="text-xs text-gray-500">Only import what you need — your bundler handles the rest:</p>
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-3 font-mono text-[10px] text-blue-700"><pre>{`import { Search, Shield } from "daneshicons";`}</pre></div>
                        <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg text-xs text-emerald-700 flex items-start gap-2">
                          <Sparkles size={14} className="mt-0.5 shrink-0" />
                          <span><code className="text-blue-600">"sideEffects": false</code> enables tree-shaking in all modern bundlers.</span>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
                        <h3 className="text-sm font-black text-gray-800 flex items-center gap-2"><span className="w-1 h-4 rounded bg-cyan-500 inline-block" />Direct File Import</h3>
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-3 font-mono text-[10px] text-blue-700"><pre>{`import Baby from "daneshicons/src/icons/B/Baby.jsx";`}</pre></div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                        <p className="text-xs text-gray-400">DaneshIcons is MIT licensed. Free for personal and commercial use.</p>
                      </div>
                    </div>
                  </div>
                )}

              </main>

              {/* RIGHT SIDEBAR - EXPORTER */}
              <aside className={`bg-white border-l border-gray-200 transition-all duration-300 shrink-0 overflow-y-auto ${selectedIcon ? 'w-72' : 'w-0 opacity-0 pointer-events-none border-l-0'}`}>
                {selectedIcon && (
                  <div className="p-4 space-y-4 flex flex-col h-full">
                    <div className="flex items-center justify-between shrink-0">
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                        <Sparkles size={10} className="text-blue-600" />Compiler
                      </span>
                      <button onClick={() => setSelectedIcon(null)} className="p-0.5 rounded bg-gray-50 text-gray-500 hover:text-gray-900 border border-gray-200">
                        <X size={12} />
                      </button>
                    </div>
                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col items-center text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:6px_6px] opacity-15" />
                      <div className="w-14 h-14 rounded-xl bg-white/80 border border-gray-200 flex items-center justify-center shadow-inner relative z-10">
                        <LazyIcon icon={selectedIcon} renderStyle={renderStyle} strokeWidth={strokeWidth} globalSize={Math.min(44, Math.max(16, globalSize))} selectedColor={selectedColor} />
                      </div>
                      <div className="mt-2 z-10">
                        <h4 className="text-[11px] font-black text-gray-900">{selectedIcon.name}</h4>
                        <p className="text-[8px] text-gray-400 uppercase font-semibold">{selectedIcon.category}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Export As</label>
                      <div className="grid grid-cols-5 gap-0.5 bg-gray-50 p-0.5 rounded-lg border border-gray-200">
                        {['react', 'vue', 'svg', 'tailwind', 'css'].map(tab => (
                          <button key={tab} onClick={() => setActiveConvertTab(tab)}
                            className={`py-0.5 text-[8px] rounded font-bold transition-all text-center ${activeConvertTab === tab ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-700'}`}>
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 min-h-0">
                      <div className="bg-gray-50 rounded-lg border border-gray-200 p-2 text-xs font-mono text-blue-700/90 relative h-full">
                        <pre className="max-h-32 overflow-y-auto whitespace-pre-wrap text-[8px] leading-relaxed">
                          {activeConvertTab === 'react' && generatedCodes.react}
                          {activeConvertTab === 'vue' && generatedCodes.vue}
                          {activeConvertTab === 'svg' && generatedCodes.svg}
                          {activeConvertTab === 'tailwind' && generatedCodes.tailwind}
                          {activeConvertTab === 'css' && generatedCodes.css}
                        </pre>
                        <button onClick={() => copyToClipboard(
                          activeConvertTab === 'react' ? generatedCodes.react :
                          activeConvertTab === 'vue' ? generatedCodes.vue :
                          activeConvertTab === 'svg' ? generatedCodes.svg :
                          activeConvertTab === 'tailwind' ? generatedCodes.tailwind : generatedCodes.css,
                          activeConvertTab.toUpperCase())}
                          className="absolute bottom-1.5 right-1.5 p-1 rounded bg-white border border-gray-200 text-gray-600 hover:text-gray-900 transition-all text-[8px] shadow-sm">
                          <Copy size={9} />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2 shrink-0">
                      <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest block">Export Actions</span>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button onClick={() => handleRasterExport('png')}
                          className="py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[9px] font-bold text-sky-600 transition-all">PNG</button>
                        <button onClick={() => handleRasterExport('jpg')}
                          className="py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[9px] font-bold text-indigo-500 transition-all">JPG</button>
                      </div>
                      <button onClick={downloadSvgFile}
                        className="w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-[10px] font-bold text-white transition-all flex items-center justify-center gap-1.5">
                        <Download size={11} />Download SVG
                      </button>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button onClick={() => copyToClipboard(generatedCodes.svg, 'SVG')}
                          className="py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-700 text-[9px] font-bold border border-gray-200 transition-all">Copy SVG</button>
                        <button onClick={() => copyToClipboard(generatedCodes.react, 'React')}
                          className="py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-700 text-[9px] font-bold border border-gray-200 transition-all">Copy React</button>
                      </div>
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <a href="#hero" className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-gray-700 transition-colors">
              <ArrowDown size={14} className="rotate-180" />
              Back to top
            </a>
          </div>
        </div>
      </section>

      {/* ===== PACKAGE GUIDE SECTION ===== */}
      <section id="guide" className="py-20 sm:py-28 bg-gray-50/60 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Quick Start Guide</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Get up and running with DaneshIcons in minutes.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Package size={18} />
                <h3 className="font-bold text-gray-900">Install via npm</h3>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-3 font-mono text-xs text-blue-700 select-all">npm install daneshicons</div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-3 font-mono text-xs text-blue-700 select-all">yarn add daneshicons</div>
              <p className="text-xs text-gray-500">Zero dependencies. React &gt;= 16.8.0 required.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-emerald-600">
                <Code size={18} />
                <h3 className="font-bold text-gray-900">Import & Use</h3>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-3 font-mono text-[10px] text-blue-700 leading-relaxed">
                <pre>{`import { Search, Shield } from "daneshicons";

<Search size={24} color="#3b82f6" />
<Shield size={32} color="#10b981" />`}</pre>
              </div>
              <p className="text-xs text-gray-500">Named exports for tree-shaking support.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600">
                <Layers size={18} />
                <h3 className="font-bold text-gray-900">Framework Support</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vue', 'Svelte', 'Solid', 'Preact', 'Angular', 'React Native', 'Astro'].map(fw => (
                  <span key={fw} className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg text-[10px] font-bold text-gray-600">{fw}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500">Use direct file imports for non-React frameworks.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-600">
                <Zap size={18} />
                <h3 className="font-bold text-gray-900">Features</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex items-start gap-2"><Check size={12} className="text-emerald-500 mt-0.5 shrink-0" />Tree-shakable ES modules</li>
                <li className="flex items-start gap-2"><Check size={12} className="text-emerald-500 mt-0.5 shrink-0" />24x24 viewBox, consistent design</li>
                <li className="flex items-start gap-2"><Check size={12} className="text-emerald-500 mt-0.5 shrink-0" />Customizable color, size, stroke</li>
                <li className="flex items-start gap-2"><Check size={12} className="text-emerald-500 mt-0.5 shrink-0" />MIT licensed — free for all use</li>
                <li className="flex items-start gap-2"><Check size={12} className="text-emerald-500 mt-0.5 shrink-0" />{stats.total.toLocaleString()}+ unique icons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPONSORS SECTION ===== */}
      <section id="sponsors" className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Sponsors</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            Support the project by becoming a sponsor. Your logo will appear here.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white border border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 min-h-[160px]">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200">
                  <Heart size={20} className="text-gray-300" />
                </div>
                <p className="text-sm font-bold text-gray-400">Your Logo Here</p>
                <p className="text-[10px] text-gray-300">Sponsor slot available</p>
              </div>
            ))}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 min-h-[160px] sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <Star size={20} className="text-white" />
              </div>
              <p className="text-sm font-bold text-blue-700">Become a Sponsor</p>
              <a href="https://github.com/sponsors/danu20002" target="_blank"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.12)] hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                Sponsor on GitHub
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            Your sponsorship helps maintain and grow the icon library. All sponsors are featured here with a link to your site.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gray-200 bg-gray-50/50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5-3 5 3-.813-5.096M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <span className="font-black text-base text-gray-900">Danesh<span className="text-blue-600">Icons</span></span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{stats.total.toLocaleString()} premium SVG icons for modern web development.</p>
            </div>
            <div>
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">Product</h4>
              <div className="space-y-2 text-xs text-gray-500">
                <a href="#gallery" className="block hover:text-gray-900 transition-colors">Icons</a>
                <a href="#guide" className="block hover:text-gray-900 transition-colors">Documentation</a>
                <a href="#features" className="block hover:text-gray-900 transition-colors">Features</a>
                <a href="https://github.com/danu20002/daneshicons/releases" target="_blank" className="block hover:text-gray-900 transition-colors">Changelog</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">Community</h4>
              <div className="space-y-2 text-xs text-gray-500">
                <a href="https://github.com/danu20002/daneshicons" target="_blank" className="block hover:text-gray-900 transition-colors flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>GitHub</a>
                <a href="#sponsors" className="block hover:text-gray-900 transition-colors flex items-center gap-1"><Heart size={12} />Sponsor</a>
                <a href="https://github.com/danu20002/daneshicons/issues" target="_blank" className="block hover:text-gray-900 transition-colors">Report Issue</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">Legal</h4>
              <div className="space-y-2 text-xs text-gray-500">
                <span className="block">MIT License</span>
                <span className="block">Free for commercial use</span>
                <span className="block">&copy; {new Date().getFullYear()} DaneshIcons</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center text-[10px] text-gray-400">
            <p>Built with care. Released under the MIT License.</p>
          </div>
        </div>
      </footer>

      {/* ===== TOAST ===== */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 rounded-xl shadow-lg text-white animate-fade-in-up">
          <Sparkles size={14} />
          <span className="font-bold text-xs tracking-wide">{toast.message}</span>
        </div>
      )}

      {/* ===== UPLOAD MODAL ===== */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl border border-blue-500/20 shadow-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <Upload size={18} className="text-blue-600" />
                <h3 className="text-sm font-extrabold text-gray-900">Upload Custom SVG Code</h3>
              </div>
              <button onClick={closeUploadModal} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-all border border-gray-200">
                <X size={14} />
              </button>
            </div>
            {uploadError && (
              <div className="bg-red-50 border border-red-500/20 text-red-600 text-xs px-3 py-2 rounded-xl mb-4 font-semibold">{uploadError}</div>
            )}
            <form onSubmit={handleAddCustomIcon} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-gray-700 font-bold block">Icon Name</label>
                <input type="text" placeholder="e.g. ShieldVerified, CustomBolt" value={newIconName} onChange={(e) => setNewIconName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500/50 focus:outline-none text-gray-800 placeholder:text-gray-400 font-bold" />
              </div>
              <div className="space-y-1.5">
                <label className="text-gray-700 font-bold block">Category</label>
                <select value={newIconCategory} onChange={(e) => setNewIconCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500/50 focus:outline-none text-gray-800 font-bold">
                  <option value="General">General</option>
                  <option value="Commerce">Commerce</option>
                  <option value="System">System</option>
                  <option value="Tech">Tech</option>
                  <option value="Nav">Nav</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-gray-700 font-bold block">SVG Markup or Path (d)</label>
                <textarea rows="4" placeholder="Paste raw SVG markup or direct d-attributes here..." value={newIconPath} onChange={(e) => setNewIconPath(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500/50 focus:outline-none text-gray-800 placeholder:text-gray-400 font-mono text-[10px]" />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button type="button" onClick={closeUploadModal} className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold rounded-xl transition-all">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.12)]">Compile to Library</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===== STYLED KEYFRAMES ===== */}
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 33% { transform: translateY(-8px) rotate(2deg); } 66% { transform: translateY(4px) rotate(-1deg); } }
        .animate-float { animation: float 8s ease-in-out infinite; }
        @keyframes heroPulse { 0% { transform: scale(0.9); opacity: 0.6; } 50% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(0.9); opacity: 0.6; } }
        .animate-hero-pulse { animation: heroPulse 2s ease-in-out infinite; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.08); border-radius: 99px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(59,130,246,0.2); }
      `}</style>

    </div>
  );
}
