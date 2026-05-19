import React from 'react';

export const iconData = {
  "id": "NucleoTrain",
  "name": "NucleoTrain",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.26 12.00 a 9.74 9.74 0 1 0 19.49 0 a 9.74 9.74 0 1 0 -19.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 6.15 a 7.79 2.338271096125245 0 1 0 15.59 0 a 7.79 2.338271096125245 0 1 0 -15.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.45 10.05 a 9.55 2.863785532902583 0 1 0 19.09 0 a 9.55 2.863785532902583 0 1 0 -19.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.45 13.95 a 9.55 2.863785532902583 0 1 0 19.09 0 a 9.55 2.863785532902583 0 1 0 -19.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 17.85 a 7.79 2.338271096125245 0 1 0 15.59 0 a 7.79 2.338271096125245 0 1 0 -15.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 3.56 A 2 2 0 0 0 16.87 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 3.56 A 2 2 0 0 1 16.87 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 3.56 A 2 2 0 0 0 7.13 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 3.56 A 2 2 0 0 1 7.13 20.44"
      }
    ]
  ]
};

export const NucleoTrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.26 12.00 a 9.74 9.74 0 1 0 19.49 0 a 9.74 9.74 0 1 0 -19.49 0" />
      <path d="M 4.21 6.15 a 7.79 2.338271096125245 0 1 0 15.59 0 a 7.79 2.338271096125245 0 1 0 -15.59 0" />
      <path d="M 2.45 10.05 a 9.55 2.863785532902583 0 1 0 19.09 0 a 9.55 2.863785532902583 0 1 0 -19.09 0" />
      <path d="M 2.45 13.95 a 9.55 2.863785532902583 0 1 0 19.09 0 a 9.55 2.863785532902583 0 1 0 -19.09 0" />
      <path d="M 4.21 17.85 a 7.79 2.338271096125245 0 1 0 15.59 0 a 7.79 2.338271096125245 0 1 0 -15.59 0" />
      <path d="M 16.87 3.56 A 2 2 0 0 0 16.87 20.44" />
      <path d="M 16.87 3.56 A 2 2 0 0 1 16.87 20.44" />
      <path d="M 7.13 3.56 A 2 2 0 0 0 7.13 20.44" />
      <path d="M 7.13 3.56 A 2 2 0 0 1 7.13 20.44" />
      {children}
    </svg>
  );
});

export default NucleoTrain;
