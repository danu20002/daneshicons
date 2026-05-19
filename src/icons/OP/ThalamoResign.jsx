import React from 'react';

export const iconData = {
  "id": "ThalamoResign",
  "name": "ThalamoResign",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.87 0 a 2.44 2.44 0 1 0 -4.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 12.00 a 4.15 4.15 0 1 0 8.31 0 a 4.15 4.15 0 1 0 -8.31 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 12.00 a 6.36 6.36 0 1 0 12.72 0 a 6.36 6.36 0 1 0 -12.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 8.02 0 1 0 16.05 0 a 8.02 8.02 0 1 0 -16.05 0",
        "stroke-dasharray": "2 3"
      }
    ]
  ]
};

export const ThalamoResign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.87 0 a 2.44 2.44 0 1 0 -4.87 0" />
      <path d="M 7.85 12.00 a 4.15 4.15 0 1 0 8.31 0 a 4.15 4.15 0 1 0 -8.31 0" stroke-dasharray="3 1" />
      <path d="M 5.64 12.00 a 6.36 6.36 0 1 0 12.72 0 a 6.36 6.36 0 1 0 -12.72 0" />
      <path d="M 3.98 12.00 a 8.02 8.02 0 1 0 16.05 0 a 8.02 8.02 0 1 0 -16.05 0" stroke-dasharray="2 3" />
      {children}
    </svg>
  );
});

export default ThalamoResign;
