import React from 'react';

export const iconData = {
  id: "RemoveFormatting",
  name: "RemoveFormatting",
  category: "R",
  nodes: [["path",{"d":"M4 7V4h16v3"}],["path",{"d":"M5 20h6"}],["path",{"d":"M13 4 8 20"}],["path",{"d":"m15 15 5 5"}],["path",{"d":"m20 15-5 5"}]]
};

export const RemoveFormatting = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M4 7V4h16v3" />
      <path d="M5 20h6" />
      <path d="M13 4 8 20" />
      <path d="m15 15 5 5" />
      <path d="m20 15-5 5" />
      {children}
    </svg>
  );
});

export default RemoveFormatting;
