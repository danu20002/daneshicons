import React from 'react';

export const iconData = {
  id: "ZodiacCapricorn",
  name: "ZodiacCapricorn",
  category: "Z",
  nodes: [["path",{"d":"M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0"}],["path",{"d":"M7 19V6a3 3 0 0 0-3-3h0"}],["circle",{"cx":"17","cy":"17","r":"3"}]]
};

export const ZodiacCapricorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" />
      <path d="M7 19V6a3 3 0 0 0-3-3h0" />
      <circle cx="17" cy="17" r="3" />
      {children}
    </svg>
  );
});

export default ZodiacCapricorn;
