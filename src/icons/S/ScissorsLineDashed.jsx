import React from 'react';

export const iconData = {
  id: "ScissorsLineDashed",
  name: "ScissorsLineDashed",
  category: "S",
  nodes: [["path",{"d":"M5.42 9.42 8 12"}],["circle",{"cx":"4","cy":"8","r":"2"}],["path",{"d":"m14 6-8.58 8.58"}],["circle",{"cx":"4","cy":"16","r":"2"}],["path",{"d":"M10.8 14.8 14 18"}],["path",{"d":"M16 12h-2"}],["path",{"d":"M22 12h-2"}]]
};

export const ScissorsLineDashed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M5.42 9.42 8 12" />
      <circle cx="4" cy="8" r="2" />
      <path d="m14 6-8.58 8.58" />
      <circle cx="4" cy="16" r="2" />
      <path d="M10.8 14.8 14 18" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
      {children}
    </svg>
  );
});

export default ScissorsLineDashed;
