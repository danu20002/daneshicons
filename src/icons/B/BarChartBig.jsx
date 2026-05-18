import React from 'react';

export const iconData = {
  id: "BarChartBig",
  name: "BarChartBig",
  category: "B",
  nodes: [["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{"x":"15","y":"5","width":"4","height":"12","rx":"1"}],["rect",{"x":"7","y":"8","width":"4","height":"9","rx":"1"}]]
};

export const BarChartBig = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect x="15" y="5" width="4" height="12" rx="1" />
      <rect x="7" y="8" width="4" height="9" rx="1" />
      {children}
    </svg>
  );
});

export default BarChartBig;
