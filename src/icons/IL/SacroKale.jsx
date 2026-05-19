import React from 'react';

export const iconData = {
  "id": "SacroKale",
  "name": "SacroKale",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 6.51 L 20.74 6.51 L 20.74 17.49 L 3.26 17.49 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 6.51 L 8.16 1.61 L 25.63 1.61 L 20.74 6.51"
      }
    ],
    [
      "path",
      {
        "d": "M 20.74 6.51 L 25.63 1.61 L 25.63 12.59 L 20.74 17.49"
      }
    ]
  ]
};

export const SacroKale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 6.51 L 20.74 6.51 L 20.74 17.49 L 3.26 17.49 Z" />
      <path d="M 3.26 6.51 L 8.16 1.61 L 25.63 1.61 L 20.74 6.51" />
      <path d="M 20.74 6.51 L 25.63 1.61 L 25.63 12.59 L 20.74 17.49" />
      {children}
    </svg>
  );
});

export default SacroKale;
