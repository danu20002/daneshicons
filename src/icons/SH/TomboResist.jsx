import React from 'react';

export const iconData = {
  "id": "TomboResist",
  "name": "TomboResist",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.46 2.72 C 14.62 17.27, 4.69 12.19, 14.84 17.22"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 2.93 C 7.17 16.79, 8.08 11.40, 21.02 16.25"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 6.30 C 9.66 5.60, 16.56 8.00, 15.16 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 7.16 C 15.26 15.37, 12.43 8.97, 18.91 15.71"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 2.58 C 14.52 8.78, 4.32 4.44, 14.22 16.26"
      }
    ],
    [
      "path",
      {
        "d": "M 9.84 7.60 C 10.27 16.40, 8.99 9.29, 15.14 17.65"
      }
    ]
  ]
};

export const TomboResist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.46 2.72 C 14.62 17.27, 4.69 12.19, 14.84 17.22" />
      <path d="M 7.77 2.93 C 7.17 16.79, 8.08 11.40, 21.02 16.25" />
      <path d="M 6.79 6.30 C 9.66 5.60, 16.56 8.00, 15.16 21.95" />
      <path d="M 2.25 7.16 C 15.26 15.37, 12.43 8.97, 18.91 15.71" />
      <path d="M 6.72 2.58 C 14.52 8.78, 4.32 4.44, 14.22 16.26" />
      <path d="M 9.84 7.60 C 10.27 16.40, 8.99 9.29, 15.14 17.65" />
      {children}
    </svg>
  );
});

export default TomboResist;
