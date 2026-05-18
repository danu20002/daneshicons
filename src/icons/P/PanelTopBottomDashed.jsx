import React from 'react';

export const iconData = {
  id: "PanelTopBottomDashed",
  name: "PanelTopBottomDashed",
  category: "P",
  nodes: [["path",{"d":"M14 15h1"}],["path",{"d":"M14 9h1"}],["path",{"d":"M19 15h2"}],["path",{"d":"M19 9h2"}],["path",{"d":"M3 15h2"}],["path",{"d":"M3 9h2"}],["path",{"d":"M9 15h1"}],["path",{"d":"M9 9h1"}],["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}]]
};

export const PanelTopBottomDashed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M14 15h1" />
      <path d="M14 9h1" />
      <path d="M19 15h2" />
      <path d="M19 9h2" />
      <path d="M3 15h2" />
      <path d="M3 9h2" />
      <path d="M9 15h1" />
      <path d="M9 9h1" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      {children}
    </svg>
  );
});

export default PanelTopBottomDashed;
