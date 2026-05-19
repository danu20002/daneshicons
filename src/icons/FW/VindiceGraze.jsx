import React from 'react';

export const iconData = {
  "id": "VindiceGraze",
  "name": "VindiceGraze",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.56 9.75 C 15.51 10.99, 6.54 18.47, 18.77 15.97"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 3.13 C 4.27 12.52, 16.13 9.52, 19.15 19.19"
      }
    ],
    [
      "path",
      {
        "d": "M 8.30 9.47 C 13.85 5.51, 9.75 4.44, 21.93 18.17"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 8.08 C 16.06 7.91, 7.84 9.59, 16.97 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 5.74 C 11.93 11.81, 16.32 7.29, 21.18 16.91"
      }
    ],
    [
      "path",
      {
        "d": "M 2.89 9.56 C 5.09 5.37, 11.68 15.77, 21.76 18.97"
      }
    ]
  ]
};

export const VindiceGraze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.56 9.75 C 15.51 10.99, 6.54 18.47, 18.77 15.97" />
      <path d="M 6.54 3.13 C 4.27 12.52, 16.13 9.52, 19.15 19.19" />
      <path d="M 8.30 9.47 C 13.85 5.51, 9.75 4.44, 21.93 18.17" />
      <path d="M 9.52 8.08 C 16.06 7.91, 7.84 9.59, 16.97 17.14" />
      <path d="M 5.64 5.74 C 11.93 11.81, 16.32 7.29, 21.18 16.91" />
      <path d="M 2.89 9.56 C 5.09 5.37, 11.68 15.77, 21.76 18.97" />
      {children}
    </svg>
  );
});

export default VindiceGraze;
