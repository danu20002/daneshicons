import React from 'react';

export const iconData = {
  "id": "RepsoHelix",
  "name": "RepsoHelix",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.21 12.00 a 8.79 8.79 0 1 0 17.58 0 a 8.79 8.79 0 1 0 -17.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 7.60 a 7.61 2.2843566576766063 0 1 0 15.23 0 a 7.61 2.2843566576766063 0 1 0 -15.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.21 12.00 a 8.79 2.637747862469405 0 1 0 17.58 0 a 8.79 2.637747862469405 0 1 0 -17.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 16.40 a 7.61 2.2843566576766063 0 1 0 15.23 0 a 7.61 2.2843566576766063 0 1 0 -15.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.21 A 2 2 0 0 0 12.00 20.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.21 A 2 2 0 0 1 12.00 20.79"
      }
    ]
  ]
};

export const RepsoHelix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.21 12.00 a 8.79 8.79 0 1 0 17.58 0 a 8.79 8.79 0 1 0 -17.58 0" />
      <path d="M 4.39 7.60 a 7.61 2.2843566576766063 0 1 0 15.23 0 a 7.61 2.2843566576766063 0 1 0 -15.23 0" />
      <path d="M 3.21 12.00 a 8.79 2.637747862469405 0 1 0 17.58 0 a 8.79 2.637747862469405 0 1 0 -17.58 0" />
      <path d="M 4.39 16.40 a 7.61 2.2843566576766063 0 1 0 15.23 0 a 7.61 2.2843566576766063 0 1 0 -15.23 0" />
      <path d="M 12.00 3.21 A 2 2 0 0 0 12.00 20.79" />
      <path d="M 12.00 3.21 A 2 2 0 0 1 12.00 20.79" />
      {children}
    </svg>
  );
});

export default RepsoHelix;
