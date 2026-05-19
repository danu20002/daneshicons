import React from 'react';

export const iconData = {
  "id": "VirgolaLop",
  "name": "VirgolaLop",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 12.00 a 6.41 6.41 0 1 1 12.83 0 a 6.41 6.41 0 1 1 -12.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.55 12.00 L 21.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.34 17.34 L 18.76 18.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.55 L 12.00 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 17.34 L 5.24 18.76"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 12.00 L 2.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 6.66 L 5.24 5.24"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.45 L 12.00 2.45"
      }
    ],
    [
      "path",
      {
        "d": "M 17.34 6.66 L 18.76 5.24"
      }
    ]
  ]
};

export const VirgolaLop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0" />
      <path d="M 5.59 12.00 a 6.41 6.41 0 1 1 12.83 0 a 6.41 6.41 0 1 1 -12.83 0" />
      <path d="M 19.55 12.00 L 21.55 12.00" />
      <path d="M 17.34 17.34 L 18.76 18.76" />
      <path d="M 12.00 19.55 L 12.00 21.55" />
      <path d="M 6.66 17.34 L 5.24 18.76" />
      <path d="M 4.45 12.00 L 2.45 12.00" />
      <path d="M 6.66 6.66 L 5.24 5.24" />
      <path d="M 12.00 4.45 L 12.00 2.45" />
      <path d="M 17.34 6.66 L 18.76 5.24" />
      {children}
    </svg>
  );
});

export default VirgolaLop;
