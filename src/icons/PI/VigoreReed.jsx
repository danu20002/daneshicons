import React from 'react';

export const iconData = {
  "id": "VigoreReed",
  "name": "VigoreReed",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 12.00 a 4.29 4.29 0 1 0 8.59 0 a 4.29 4.29 0 1 0 -8.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 12.00 a 6.26 6.26 0 1 0 12.52 0 a 6.26 6.26 0 1 0 -12.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 12.00 a 8.49 8.49 0 1 0 16.98 0 a 8.49 8.49 0 1 0 -16.98 0"
      }
    ]
  ]
};

export const VigoreReed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0" />
      <path d="M 7.71 12.00 a 4.29 4.29 0 1 0 8.59 0 a 4.29 4.29 0 1 0 -8.59 0" />
      <path d="M 5.74 12.00 a 6.26 6.26 0 1 0 12.52 0 a 6.26 6.26 0 1 0 -12.52 0" />
      <path d="M 3.51 12.00 a 8.49 8.49 0 1 0 16.98 0 a 8.49 8.49 0 1 0 -16.98 0" />
      {children}
    </svg>
  );
});

export default VigoreReed;
