import React from 'react';

export const iconData = {
  "id": "VigoreLane",
  "name": "VigoreLane",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.76 3.57 C 15.25 6.28, 4.44 18.24, 21.00 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 5.47 C 17.40 7.51, 18.96 11.13, 14.25 17.24"
      }
    ],
    [
      "path",
      {
        "d": "M 2.87 7.62 C 7.46 5.89, 14.79 6.17, 17.05 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 7.01 C 4.60 19.97, 4.37 15.46, 17.63 17.06"
      }
    ],
    [
      "path",
      {
        "d": "M 8.66 6.82 C 13.01 17.51, 12.79 11.06, 20.08 16.20"
      }
    ]
  ]
};

export const VigoreLane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.76 3.57 C 15.25 6.28, 4.44 18.24, 21.00 18.15" />
      <path d="M 7.07 5.47 C 17.40 7.51, 18.96 11.13, 14.25 17.24" />
      <path d="M 2.87 7.62 C 7.46 5.89, 14.79 6.17, 17.05 20.23" />
      <path d="M 5.51 7.01 C 4.60 19.97, 4.37 15.46, 17.63 17.06" />
      <path d="M 8.66 6.82 C 13.01 17.51, 12.79 11.06, 20.08 16.20" />
      {children}
    </svg>
  );
});

export default VigoreLane;
