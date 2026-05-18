import React from 'react';

export const iconData = {
  id: "Ellipse",
  name: "Ellipse",
  category: "E",
  nodes: [["ellipse",{"cx":"12","cy":"12","rx":"10","ry":"6"}]]
};

export const Ellipse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <ellipse cx="12" cy="12" rx="10" ry="6" />
      {children}
    </svg>
  );
});

export default Ellipse;
