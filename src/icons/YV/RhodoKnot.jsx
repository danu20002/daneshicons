import React from 'react';

export const iconData = {
  "id": "RhodoKnot",
  "name": "RhodoKnot",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.65 0 a 2.32 2.32 0 1 0 -4.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 12.00 a 4.43 4.43 0 1 0 8.86 0 a 4.43 4.43 0 1 0 -8.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 12.00 a 6.46 6.46 0 1 0 12.93 0 a 6.46 6.46 0 1 0 -12.93 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 12.00 a 8.39 8.39 0 1 0 16.77 0 a 8.39 8.39 0 1 0 -16.77 0"
      }
    ]
  ]
};

export const RhodoKnot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.65 0 a 2.32 2.32 0 1 0 -4.65 0" />
      <path d="M 7.57 12.00 a 4.43 4.43 0 1 0 8.86 0 a 4.43 4.43 0 1 0 -8.86 0" />
      <path d="M 5.54 12.00 a 6.46 6.46 0 1 0 12.93 0 a 6.46 6.46 0 1 0 -12.93 0" stroke-dasharray="6 2" />
      <path d="M 3.61 12.00 a 8.39 8.39 0 1 0 16.77 0 a 8.39 8.39 0 1 0 -16.77 0" />
      {children}
    </svg>
  );
});

export default RhodoKnot;
