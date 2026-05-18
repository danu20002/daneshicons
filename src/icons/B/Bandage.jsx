import React from 'react';

export const iconData = {
  id: "Bandage",
  name: "Bandage",
  category: "B",
  nodes: [["path",{"d":"M10 10.01h.01"}],["path",{"d":"M10 14.01h.01"}],["path",{"d":"M14 10.01h.01"}],["path",{"d":"M14 14.01h.01"}],["path",{"d":"M18 6v12"}],["path",{"d":"M6 6v12"}],["rect",{"x":"2","y":"6","width":"20","height":"12","rx":"2"}]]
};

export const Bandage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M10 10.01h.01" />
      <path d="M10 14.01h.01" />
      <path d="M14 10.01h.01" />
      <path d="M14 14.01h.01" />
      <path d="M18 6v12" />
      <path d="M6 6v12" />
      <rect x="2" y="6" width="20" height="12" rx="2" />
      {children}
    </svg>
  );
});

export default Bandage;
