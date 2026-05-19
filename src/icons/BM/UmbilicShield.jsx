import React from 'react';

export const iconData = {
  "id": "UmbilicShield",
  "name": "UmbilicShield",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 4.14 C 17.29 14.46, 7.38 7.38, 19.69 15.81"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 2.64 C 5.31 17.58, 16.87 9.65, 21.21 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 8.37 2.46 C 13.90 19.24, 13.26 12.13, 18.72 17.16"
      }
    ],
    [
      "path",
      {
        "d": "M 9.03 9.93 C 10.89 14.89, 15.69 9.36, 19.12 16.81"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 7.95 C 11.40 11.67, 7.25 5.53, 21.56 16.66"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 9.80 C 19.81 7.98, 18.68 13.07, 20.15 15.18"
      }
    ]
  ]
};

export const UmbilicShield = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 4.14 C 17.29 14.46, 7.38 7.38, 19.69 15.81" />
      <path d="M 2.97 2.64 C 5.31 17.58, 16.87 9.65, 21.21 18.26" />
      <path d="M 8.37 2.46 C 13.90 19.24, 13.26 12.13, 18.72 17.16" />
      <path d="M 9.03 9.93 C 10.89 14.89, 15.69 9.36, 19.12 16.81" />
      <path d="M 3.31 7.95 C 11.40 11.67, 7.25 5.53, 21.56 16.66" />
      <path d="M 4.90 9.80 C 19.81 7.98, 18.68 13.07, 20.15 15.18" />
      {children}
    </svg>
  );
});

export default UmbilicShield;
