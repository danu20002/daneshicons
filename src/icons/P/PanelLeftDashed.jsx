import React from 'react';

export const iconData = {
  id: "PanelLeftDashed",
  name: "PanelLeftDashed",
  category: "P",
  nodes: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["path",{"d":"M9 14v1"}],["path",{"d":"M9 19v2"}],["path",{"d":"M9 3v2"}],["path",{"d":"M9 9v1"}]]
};

export const PanelLeftDashed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 14v1" />
      <path d="M9 19v2" />
      <path d="M9 3v2" />
      <path d="M9 9v1" />
      {children}
    </svg>
  );
});

export default PanelLeftDashed;
