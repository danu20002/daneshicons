import React from 'react';

export const iconData = {
  id: "BarChart2",
  name: "BarChart2",
  category: "B",
  nodes: [["path",{"d":"M5 21v-6"}],["path",{"d":"M12 21V3"}],["path",{"d":"M19 21V9"}]]
};

export const BarChart2 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 21V3" />
      <path d="M19 21V9" />
      {children}
    </svg>
  );
});

export default BarChart2;
