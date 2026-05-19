import React from 'react';

export const iconData = {
  "id": "VerboMuster",
  "name": "VerboMuster",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.60 3.67 C 10.78 14.20, 14.19 10.69, 19.50 16.41"
      }
    ],
    [
      "path",
      {
        "d": "M 2.47 5.27 C 19.24 9.39, 19.52 8.74, 19.13 15.53"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 5.82 C 12.42 9.02, 6.05 8.27, 17.68 14.72"
      }
    ],
    [
      "path",
      {
        "d": "M 6.31 3.06 C 17.62 17.47, 14.40 14.59, 21.97 15.65"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 7.58 C 11.43 7.38, 5.08 10.56, 17.09 21.21"
      }
    ],
    [
      "path",
      {
        "d": "M 5.49 9.68 C 17.41 4.31, 15.44 11.09, 14.68 15.81"
      }
    ]
  ]
};

export const VerboMuster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.60 3.67 C 10.78 14.20, 14.19 10.69, 19.50 16.41" />
      <path d="M 2.47 5.27 C 19.24 9.39, 19.52 8.74, 19.13 15.53" />
      <path d="M 5.14 5.82 C 12.42 9.02, 6.05 8.27, 17.68 14.72" />
      <path d="M 6.31 3.06 C 17.62 17.47, 14.40 14.59, 21.97 15.65" />
      <path d="M 4.14 7.58 C 11.43 7.38, 5.08 10.56, 17.09 21.21" />
      <path d="M 5.49 9.68 C 17.41 4.31, 15.44 11.09, 14.68 15.81" />
      {children}
    </svg>
  );
});

export default VerboMuster;
