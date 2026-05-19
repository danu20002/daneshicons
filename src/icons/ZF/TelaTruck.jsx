import React from 'react';

export const iconData = {
  "id": "TelaTruck",
  "name": "TelaTruck",
  "category": "ZF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 12.00 a 8.92 8.92 0 1 0 17.85 0 a 8.92 8.92 0 1 0 -17.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 9.03 a 8.41 2.523743369044702 0 1 0 16.82 0 a 8.41 2.523743369044702 0 1 0 -16.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 14.97 a 8.41 2.523743369044702 0 1 0 16.82 0 a 8.41 2.523743369044702 0 1 0 -16.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.08 A 2 2 0 0 0 12.00 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.08 A 2 2 0 0 1 12.00 20.92"
      }
    ]
  ]
};

export const TelaTruck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 12.00 a 8.92 8.92 0 1 0 17.85 0 a 8.92 8.92 0 1 0 -17.85 0" />
      <path d="M 3.59 9.03 a 8.41 2.523743369044702 0 1 0 16.82 0 a 8.41 2.523743369044702 0 1 0 -16.82 0" />
      <path d="M 3.59 14.97 a 8.41 2.523743369044702 0 1 0 16.82 0 a 8.41 2.523743369044702 0 1 0 -16.82 0" />
      <path d="M 12.00 3.08 A 2 2 0 0 0 12.00 20.92" />
      <path d="M 12.00 3.08 A 2 2 0 0 1 12.00 20.92" />
      {children}
    </svg>
  );
});

export default TelaTruck;
