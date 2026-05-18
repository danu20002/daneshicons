import React from 'react';

export const iconData = {
  id: "BarChartHorizontal",
  name: "BarChartHorizontal",
  category: "B",
  nodes: [["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{"d":"M7 16h8"}],["path",{"d":"M7 11h12"}],["path",{"d":"M7 6h3"}]]
};

export const BarChartHorizontal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 16h8" />
      <path d="M7 11h12" />
      <path d="M7 6h3" />
      {children}
    </svg>
  );
});

export default BarChartHorizontal;
