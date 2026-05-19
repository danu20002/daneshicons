import React from 'react';

export const iconData = {
  "id": "TriangCrate",
  "name": "TriangCrate",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 12.00 a 8.27 8.27 0 1 0 16.55 0 a 8.27 8.27 0 1 0 -16.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.11 12.00 a 5.89 5.89 0 1 1 11.79 0 a 5.89 5.89 0 1 1 -11.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 12.00 L 21.77 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 18.08 L 18.09 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 10.27 19.58 L 9.82 21.53"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 15.37 L 3.19 16.24"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 8.63 L 3.19 7.76"
      }
    ],
    [
      "path",
      {
        "d": "M 10.27 4.42 L 9.82 2.47"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 5.92 L 18.09 4.36"
      }
    ]
  ]
};

export const TriangCrate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 12.00 a 8.27 8.27 0 1 0 16.55 0 a 8.27 8.27 0 1 0 -16.55 0" />
      <path d="M 6.11 12.00 a 5.89 5.89 0 1 1 11.79 0 a 5.89 5.89 0 1 1 -11.79 0" />
      <path d="M 19.77 12.00 L 21.77 12.00" />
      <path d="M 16.85 18.08 L 18.09 19.64" />
      <path d="M 10.27 19.58 L 9.82 21.53" />
      <path d="M 5.00 15.37 L 3.19 16.24" />
      <path d="M 5.00 8.63 L 3.19 7.76" />
      <path d="M 10.27 4.42 L 9.82 2.47" />
      <path d="M 16.85 5.92 L 18.09 4.36" />
      {children}
    </svg>
  );
});

export default TriangCrate;
