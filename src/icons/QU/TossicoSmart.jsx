import React from 'react';

export const iconData = {
  "id": "TossicoSmart",
  "name": "TossicoSmart",
  "category": "QU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 12.00 a 2.42 2.42 0 1 0 4.85 0 a 2.42 2.42 0 1 0 -4.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.65 12.00 a 4.35 4.35 0 1 0 8.70 0 a 4.35 4.35 0 1 0 -8.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 12.00 a 6.22 6.22 0 1 0 12.44 0 a 6.22 6.22 0 1 0 -12.44 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 12.00 a 8.36 8.36 0 1 0 16.72 0 a 8.36 8.36 0 1 0 -16.72 0"
      }
    ]
  ]
};

export const TossicoSmart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 12.00 a 2.42 2.42 0 1 0 4.85 0 a 2.42 2.42 0 1 0 -4.85 0" />
      <path d="M 7.65 12.00 a 4.35 4.35 0 1 0 8.70 0 a 4.35 4.35 0 1 0 -8.70 0" />
      <path d="M 5.78 12.00 a 6.22 6.22 0 1 0 12.44 0 a 6.22 6.22 0 1 0 -12.44 0" stroke-dasharray="4 3" />
      <path d="M 3.64 12.00 a 8.36 8.36 0 1 0 16.72 0 a 8.36 8.36 0 1 0 -16.72 0" />
      {children}
    </svg>
  );
});

export default TossicoSmart;
