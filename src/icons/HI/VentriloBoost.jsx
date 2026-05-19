import React from 'react';

export const iconData = {
  "id": "VentriloBoost",
  "name": "VentriloBoost",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.52 7.21 C 7.28 7.14, 14.79 5.74, 19.16 19.18"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 9.25 C 18.64 14.62, 4.71 11.88, 18.31 16.29"
      }
    ],
    [
      "path",
      {
        "d": "M 9.99 7.69 C 8.61 5.77, 10.80 6.41, 20.00 15.30"
      }
    ]
  ]
};

export const VentriloBoost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.52 7.21 C 7.28 7.14, 14.79 5.74, 19.16 19.18" />
      <path d="M 8.61 9.25 C 18.64 14.62, 4.71 11.88, 18.31 16.29" />
      <path d="M 9.99 7.69 C 8.61 5.77, 10.80 6.41, 20.00 15.30" />
      {children}
    </svg>
  );
});

export default VentriloBoost;
