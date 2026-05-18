import React from 'react';

export const iconData = {
  id: "BusFront",
  name: "BusFront",
  category: "B",
  nodes: [["path",{"d":"M4 6 2 7"}],["path",{"d":"M10 6h4"}],["path",{"d":"m22 7-2-1"}],["rect",{"width":"16","height":"16","x":"4","y":"3","rx":"2"}],["path",{"d":"M4 11h16"}],["path",{"d":"M8 15h.01"}],["path",{"d":"M16 15h.01"}],["path",{"d":"M6 19v2"}],["path",{"d":"M18 21v-2"}]]
};

export const BusFront = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M4 6 2 7" />
      <path d="M10 6h4" />
      <path d="m22 7-2-1" />
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M8 15h.01" />
      <path d="M16 15h.01" />
      <path d="M6 19v2" />
      <path d="M18 21v-2" />
      {children}
    </svg>
  );
});

export default BusFront;
