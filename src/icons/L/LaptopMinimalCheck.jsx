import React from 'react';

export const iconData = {
  id: "LaptopMinimalCheck",
  name: "LaptopMinimalCheck",
  category: "L",
  nodes: [["path",{"d":"M2 20h20"}],["path",{"d":"m9 10 2 2 4-4"}],["rect",{"x":"3","y":"4","width":"18","height":"12","rx":"2"}]]
};

export const LaptopMinimalCheck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M2 20h20" />
      <path d="m9 10 2 2 4-4" />
      <rect x="3" y="4" width="18" height="12" rx="2" />
      {children}
    </svg>
  );
});

export default LaptopMinimalCheck;
