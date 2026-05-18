import React from 'react';

export const iconData = {
  id: "TextSelection",
  name: "TextSelection",
  category: "T",
  nodes: [["path",{"d":"M14 21h1"}],["path",{"d":"M14 3h1"}],["path",{"d":"M19 3a2 2 0 0 1 2 2"}],["path",{"d":"M21 14v1"}],["path",{"d":"M21 19a2 2 0 0 1-2 2"}],["path",{"d":"M21 9v1"}],["path",{"d":"M3 14v1"}],["path",{"d":"M3 9v1"}],["path",{"d":"M5 21a2 2 0 0 1-2-2"}],["path",{"d":"M5 3a2 2 0 0 0-2 2"}],["path",{"d":"M7 12h10"}],["path",{"d":"M7 16h6"}],["path",{"d":"M7 8h8"}],["path",{"d":"M9 21h1"}],["path",{"d":"M9 3h1"}]]
};

export const TextSelection = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M14 21h1" />
      <path d="M14 3h1" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 14v1" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M3 9v1" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
      <path d="M7 8h8" />
      <path d="M9 21h1" />
      <path d="M9 3h1" />
      {children}
    </svg>
  );
});

export default TextSelection;
