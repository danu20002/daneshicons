import React from 'react';

export const iconData = {
  "id": "VacuoCamp",
  "name": "VacuoCamp",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 9.36 C 7.76 5.15, 17.10 18.73, 21.38 19.26"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 9.18 C 17.97 12.47, 4.54 17.56, 17.98 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 6.74 C 7.26 6.12, 18.84 14.63, 14.41 19.44"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 6.56 C 9.64 9.89, 7.87 16.64, 17.68 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 2.27 4.39 C 12.44 15.32, 6.71 5.01, 18.13 15.09"
      }
    ]
  ]
};

export const VacuoCamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 9.36 C 7.76 5.15, 17.10 18.73, 21.38 19.26" />
      <path d="M 3.27 9.18 C 17.97 12.47, 4.54 17.56, 17.98 19.96" />
      <path d="M 3.68 6.74 C 7.26 6.12, 18.84 14.63, 14.41 19.44" />
      <path d="M 3.66 6.56 C 9.64 9.89, 7.87 16.64, 17.68 16.11" />
      <path d="M 2.27 4.39 C 12.44 15.32, 6.71 5.01, 18.13 15.09" />
      {children}
    </svg>
  );
});

export default VacuoCamp;
