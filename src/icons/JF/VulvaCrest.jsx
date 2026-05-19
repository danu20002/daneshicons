import React from 'react';

export const iconData = {
  "id": "VulvaCrest",
  "name": "VulvaCrest",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 8.83 0 1 0 17.66 0 a 8.83 8.83 0 1 0 -17.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 1 12.29 0 a 6.15 6.15 0 1 1 -12.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 12.00 L 22.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 19.21 L 17.16 20.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 19.21 L 6.84 20.94"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 12.00 L 1.67 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 4.79 L 6.84 3.06"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 4.79 L 17.16 3.06"
      }
    ]
  ]
};

export const VulvaCrest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.17 12.00 a 8.83 8.83 0 1 0 17.66 0 a 8.83 8.83 0 1 0 -17.66 0" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 1 12.29 0 a 6.15 6.15 0 1 1 -12.29 0" />
      <path d="M 20.33 12.00 L 22.33 12.00" />
      <path d="M 16.16 19.21 L 17.16 20.94" />
      <path d="M 7.84 19.21 L 6.84 20.94" />
      <path d="M 3.67 12.00 L 1.67 12.00" />
      <path d="M 7.84 4.79 L 6.84 3.06" />
      <path d="M 16.16 4.79 L 17.16 3.06" />
      {children}
    </svg>
  );
});

export default VulvaCrest;
