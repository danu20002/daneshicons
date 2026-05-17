import React from 'react';

export const iconData = {
  id: "HardDriveDownload",
  name: "HardDriveDownload",
  category: "H",
  nodes: [["path",{"d":"M12 2v8"}],["path",{"d":"m16 6-4 4-4-4"}],["rect",{"width":"20","height":"8","x":"2","y":"14","rx":"2"}],["path",{"d":"M6 18h.01"}],["path",{"d":"M10 18h.01"}]]
};

export const HardDriveDownload = ({ size = 24, className = "", color = "currentColor", renderStyle = "outline", strokeWidth = 2 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
      color={color}
    >
      <path d="M12 2v8" />
      <path d="m16 6-4 4-4-4" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h.01" />
      <path d="M10 18h.01" />
    </svg>
  );
};

export default HardDriveDownload;
