import React from 'react';

export const iconData = {
  id: "ShowerHead",
  name: "ShowerHead",
  category: "S",
  nodes: [["path",{"d":"m4 4 2.5 2.5"}],["path",{"d":"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{"d":"M15 5 5 15"}],["path",{"d":"M14 17v.01"}],["path",{"d":"M10 16v.01"}],["path",{"d":"M13 13v.01"}],["path",{"d":"M16 10v.01"}],["path",{"d":"M11 20v.01"}],["path",{"d":"M17 14v.01"}],["path",{"d":"M20 11v.01"}]]
};

export const ShowerHead = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m4 4 2.5 2.5" />
      <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
      <path d="M15 5 5 15" />
      <path d="M14 17v.01" />
      <path d="M10 16v.01" />
      <path d="M13 13v.01" />
      <path d="M16 10v.01" />
      <path d="M11 20v.01" />
      <path d="M17 14v.01" />
      <path d="M20 11v.01" />
      {children}
    </svg>
  );
});

export default ShowerHead;
