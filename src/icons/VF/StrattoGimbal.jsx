import React from 'react';

export const iconData = {
  "id": "StrattoGimbal",
  "name": "StrattoGimbal",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.22 4.82 C 19.21 15.44, 17.12 14.87, 21.71 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 3.38 C 7.61 7.81, 6.76 12.57, 17.57 16.58"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 4.85 C 14.79 10.67, 13.14 9.78, 15.99 15.29"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 9.24 C 14.09 15.34, 10.58 13.56, 15.07 17.18"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 6.32 C 12.36 6.67, 15.56 14.52, 14.94 16.94"
      }
    ]
  ]
};

export const StrattoGimbal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.22 4.82 C 19.21 15.44, 17.12 14.87, 21.71 19.38" />
      <path d="M 3.89 3.38 C 7.61 7.81, 6.76 12.57, 17.57 16.58" />
      <path d="M 3.75 4.85 C 14.79 10.67, 13.14 9.78, 15.99 15.29" />
      <path d="M 3.02 9.24 C 14.09 15.34, 10.58 13.56, 15.07 17.18" />
      <path d="M 7.43 6.32 C 12.36 6.67, 15.56 14.52, 14.94 16.94" />
      {children}
    </svg>
  );
});

export default StrattoGimbal;
