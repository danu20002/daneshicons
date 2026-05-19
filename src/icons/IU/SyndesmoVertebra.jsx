import React from 'react';

export const iconData = {
  "id": "SyndesmoVertebra",
  "name": "SyndesmoVertebra",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.72 5.64 C 16.21 16.09, 4.46 16.29, 20.94 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 9.62 2.36 C 8.40 15.14, 13.81 7.98, 15.50 15.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 2.26 C 7.72 15.66, 14.56 17.22, 15.41 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 9.85 3.24 C 14.08 10.18, 19.61 17.94, 20.18 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 6.37 C 12.02 8.94, 8.69 15.37, 21.28 21.81"
      }
    ],
    [
      "path",
      {
        "d": "M 2.31 4.87 C 13.04 15.86, 16.45 4.83, 18.13 19.56"
      }
    ]
  ]
};

export const SyndesmoVertebra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.72 5.64 C 16.21 16.09, 4.46 16.29, 20.94 20.16" />
      <path d="M 9.62 2.36 C 8.40 15.14, 13.81 7.98, 15.50 15.64" />
      <path d="M 8.43 2.26 C 7.72 15.66, 14.56 17.22, 15.41 19.08" />
      <path d="M 9.85 3.24 C 14.08 10.18, 19.61 17.94, 20.18 19.45" />
      <path d="M 3.63 6.37 C 12.02 8.94, 8.69 15.37, 21.28 21.81" />
      <path d="M 2.31 4.87 C 13.04 15.86, 16.45 4.83, 18.13 19.56" />
      {children}
    </svg>
  );
});

export default SyndesmoVertebra;
