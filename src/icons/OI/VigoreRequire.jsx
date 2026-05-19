import React from 'react';

export const iconData = {
  "id": "VigoreRequire",
  "name": "VigoreRequire",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 12.00 a 8.31 8.31 0 1 0 16.62 0 a 8.31 8.31 0 1 0 -16.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 12.00 a 5.61 5.61 0 1 1 11.23 0 a 5.61 5.61 0 1 1 -11.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.81 12.00 L 21.81 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.32 16.59 L 19.94 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 14.41 19.43 L 15.03 21.33"
      }
    ],
    [
      "path",
      {
        "d": "M 9.59 19.43 L 8.97 21.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 16.59 L 4.06 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 4.19 12.00 L 2.19 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 7.41 L 4.06 6.23"
      }
    ],
    [
      "path",
      {
        "d": "M 9.59 4.57 L 8.97 2.67"
      }
    ],
    [
      "path",
      {
        "d": "M 14.41 4.57 L 15.03 2.67"
      }
    ],
    [
      "path",
      {
        "d": "M 18.32 7.41 L 19.94 6.23"
      }
    ]
  ]
};

export const VigoreRequire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 12.00 a 8.31 8.31 0 1 0 16.62 0 a 8.31 8.31 0 1 0 -16.62 0" />
      <path d="M 6.39 12.00 a 5.61 5.61 0 1 1 11.23 0 a 5.61 5.61 0 1 1 -11.23 0" />
      <path d="M 19.81 12.00 L 21.81 12.00" />
      <path d="M 18.32 16.59 L 19.94 17.77" />
      <path d="M 14.41 19.43 L 15.03 21.33" />
      <path d="M 9.59 19.43 L 8.97 21.33" />
      <path d="M 5.68 16.59 L 4.06 17.77" />
      <path d="M 4.19 12.00 L 2.19 12.00" />
      <path d="M 5.68 7.41 L 4.06 6.23" />
      <path d="M 9.59 4.57 L 8.97 2.67" />
      <path d="M 14.41 4.57 L 15.03 2.67" />
      <path d="M 18.32 7.41 L 19.94 6.23" />
      {children}
    </svg>
  );
});

export default VigoreRequire;
