import React from 'react';

export const iconData = {
  id: "TextAlignStart",
  name: "TextAlignStart",
  category: "T",
  nodes: [["path",{"d":"M21 5H3"}],["path",{"d":"M15 12H3"}],["path",{"d":"M17 19H3"}]]
};

export const TextAlignStart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M21 5H3" />
      <path d="M15 12H3" />
      <path d="M17 19H3" />
      {children}
    </svg>
  );
});

export default TextAlignStart;
