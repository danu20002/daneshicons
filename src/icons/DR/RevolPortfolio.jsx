import React from 'react';

export const iconData = {
  "id": "RevolPortfolio",
  "name": "RevolPortfolio",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.21 2.08 C 6.64 6.13, 6.21 5.64, 14.96 20.39"
      }
    ],
    [
      "path",
      {
        "d": "M 8.77 5.57 C 5.01 17.61, 19.71 15.81, 17.15 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 8.10 C 10.83 5.48, 4.68 17.91, 15.55 15.98"
      }
    ],
    [
      "path",
      {
        "d": "M 8.89 7.11 C 12.49 4.31, 8.30 7.55, 21.93 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 6.40 C 19.73 14.09, 11.66 4.84, 19.41 18.07"
      }
    ]
  ]
};

export const RevolPortfolio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.21 2.08 C 6.64 6.13, 6.21 5.64, 14.96 20.39" />
      <path d="M 8.77 5.57 C 5.01 17.61, 19.71 15.81, 17.15 21.23" />
      <path d="M 4.93 8.10 C 10.83 5.48, 4.68 17.91, 15.55 15.98" />
      <path d="M 8.89 7.11 C 12.49 4.31, 8.30 7.55, 21.93 18.09" />
      <path d="M 5.59 6.40 C 19.73 14.09, 11.66 4.84, 19.41 18.07" />
      {children}
    </svg>
  );
});

export default RevolPortfolio;
