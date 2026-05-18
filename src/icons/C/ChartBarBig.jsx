import React from 'react';

export const iconData = {
  id: "ChartBarBig",
  name: "ChartBarBig",
  category: "C",
  nodes: [["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{"x":"7","y":"13","width":"9","height":"4","rx":"1"}],["rect",{"x":"7","y":"5","width":"12","height":"4","rx":"1"}]]
};

export const ChartBarBig = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect x="7" y="13" width="9" height="4" rx="1" />
      <rect x="7" y="5" width="12" height="4" rx="1" />
      {children}
    </svg>
  );
});

export default ChartBarBig;
