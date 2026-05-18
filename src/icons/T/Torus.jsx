import React from 'react';

export const iconData = {
  id: "Torus",
  name: "Torus",
  category: "T",
  nodes: [["ellipse",{"cx":"12","cy":"11","rx":"3","ry":"2"}],["ellipse",{"cx":"12","cy":"12.5","rx":"10","ry":"8.5"}]]
};

export const Torus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <ellipse cx="12" cy="11" rx="3" ry="2" />
      <ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
      {children}
    </svg>
  );
});

export default Torus;
