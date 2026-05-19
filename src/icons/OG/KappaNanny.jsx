import React from 'react';

export const iconData = {
  "id": "KappaNanny",
  "name": "KappaNanny",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.64 12.00 a 9.36 9.36 0 1 0 18.72 0 a 9.36 9.36 0 1 0 -18.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 8.88 a 8.83 2.6479485192259338 0 1 0 17.65 0 a 8.83 2.6479485192259338 0 1 0 -17.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 15.12 a 8.83 2.6479485192259333 0 1 0 17.65 0 a 8.83 2.6479485192259333 0 1 0 -17.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 3.89 A 2 2 0 0 0 16.68 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 3.89 A 2 2 0 0 1 16.68 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 3.89 A 2 2 0 0 0 7.32 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 3.89 A 2 2 0 0 1 7.32 20.11"
      }
    ]
  ]
};

export const KappaNanny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.64 12.00 a 9.36 9.36 0 1 0 18.72 0 a 9.36 9.36 0 1 0 -18.72 0" />
      <path d="M 3.17 8.88 a 8.83 2.6479485192259338 0 1 0 17.65 0 a 8.83 2.6479485192259338 0 1 0 -17.65 0" />
      <path d="M 3.17 15.12 a 8.83 2.6479485192259333 0 1 0 17.65 0 a 8.83 2.6479485192259333 0 1 0 -17.65 0" />
      <path d="M 16.68 3.89 A 2 2 0 0 0 16.68 20.11" />
      <path d="M 16.68 3.89 A 2 2 0 0 1 16.68 20.11" />
      <path d="M 7.32 3.89 A 2 2 0 0 0 7.32 20.11" />
      <path d="M 7.32 3.89 A 2 2 0 0 1 7.32 20.11" />
      {children}
    </svg>
  );
});

export default KappaNanny;
