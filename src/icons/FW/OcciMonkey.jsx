import React from 'react';

export const iconData = {
  "id": "OcciMonkey",
  "name": "OcciMonkey",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.40 3.35 C 7.19 16.87, 7.72 12.65, 17.87 21.57"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 3.74 C 17.89 5.12, 8.26 20.00, 19.13 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 8.59 7.87 C 12.09 14.57, 14.31 12.00, 14.96 18.82"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 4.38 C 10.43 15.25, 17.82 18.17, 21.31 15.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 2.69 C 14.40 17.47, 5.54 9.42, 20.05 15.04"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 9.84 C 8.69 6.34, 4.90 13.34, 20.18 20.22"
      }
    ]
  ]
};

export const OcciMonkey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.40 3.35 C 7.19 16.87, 7.72 12.65, 17.87 21.57" />
      <path d="M 9.14 3.74 C 17.89 5.12, 8.26 20.00, 19.13 16.86" />
      <path d="M 8.59 7.87 C 12.09 14.57, 14.31 12.00, 14.96 18.82" />
      <path d="M 7.30 4.38 C 10.43 15.25, 17.82 18.17, 21.31 15.95" />
      <path d="M 7.43 2.69 C 14.40 17.47, 5.54 9.42, 20.05 15.04" />
      <path d="M 4.97 9.84 C 8.69 6.34, 4.90 13.34, 20.18 20.22" />
      {children}
    </svg>
  );
});

export default OcciMonkey;
