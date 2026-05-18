import React from 'react';

export const iconData = {
  id: "ChartColumnIncreasing",
  name: "ChartColumnIncreasing",
  category: "C",
  nodes: [["path",{"d":"M13 17V9"}],["path",{"d":"M18 17V5"}],["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{"d":"M8 17v-3"}]]
};

export const ChartColumnIncreasing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M13 17V9" />
      <path d="M18 17V5" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M8 17v-3" />
      {children}
    </svg>
  );
});

export default ChartColumnIncreasing;
