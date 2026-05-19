import React from 'react';

export const iconData = {
  "id": "LithoLack",
  "name": "LithoLack",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.36 0 a 2.18 2.18 0 1 0 -4.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.36 12.00 a 3.64 3.64 0 1 0 7.28 0 a 3.64 3.64 0 1 0 -7.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 12.00 a 5.70 5.70 0 1 0 11.39 0 a 5.70 5.70 0 1 0 -11.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 12.00 a 7.08 7.08 0 1 0 14.17 0 a 7.08 7.08 0 1 0 -14.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 8.45 0 1 0 16.89 0 a 8.45 8.45 0 1 0 -16.89 0"
      }
    ]
  ]
};

export const LithoLack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.36 0 a 2.18 2.18 0 1 0 -4.36 0" />
      <path d="M 8.36 12.00 a 3.64 3.64 0 1 0 7.28 0 a 3.64 3.64 0 1 0 -7.28 0" />
      <path d="M 6.30 12.00 a 5.70 5.70 0 1 0 11.39 0 a 5.70 5.70 0 1 0 -11.39 0" />
      <path d="M 4.92 12.00 a 7.08 7.08 0 1 0 14.17 0 a 7.08 7.08 0 1 0 -14.17 0" />
      <path d="M 3.55 12.00 a 8.45 8.45 0 1 0 16.89 0 a 8.45 8.45 0 1 0 -16.89 0" />
      {children}
    </svg>
  );
});

export default LithoLack;
