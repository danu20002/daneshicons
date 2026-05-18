import React from 'react';

export const iconData = {
  id: "Tablet",
  name: "Tablet",
  category: "T",
  nodes: [["rect",{"width":"16","height":"20","x":"4","y":"2","rx":"2","ry":"2"}],["line",{"x1":"12","x2":"12.01","y1":"18","y2":"18"}]]
};

export const Tablet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
      {children}
    </svg>
  );
});

export default Tablet;
