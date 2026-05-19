import React from 'react';

export const iconData = {
  "id": "VolenterRoach",
  "name": "VolenterRoach",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 6.27 C 4.41 15.19, 8.80 19.71, 17.15 14.06"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 9.70 C 17.63 10.30, 11.72 14.24, 21.38 17.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 5.34 C 6.29 4.76, 15.96 10.58, 20.40 15.38"
      }
    ],
    [
      "path",
      {
        "d": "M 9.33 3.66 C 15.05 11.31, 13.51 13.14, 20.61 21.69"
      }
    ],
    [
      "path",
      {
        "d": "M 8.93 6.57 C 10.00 6.69, 5.06 13.62, 14.20 16.72"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 3.21 C 6.20 9.59, 5.67 13.77, 21.01 19.19"
      }
    ]
  ]
};

export const VolenterRoach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 6.27 C 4.41 15.19, 8.80 19.71, 17.15 14.06" />
      <path d="M 3.83 9.70 C 17.63 10.30, 11.72 14.24, 21.38 17.63" />
      <path d="M 7.32 5.34 C 6.29 4.76, 15.96 10.58, 20.40 15.38" />
      <path d="M 9.33 3.66 C 15.05 11.31, 13.51 13.14, 20.61 21.69" />
      <path d="M 8.93 6.57 C 10.00 6.69, 5.06 13.62, 14.20 16.72" />
      <path d="M 6.06 3.21 C 6.20 9.59, 5.67 13.77, 21.01 19.19" />
      {children}
    </svg>
  );
});

export default VolenterRoach;
