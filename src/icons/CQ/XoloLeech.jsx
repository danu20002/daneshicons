import React from 'react';

export const iconData = {
  "id": "XoloLeech",
  "name": "XoloLeech",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.78 12.00 a 8.22 8.22 0 1 0 16.45 0 a 8.22 8.22 0 1 0 -16.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 12.00 a 6.01 6.01 0 1 1 12.03 0 a 6.01 6.01 0 1 1 -12.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.72 12.00 L 21.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 15.86 L 20.42 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 15.86 18.69 L 16.86 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.72 L 12.00 21.72"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 18.69 L 7.14 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 15.86 L 3.58 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 12.00 L 2.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 8.14 L 3.58 7.14"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 5.31 L 7.14 3.58"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.28 L 12.00 2.28"
      }
    ],
    [
      "path",
      {
        "d": "M 15.86 5.31 L 16.86 3.58"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 8.14 L 20.42 7.14"
      }
    ]
  ]
};

export const XoloLeech = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.78 12.00 a 8.22 8.22 0 1 0 16.45 0 a 8.22 8.22 0 1 0 -16.45 0" />
      <path d="M 5.99 12.00 a 6.01 6.01 0 1 1 12.03 0 a 6.01 6.01 0 1 1 -12.03 0" />
      <path d="M 19.72 12.00 L 21.72 12.00" />
      <path d="M 18.69 15.86 L 20.42 16.86" />
      <path d="M 15.86 18.69 L 16.86 20.42" />
      <path d="M 12.00 19.72 L 12.00 21.72" />
      <path d="M 8.14 18.69 L 7.14 20.42" />
      <path d="M 5.31 15.86 L 3.58 16.86" />
      <path d="M 4.28 12.00 L 2.28 12.00" />
      <path d="M 5.31 8.14 L 3.58 7.14" />
      <path d="M 8.14 5.31 L 7.14 3.58" />
      <path d="M 12.00 4.28 L 12.00 2.28" />
      <path d="M 15.86 5.31 L 16.86 3.58" />
      <path d="M 18.69 8.14 L 20.42 7.14" />
      {children}
    </svg>
  );
});

export default XoloLeech;
