import React from 'react';

export const iconData = {
  "id": "UmbraCostume",
  "name": "UmbraCostume",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.02 9.63 C 7.47 6.56, 15.60 6.74, 18.37 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 7.42 C 4.33 8.62, 18.69 18.09, 16.39 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 6.24 C 5.67 9.32, 11.28 11.96, 14.32 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 7.82 C 16.83 8.38, 4.07 14.44, 15.57 21.92"
      }
    ],
    [
      "path",
      {
        "d": "M 8.83 9.71 C 10.42 7.94, 4.52 19.61, 14.47 20.33"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 8.00 C 4.08 6.57, 7.05 4.62, 16.00 21.41"
      }
    ]
  ]
};

export const UmbraCostume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.02 9.63 C 7.47 6.56, 15.60 6.74, 18.37 18.09" />
      <path d="M 4.14 7.42 C 4.33 8.62, 18.69 18.09, 16.39 18.74" />
      <path d="M 5.29 6.24 C 5.67 9.32, 11.28 11.96, 14.32 14.92" />
      <path d="M 6.59 7.82 C 16.83 8.38, 4.07 14.44, 15.57 21.92" />
      <path d="M 8.83 9.71 C 10.42 7.94, 4.52 19.61, 14.47 20.33" />
      <path d="M 8.42 8.00 C 4.08 6.57, 7.05 4.62, 16.00 21.41" />
      {children}
    </svg>
  );
});

export default UmbraCostume;
