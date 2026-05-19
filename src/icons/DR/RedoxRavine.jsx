import React from 'react';

export const iconData = {
  "id": "RedoxRavine",
  "name": "RedoxRavine",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 9.58 C 5.47 5.99, 9.97 9.73, 20.91 14.57"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 6.50 C 7.03 9.67, 14.00 11.57, 20.89 15.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 7.04 C 15.37 18.67, 17.87 13.22, 21.30 16.10"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 8.80 C 18.84 14.80, 10.22 8.77, 21.74 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 4.80 4.65 C 4.16 4.41, 10.57 13.21, 17.94 20.76"
      }
    ]
  ]
};

export const RedoxRavine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 9.58 C 5.47 5.99, 9.97 9.73, 20.91 14.57" />
      <path d="M 4.29 6.50 C 7.03 9.67, 14.00 11.57, 20.89 15.56" />
      <path d="M 5.59 7.04 C 15.37 18.67, 17.87 13.22, 21.30 16.10" />
      <path d="M 4.44 8.80 C 18.84 14.80, 10.22 8.77, 21.74 20.43" />
      <path d="M 4.80 4.65 C 4.16 4.41, 10.57 13.21, 17.94 20.76" />
      {children}
    </svg>
  );
});

export default RedoxRavine;
