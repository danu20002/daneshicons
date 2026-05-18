import React from 'react';

export const iconData = {
  id: "StretchHorizontal",
  name: "StretchHorizontal",
  category: "S",
  nodes: [["rect",{"width":"20","height":"6","x":"2","y":"4","rx":"2"}],["rect",{"width":"20","height":"6","x":"2","y":"14","rx":"2"}]]
};

export const StretchHorizontal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="20" height="6" x="2" y="4" rx="2" />
      <rect width="20" height="6" x="2" y="14" rx="2" />
      {children}
    </svg>
  );
});

export default StretchHorizontal;
