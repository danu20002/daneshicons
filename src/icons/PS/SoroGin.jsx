import React from 'react';

export const iconData = {
  "id": "SoroGin",
  "name": "SoroGin",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 8.56 0 1 0 17.11 0 a 8.56 8.56 0 1 0 -17.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 7.72 a 7.41 2.2229502351690655 0 1 0 14.82 0 a 7.41 2.2229502351690655 0 1 0 -14.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 2.566841833340004 0 1 0 17.11 0 a 8.56 2.566841833340004 0 1 0 -17.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 16.28 a 7.41 2.2229502351690655 0 1 0 14.82 0 a 7.41 2.2229502351690655 0 1 0 -14.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.28 4.59 A 2 2 0 0 0 16.28 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 16.28 4.59 A 2 2 0 0 1 16.28 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 4.59 A 2 2 0 0 0 7.72 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 4.59 A 2 2 0 0 1 7.72 19.41"
      }
    ]
  ]
};

export const SoroGin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 12.00 a 8.56 8.56 0 1 0 17.11 0 a 8.56 8.56 0 1 0 -17.11 0" />
      <path d="M 4.59 7.72 a 7.41 2.2229502351690655 0 1 0 14.82 0 a 7.41 2.2229502351690655 0 1 0 -14.82 0" />
      <path d="M 3.44 12.00 a 8.56 2.566841833340004 0 1 0 17.11 0 a 8.56 2.566841833340004 0 1 0 -17.11 0" />
      <path d="M 4.59 16.28 a 7.41 2.2229502351690655 0 1 0 14.82 0 a 7.41 2.2229502351690655 0 1 0 -14.82 0" />
      <path d="M 16.28 4.59 A 2 2 0 0 0 16.28 19.41" />
      <path d="M 16.28 4.59 A 2 2 0 0 1 16.28 19.41" />
      <path d="M 7.72 4.59 A 2 2 0 0 0 7.72 19.41" />
      <path d="M 7.72 4.59 A 2 2 0 0 1 7.72 19.41" />
      {children}
    </svg>
  );
});

export default SoroGin;
