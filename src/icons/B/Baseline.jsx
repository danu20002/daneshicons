import React from 'react';

export const iconData = {
  id: "Baseline",
  name: "Baseline",
  category: "B",
  nodes: [["path",{"d":"M4 20h16"}],["path",{"d":"m6 16 6-12 6 12"}],["path",{"d":"M8 12h8"}]]
};

export const Baseline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M4 20h16" />
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
      {children}
    </svg>
  );
});

export default Baseline;
