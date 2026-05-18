import React from 'react';

export const iconData = {
  id: "StretchVertical",
  name: "StretchVertical",
  category: "S",
  nodes: [["rect",{"width":"6","height":"20","x":"4","y":"2","rx":"2"}],["rect",{"width":"6","height":"20","x":"14","y":"2","rx":"2"}]]
};

export const StretchVertical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="6" height="20" x="4" y="2" rx="2" />
      <rect width="6" height="20" x="14" y="2" rx="2" />
      {children}
    </svg>
  );
});

export default StretchVertical;
