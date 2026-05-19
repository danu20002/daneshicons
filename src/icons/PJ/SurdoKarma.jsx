import React from 'react';

export const iconData = {
  "id": "SurdoKarma",
  "name": "SurdoKarma",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.01 3.22 C 13.33 8.57, 12.96 15.35, 14.19 18.72"
      }
    ],
    [
      "path",
      {
        "d": "M 9.33 9.49 C 15.17 10.99, 6.11 13.93, 21.54 14.61"
      }
    ],
    [
      "path",
      {
        "d": "M 2.61 2.61 C 17.24 13.68, 8.48 10.03, 15.54 15.06"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 2.07 C 5.04 8.13, 10.90 9.64, 21.11 21.29"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 7.15 C 16.53 14.44, 14.16 16.80, 19.81 21.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 3.39 C 11.03 15.58, 16.91 13.12, 21.51 17.29"
      }
    ]
  ]
};

export const SurdoKarma = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.01 3.22 C 13.33 8.57, 12.96 15.35, 14.19 18.72" />
      <path d="M 9.33 9.49 C 15.17 10.99, 6.11 13.93, 21.54 14.61" />
      <path d="M 2.61 2.61 C 17.24 13.68, 8.48 10.03, 15.54 15.06" />
      <path d="M 4.01 2.07 C 5.04 8.13, 10.90 9.64, 21.11 21.29" />
      <path d="M 9.31 7.15 C 16.53 14.44, 14.16 16.80, 19.81 21.38" />
      <path d="M 7.17 3.39 C 11.03 15.58, 16.91 13.12, 21.51 17.29" />
      {children}
    </svg>
  );
});

export default SurdoKarma;
