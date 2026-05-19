import React from 'react';

export const iconData = {
  "id": "ToroQuarter",
  "name": "ToroQuarter",
  "category": "EJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 12.00 a 2.42 2.42 0 1 0 4.84 0 a 2.42 2.42 0 1 0 -4.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 12.00 a 3.96 3.96 0 1 0 7.93 0 a 3.96 3.96 0 1 0 -7.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 12.00 a 5.32 5.32 0 1 0 10.65 0 a 5.32 5.32 0 1 0 -10.65 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 12.00 a 6.82 6.82 0 1 0 13.64 0 a 6.82 6.82 0 1 0 -13.64 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0"
      }
    ]
  ]
};

export const ToroQuarter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 12.00 a 2.42 2.42 0 1 0 4.84 0 a 2.42 2.42 0 1 0 -4.84 0" />
      <path d="M 8.04 12.00 a 3.96 3.96 0 1 0 7.93 0 a 3.96 3.96 0 1 0 -7.93 0" />
      <path d="M 6.68 12.00 a 5.32 5.32 0 1 0 10.65 0 a 5.32 5.32 0 1 0 -10.65 0" stroke-dasharray="6 3" />
      <path d="M 5.18 12.00 a 6.82 6.82 0 1 0 13.64 0 a 6.82 6.82 0 1 0 -13.64 0" stroke-dasharray="4 3" />
      <path d="M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0" />
      {children}
    </svg>
  );
});

export default ToroQuarter;
