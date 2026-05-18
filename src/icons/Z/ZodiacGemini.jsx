import React from 'react';

export const iconData = {
  id: "ZodiacGemini",
  name: "ZodiacGemini",
  category: "Z",
  nodes: [["path",{"d":"M16 4.525v14.948"}],["path",{"d":"M20 3A17 17 0 0 1 4 3"}],["path",{"d":"M4 21a17 17 0 0 1 16 0"}],["path",{"d":"M8 4.525v14.948"}]]
};

export const ZodiacGemini = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M16 4.525v14.948" />
      <path d="M20 3A17 17 0 0 1 4 3" />
      <path d="M4 21a17 17 0 0 1 16 0" />
      <path d="M8 4.525v14.948" />
      {children}
    </svg>
  );
});

export default ZodiacGemini;
