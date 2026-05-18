import React from 'react';

export const iconData = {
  id: "Videotape",
  name: "Videotape",
  category: "V",
  nodes: [["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}],["path",{"d":"M2 8h20"}],["circle",{"cx":"8","cy":"14","r":"2"}],["path",{"d":"M8 12h8"}],["circle",{"cx":"16","cy":"14","r":"2"}]]
};

export const Videotape = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 8h20" />
      <circle cx="8" cy="14" r="2" />
      <path d="M8 12h8" />
      <circle cx="16" cy="14" r="2" />
      {children}
    </svg>
  );
});

export default Videotape;
