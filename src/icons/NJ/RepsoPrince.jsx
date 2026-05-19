import React from 'react';

export const iconData = {
  "id": "RepsoPrince",
  "name": "RepsoPrince",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 7.39 L 5.32 17.57"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 12.22 L 20.16 10.06 L 17.29 9.15 L 19.19 15.24 L 13.86 10.59"
      }
    ],
    [
      "path",
      {
        "d": "M 12.94 20.16 L 21.13 12.14"
      }
    ],
    [
      "path",
      {
        "d": "M 10.80 8.05 L 15.56 20.10 L 15.83 12.39 L 12.20 13.26"
      }
    ]
  ]
};

export const RepsoPrince = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 7.39 L 5.32 17.57" />
      <path d="M 5.76 12.22 L 20.16 10.06 L 17.29 9.15 L 19.19 15.24 L 13.86 10.59" />
      <path d="M 12.94 20.16 L 21.13 12.14" />
      <path d="M 10.80 8.05 L 15.56 20.10 L 15.83 12.39 L 12.20 13.26" />
      {children}
    </svg>
  );
});

export default RepsoPrince;
