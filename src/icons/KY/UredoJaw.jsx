import React from 'react';

export const iconData = {
  "id": "UredoJaw",
  "name": "UredoJaw",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.94 12.00 a 2.06 2.06 0 1 0 4.12 0 a 2.06 2.06 0 1 0 -4.12 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 7.65 12.00 a 4.35 4.35 0 1 0 8.71 0 a 4.35 4.35 0 1 0 -8.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 12.00 a 6.37 6.37 0 1 0 12.74 0 a 6.37 6.37 0 1 0 -12.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 12.00 a 8.26 8.26 0 1 0 16.51 0 a 8.26 8.26 0 1 0 -16.51 0"
      }
    ]
  ]
};

export const UredoJaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.94 12.00 a 2.06 2.06 0 1 0 4.12 0 a 2.06 2.06 0 1 0 -4.12 0" stroke-dasharray="5 1" />
      <path d="M 7.65 12.00 a 4.35 4.35 0 1 0 8.71 0 a 4.35 4.35 0 1 0 -8.71 0" />
      <path d="M 5.63 12.00 a 6.37 6.37 0 1 0 12.74 0 a 6.37 6.37 0 1 0 -12.74 0" />
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.51 0 a 8.26 8.26 0 1 0 -16.51 0" />
      {children}
    </svg>
  );
});

export default UredoJaw;
