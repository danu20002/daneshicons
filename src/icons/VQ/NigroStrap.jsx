import React from 'react';

export const iconData = {
  "id": "NigroStrap",
  "name": "NigroStrap",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 8.15 0 1 0 16.31 0 a 8.15 8.15 0 1 0 -16.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 12.00 a 5.73 5.73 0 1 1 11.46 0 a 5.73 5.73 0 1 1 -11.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.65 12.00 L 21.65 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 18.63 L 16.83 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 18.63 L 7.17 20.36"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 12.00 L 2.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 5.37 L 7.17 3.64"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 5.37 L 16.83 3.64"
      }
    ]
  ]
};

export const NigroStrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 12.00 a 8.15 8.15 0 1 0 16.31 0 a 8.15 8.15 0 1 0 -16.31 0" />
      <path d="M 6.27 12.00 a 5.73 5.73 0 1 1 11.46 0 a 5.73 5.73 0 1 1 -11.46 0" />
      <path d="M 19.65 12.00 L 21.65 12.00" />
      <path d="M 15.83 18.63 L 16.83 20.36" />
      <path d="M 8.17 18.63 L 7.17 20.36" />
      <path d="M 4.35 12.00 L 2.35 12.00" />
      <path d="M 8.17 5.37 L 7.17 3.64" />
      <path d="M 15.83 5.37 L 16.83 3.64" />
      {children}
    </svg>
  );
});

export default NigroStrap;
