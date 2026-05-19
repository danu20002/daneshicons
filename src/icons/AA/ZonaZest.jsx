import React from 'react';

export const iconData = {
  "id": "ZonaZest",
  "name": "ZonaZest",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.36 2.50 C 16.14 12.87, 11.58 15.39, 18.02 14.43"
      }
    ],
    [
      "path",
      {
        "d": "M 9.79 6.01 C 14.63 15.94, 12.34 19.66, 15.37 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 7.30 C 19.50 8.64, 4.87 16.10, 19.83 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 5.58 C 5.80 4.12, 7.03 10.94, 17.67 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 2.49 5.29 C 19.73 14.50, 10.23 7.51, 17.73 17.89"
      }
    ],
    [
      "path",
      {
        "d": "M 2.50 2.95 C 16.35 13.23, 4.77 13.75, 21.14 16.93"
      }
    ]
  ]
};

export const ZonaZest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.36 2.50 C 16.14 12.87, 11.58 15.39, 18.02 14.43" />
      <path d="M 9.79 6.01 C 14.63 15.94, 12.34 19.66, 15.37 21.25" />
      <path d="M 3.66 7.30 C 19.50 8.64, 4.87 16.10, 19.83 20.52" />
      <path d="M 7.44 5.58 C 5.80 4.12, 7.03 10.94, 17.67 19.14" />
      <path d="M 2.49 5.29 C 19.73 14.50, 10.23 7.51, 17.73 17.89" />
      <path d="M 2.50 2.95 C 16.35 13.23, 4.77 13.75, 21.14 16.93" />
      {children}
    </svg>
  );
});

export default ZonaZest;
