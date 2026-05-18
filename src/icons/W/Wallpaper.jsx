import React from 'react';

export const iconData = {
  id: "Wallpaper",
  name: "Wallpaper",
  category: "W",
  nodes: [["path",{"d":"M12 17v4"}],["path",{"d":"M8 21h8"}],["path",{"d":"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"}],["circle",{"cx":"8","cy":"9","r":"2"}],["rect",{"x":"2","y":"3","width":"20","height":"14","rx":"2"}]]
};

export const Wallpaper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" />
      <circle cx="8" cy="9" r="2" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
      {children}
    </svg>
  );
});

export default Wallpaper;
