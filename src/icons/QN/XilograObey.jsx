import React from 'react';

export const iconData = {
  "id": "XilograObey",
  "name": "XilograObey",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 12.00 a 7.28 7.28 0 1 0 14.56 0 a 7.28 7.28 0 1 0 -14.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 a 4.31 4.31 0 1 1 8.63 0 a 4.31 4.31 0 1 1 -8.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.78 12.00 L 20.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.87 15.39 L 19.60 16.39"
      }
    ],
    [
      "path",
      {
        "d": "M 15.39 17.87 L 16.39 19.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.78 L 12.00 20.78"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 17.87 L 7.61 19.60"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 15.39 L 4.40 16.39"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 12.00 L 3.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 8.61 L 4.40 7.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 6.13 L 7.61 4.40"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.22 L 12.00 3.22"
      }
    ],
    [
      "path",
      {
        "d": "M 15.39 6.13 L 16.39 4.40"
      }
    ],
    [
      "path",
      {
        "d": "M 17.87 8.61 L 19.60 7.61"
      }
    ]
  ]
};

export const XilograObey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 12.00 a 7.28 7.28 0 1 0 14.56 0 a 7.28 7.28 0 1 0 -14.56 0" />
      <path d="M 7.69 12.00 a 4.31 4.31 0 1 1 8.63 0 a 4.31 4.31 0 1 1 -8.63 0" />
      <path d="M 18.78 12.00 L 20.78 12.00" />
      <path d="M 17.87 15.39 L 19.60 16.39" />
      <path d="M 15.39 17.87 L 16.39 19.60" />
      <path d="M 12.00 18.78 L 12.00 20.78" />
      <path d="M 8.61 17.87 L 7.61 19.60" />
      <path d="M 6.13 15.39 L 4.40 16.39" />
      <path d="M 5.22 12.00 L 3.22 12.00" />
      <path d="M 6.13 8.61 L 4.40 7.61" />
      <path d="M 8.61 6.13 L 7.61 4.40" />
      <path d="M 12.00 5.22 L 12.00 3.22" />
      <path d="M 15.39 6.13 L 16.39 4.40" />
      <path d="M 17.87 8.61 L 19.60 7.61" />
      {children}
    </svg>
  );
});

export default XilograObey;
