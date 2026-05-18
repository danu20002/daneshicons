import React from 'react';

export const iconData = {
  id: "ZodiacPisces",
  name: "ZodiacPisces",
  category: "Z",
  nodes: [["path",{"d":"M19 21a15 15 0 0 1 0-18"}],["path",{"d":"M20 12H4"}],["path",{"d":"M5 3a15 15 0 0 1 0 18"}]]
};

export const ZodiacPisces = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M19 21a15 15 0 0 1 0-18" />
      <path d="M20 12H4" />
      <path d="M5 3a15 15 0 0 1 0 18" />
      {children}
    </svg>
  );
});

export default ZodiacPisces;
