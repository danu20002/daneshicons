import React from 'react';

export const iconData = {
  id: "LaptopMinimal",
  name: "LaptopMinimal",
  category: "L",
  nodes: [["rect",{"width":"18","height":"12","x":"3","y":"4","rx":"2","ry":"2"}],["line",{"x1":"2","x2":"22","y1":"20","y2":"20"}]]
};

export const LaptopMinimal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
      <line x1="2" x2="22" y1="20" y2="20" />
      {children}
    </svg>
  );
});

export default LaptopMinimal;
