import React from 'react';

export const iconData = {
  "id": "StatoDevise",
  "name": "StatoDevise",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.49 8.82 C 17.65 15.52, 12.31 10.78, 21.77 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 6.11 6.34 C 5.32 5.66, 4.14 11.45, 19.44 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 4.07 C 9.58 13.95, 11.13 18.67, 14.17 14.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 4.77 C 12.06 6.21, 4.89 13.90, 19.86 15.24"
      }
    ],
    [
      "path",
      {
        "d": "M 9.60 2.52 C 4.81 13.62, 5.58 6.34, 18.99 14.24"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 3.36 C 9.54 10.03, 4.95 9.47, 14.11 19.90"
      }
    ]
  ]
};

export const StatoDevise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.49 8.82 C 17.65 15.52, 12.31 10.78, 21.77 18.88" />
      <path d="M 6.11 6.34 C 5.32 5.66, 4.14 11.45, 19.44 17.45" />
      <path d="M 7.06 4.07 C 9.58 13.95, 11.13 18.67, 14.17 14.20" />
      <path d="M 6.27 4.77 C 12.06 6.21, 4.89 13.90, 19.86 15.24" />
      <path d="M 9.60 2.52 C 4.81 13.62, 5.58 6.34, 18.99 14.24" />
      <path d="M 8.53 3.36 C 9.54 10.03, 4.95 9.47, 14.11 19.90" />
      {children}
    </svg>
  );
});

export default StatoDevise;
