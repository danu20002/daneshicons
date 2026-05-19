import React from 'react';

export const iconData = {
  "id": "TephroShoot",
  "name": "TephroShoot",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 2.30 C 15.80 17.87, 14.61 13.75, 17.93 16.43"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 9.03 C 6.94 9.08, 13.18 11.83, 20.62 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.42 7.42 C 7.11 16.36, 7.44 9.32, 16.05 18.21"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 9.70 C 15.67 13.69, 16.40 8.30, 18.72 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 9.69 3.96 C 19.23 18.29, 16.61 9.33, 20.12 16.91"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 4.18 C 4.86 18.51, 19.29 16.61, 20.95 21.01"
      }
    ]
  ]
};

export const TephroShoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 2.30 C 15.80 17.87, 14.61 13.75, 17.93 16.43" />
      <path d="M 8.15 9.03 C 6.94 9.08, 13.18 11.83, 20.62 20.45" />
      <path d="M 7.42 7.42 C 7.11 16.36, 7.44 9.32, 16.05 18.21" />
      <path d="M 5.38 9.70 C 15.67 13.69, 16.40 8.30, 18.72 20.02" />
      <path d="M 9.69 3.96 C 19.23 18.29, 16.61 9.33, 20.12 16.91" />
      <path d="M 3.66 4.18 C 4.86 18.51, 19.29 16.61, 20.95 21.01" />
      {children}
    </svg>
  );
});

export default TephroShoot;
