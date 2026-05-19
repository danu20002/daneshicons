import React from 'react';

export const iconData = {
  "id": "SpumosoHike",
  "name": "SpumosoHike",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.44 8.71 C 16.76 6.67, 19.29 7.96, 15.69 15.81"
      }
    ],
    [
      "path",
      {
        "d": "M 9.42 7.68 C 14.26 7.15, 17.87 13.46, 18.16 21.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 8.14 C 15.63 8.76, 7.78 5.62, 21.97 21.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.34 5.00 C 17.55 16.05, 11.01 10.51, 18.19 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 6.89 4.29 C 13.12 19.15, 10.51 5.97, 18.76 14.63"
      }
    ],
    [
      "path",
      {
        "d": "M 2.35 4.48 C 19.05 15.66, 16.33 4.92, 16.79 17.28"
      }
    ]
  ]
};

export const SpumosoHike = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.44 8.71 C 16.76 6.67, 19.29 7.96, 15.69 15.81" />
      <path d="M 9.42 7.68 C 14.26 7.15, 17.87 13.46, 18.16 21.45" />
      <path d="M 5.96 8.14 C 15.63 8.76, 7.78 5.62, 21.97 21.38" />
      <path d="M 7.34 5.00 C 17.55 16.05, 11.01 10.51, 18.19 19.84" />
      <path d="M 6.89 4.29 C 13.12 19.15, 10.51 5.97, 18.76 14.63" />
      <path d="M 2.35 4.48 C 19.05 15.66, 16.33 4.92, 16.79 17.28" />
      {children}
    </svg>
  );
});

export default SpumosoHike;
