import React from 'react';

export const iconData = {
  id: "SquareDivide",
  name: "SquareDivide",
  category: "S",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}],["line",{"x1":"8","x2":"16","y1":"12","y2":"12"}],["line",{"x1":"12","x2":"12","y1":"16","y2":"16"}],["line",{"x1":"12","x2":"12","y1":"8","y2":"8"}]]
};

export const SquareDivide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="8" x2="16" y1="12" y2="12" />
      <line x1="12" x2="12" y1="16" y2="16" />
      <line x1="12" x2="12" y1="8" y2="8" />
      {children}
    </svg>
  );
});

export default SquareDivide;
