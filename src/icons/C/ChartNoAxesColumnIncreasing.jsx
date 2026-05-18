import React from 'react';

export const iconData = {
  id: "ChartNoAxesColumnIncreasing",
  name: "ChartNoAxesColumnIncreasing",
  category: "C",
  nodes: [["path",{"d":"M5 21v-6"}],["path",{"d":"M12 21V9"}],["path",{"d":"M19 21V3"}]]
};

export const ChartNoAxesColumnIncreasing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M5 21v-6" />
      <path d="M12 21V9" />
      <path d="M19 21V3" />
      {children}
    </svg>
  );
});

export default ChartNoAxesColumnIncreasing;
