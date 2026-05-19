import React from 'react';

export const iconData = {
  "id": "VetroUrn",
  "name": "VetroUrn",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.22 12.00 a 9.78 9.78 0 1 0 19.57 0 a 9.78 9.78 0 1 0 -19.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 7.11 a 8.47 2.5417011316134603 0 1 0 16.94 0 a 8.47 2.5417011316134603 0 1 0 -16.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.22 12.00 a 9.78 2.934903665073216 0 1 0 19.57 0 a 9.78 2.934903665073216 0 1 0 -19.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 16.89 a 8.47 2.5417011316134603 0 1 0 16.94 0 a 8.47 2.5417011316134603 0 1 0 -16.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 5.08 A 2 2 0 0 0 18.92 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 5.08 A 2 2 0 0 1 18.92 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.22 A 2 2 0 0 0 12.00 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.22 A 2 2 0 0 1 12.00 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 5.08 A 2 2 0 0 0 5.08 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 5.08 A 2 2 0 0 1 5.08 18.92"
      }
    ]
  ]
};

export const VetroUrn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.22 12.00 a 9.78 9.78 0 1 0 19.57 0 a 9.78 9.78 0 1 0 -19.57 0" />
      <path d="M 3.53 7.11 a 8.47 2.5417011316134603 0 1 0 16.94 0 a 8.47 2.5417011316134603 0 1 0 -16.94 0" />
      <path d="M 2.22 12.00 a 9.78 2.934903665073216 0 1 0 19.57 0 a 9.78 2.934903665073216 0 1 0 -19.57 0" />
      <path d="M 3.53 16.89 a 8.47 2.5417011316134603 0 1 0 16.94 0 a 8.47 2.5417011316134603 0 1 0 -16.94 0" />
      <path d="M 18.92 5.08 A 2 2 0 0 0 18.92 18.92" />
      <path d="M 18.92 5.08 A 2 2 0 0 1 18.92 18.92" />
      <path d="M 12.00 2.22 A 2 2 0 0 0 12.00 21.78" />
      <path d="M 12.00 2.22 A 2 2 0 0 1 12.00 21.78" />
      <path d="M 5.08 5.08 A 2 2 0 0 0 5.08 18.92" />
      <path d="M 5.08 5.08 A 2 2 0 0 1 5.08 18.92" />
      {children}
    </svg>
  );
});

export default VetroUrn;
