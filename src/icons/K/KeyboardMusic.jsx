import React from 'react';

export const iconData = {
  id: "KeyboardMusic",
  name: "KeyboardMusic",
  category: "K",
  nodes: [["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2"}],["path",{"d":"M6 8h4"}],["path",{"d":"M14 8h.01"}],["path",{"d":"M18 8h.01"}],["path",{"d":"M2 12h20"}],["path",{"d":"M6 12v4"}],["path",{"d":"M10 12v4"}],["path",{"d":"M14 12v4"}],["path",{"d":"M18 12v4"}]]
};

export const KeyboardMusic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h4" />
      <path d="M14 8h.01" />
      <path d="M18 8h.01" />
      <path d="M2 12h20" />
      <path d="M6 12v4" />
      <path d="M10 12v4" />
      <path d="M14 12v4" />
      <path d="M18 12v4" />
      {children}
    </svg>
  );
});

export default KeyboardMusic;
