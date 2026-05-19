import React from 'react';

export const iconData = {
  "id": "MiniViolin",
  "name": "MiniViolin",
  "category": "YC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 12.00 a 3.90 3.90 0 1 0 7.80 0 a 3.90 3.90 0 1 0 -7.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.75 12.00 a 5.25 5.25 0 1 0 10.50 0 a 5.25 5.25 0 1 0 -10.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 12.00 a 7.19 7.19 0 1 0 14.37 0 a 7.19 7.19 0 1 0 -14.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.16 12.00 a 8.84 8.84 0 1 0 17.68 0 a 8.84 8.84 0 1 0 -17.68 0",
        "stroke-dasharray": "6 3"
      }
    ]
  ]
};

export const MiniViolin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0" stroke-dasharray="2 3" />
      <path d="M 8.10 12.00 a 3.90 3.90 0 1 0 7.80 0 a 3.90 3.90 0 1 0 -7.80 0" />
      <path d="M 6.75 12.00 a 5.25 5.25 0 1 0 10.50 0 a 5.25 5.25 0 1 0 -10.50 0" />
      <path d="M 4.81 12.00 a 7.19 7.19 0 1 0 14.37 0 a 7.19 7.19 0 1 0 -14.37 0" />
      <path d="M 3.16 12.00 a 8.84 8.84 0 1 0 17.68 0 a 8.84 8.84 0 1 0 -17.68 0" stroke-dasharray="6 3" />
      {children}
    </svg>
  );
});

export default MiniViolin;
