import React from 'react';

export const iconData = {
  "id": "SorboBrace",
  "name": "SorboBrace",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.20 12.01 C 7.29 20.39, 7.65 9.92, 12.20 10.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.99 6.24 A 6.88 2.72 93 0 1 11.81 5.43"
      }
    ],
    [
      "path",
      {
        "d": "M 15.67 14.24 L 11.74 10.95 L 19.13 7.08 L 3.38 5.56 L 14.18 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 14.51 A 5.99 5.01 148 0 0 4.59 3.19"
      }
    ],
    [
      "path",
      {
        "d": "M 20.32 16.58 L 12.06 11.15"
      }
    ]
  ]
};

export const SorboBrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.20 12.01 C 7.29 20.39, 7.65 9.92, 12.20 10.67" />
      <path d="M 12.99 6.24 A 6.88 2.72 93 0 1 11.81 5.43" />
      <path d="M 15.67 14.24 L 11.74 10.95 L 19.13 7.08 L 3.38 5.56 L 14.18 16.96" />
      <path d="M 8.06 14.51 A 5.99 5.01 148 0 0 4.59 3.19" />
      <path d="M 20.32 16.58 L 12.06 11.15" />
      {children}
    </svg>
  );
});

export default SorboBrace;
