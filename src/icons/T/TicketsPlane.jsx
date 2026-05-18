import React from 'react';

export const iconData = {
  id: "TicketsPlane",
  name: "TicketsPlane",
  category: "T",
  nodes: [["path",{"d":"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{"d":"m12 13.5 3.794.506"}],["path",{"d":"m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8"}],["path",{"d":"M6 10V8"}],["path",{"d":"M6 14v1"}],["path",{"d":"M6 19v2"}],["rect",{"x":"2","y":"8","width":"20","height":"13","rx":"2"}]]
};

export const TicketsPlane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
      <path d="m12 13.5 3.794.506" />
      <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" />
      <path d="M6 10V8" />
      <path d="M6 14v1" />
      <path d="M6 19v2" />
      <rect x="2" y="8" width="20" height="13" rx="2" />
      {children}
    </svg>
  );
});

export default TicketsPlane;
