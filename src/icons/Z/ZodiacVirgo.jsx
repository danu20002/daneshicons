import React from 'react';

export const iconData = {
  id: "ZodiacVirgo",
  name: "ZodiacVirgo",
  category: "Z",
  nodes: [["path",{"d":"M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5"}],["path",{"d":"M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5"}],["path",{"d":"M6 19V6a3 3 0 0 0-3-3h0"}],["path",{"d":"M6 5.5a1 1 0 0 1 5 0V19"}]]
};

export const ZodiacVirgo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" />
      <path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" />
      <path d="M6 19V6a3 3 0 0 0-3-3h0" />
      <path d="M6 5.5a1 1 0 0 1 5 0V19" />
      {children}
    </svg>
  );
});

export default ZodiacVirgo;
