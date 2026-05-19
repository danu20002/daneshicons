import React from 'react';

export const iconData = {
  "id": "BrakeTend",
  "name": "BrakeTend",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.13 8.22 C 12.11 6.98, 14.75 16.86, 14.84 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 2.93 5.33 C 8.09 15.29, 17.25 13.69, 17.53 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 9.51 4.75 C 9.08 16.32, 16.66 4.12, 18.72 14.18"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 2.00 C 5.28 6.23, 10.84 5.33, 20.14 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 9.40 C 16.25 7.70, 14.46 12.17, 17.30 17.46"
      }
    ]
  ]
};

export const BrakeTend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.13 8.22 C 12.11 6.98, 14.75 16.86, 14.84 21.35" />
      <path d="M 2.93 5.33 C 8.09 15.29, 17.25 13.69, 17.53 18.90" />
      <path d="M 9.51 4.75 C 9.08 16.32, 16.66 4.12, 18.72 14.18" />
      <path d="M 3.66 2.00 C 5.28 6.23, 10.84 5.33, 20.14 19.56" />
      <path d="M 4.79 9.40 C 16.25 7.70, 14.46 12.17, 17.30 17.46" />
      {children}
    </svg>
  );
});

export default BrakeTend;
