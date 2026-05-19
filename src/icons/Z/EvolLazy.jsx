import React from 'react';

export const iconData = {
  "id": "EvolLazy",
  "name": "EvolLazy",
  "category": "Z",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.93 12.00 a 2.07 2.07 0 1 0 4.14 0 a 2.07 2.07 0 1 0 -4.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 12.00 a 4.46 4.46 0 1 0 8.92 0 a 4.46 4.46 0 1 0 -8.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 12.00 a 6.45 6.45 0 1 0 12.90 0 a 6.45 6.45 0 1 0 -12.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 12.00 a 8.32 8.32 0 1 0 16.64 0 a 8.32 8.32 0 1 0 -16.64 0"
      }
    ]
  ]
};

export const EvolLazy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.93 12.00 a 2.07 2.07 0 1 0 4.14 0 a 2.07 2.07 0 1 0 -4.14 0" />
      <path d="M 7.54 12.00 a 4.46 4.46 0 1 0 8.92 0 a 4.46 4.46 0 1 0 -8.92 0" />
      <path d="M 5.55 12.00 a 6.45 6.45 0 1 0 12.90 0 a 6.45 6.45 0 1 0 -12.90 0" />
      <path d="M 3.68 12.00 a 8.32 8.32 0 1 0 16.64 0 a 8.32 8.32 0 1 0 -16.64 0" />
      {children}
    </svg>
  );
});

export default EvolLazy;
