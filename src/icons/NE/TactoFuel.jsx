import React from 'react';

export const iconData = {
  "id": "TactoFuel",
  "name": "TactoFuel",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.29 2.42 C 4.56 8.37, 4.10 4.85, 18.48 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 2.67 2.89 C 16.57 10.58, 16.02 13.65, 19.52 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 7.63 C 8.75 6.24, 8.58 10.15, 14.75 15.25"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 6.06 C 14.28 9.58, 19.01 18.70, 20.05 15.23"
      }
    ]
  ]
};

export const TactoFuel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.29 2.42 C 4.56 8.37, 4.10 4.85, 18.48 20.72" />
      <path d="M 2.67 2.89 C 16.57 10.58, 16.02 13.65, 19.52 16.50" />
      <path d="M 9.35 7.63 C 8.75 6.24, 8.58 10.15, 14.75 15.25" />
      <path d="M 3.93 6.06 C 14.28 9.58, 19.01 18.70, 20.05 15.23" />
      {children}
    </svg>
  );
});

export default TactoFuel;
