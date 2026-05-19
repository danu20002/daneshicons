import React from 'react';

export const iconData = {
  "id": "GastroThresh",
  "name": "GastroThresh",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.39 7.18 C 7.92 10.12, 19.93 11.56, 21.93 14.01"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 3.88 C 11.28 12.46, 19.13 9.43, 17.53 21.56"
      }
    ],
    [
      "path",
      {
        "d": "M 9.73 5.17 C 19.33 12.59, 19.45 15.65, 15.10 17.50"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 4.77 C 13.92 5.30, 5.40 16.15, 20.67 14.65"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 6.14 C 18.15 12.68, 15.77 17.23, 17.14 14.55"
      }
    ]
  ]
};

export const GastroThresh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.39 7.18 C 7.92 10.12, 19.93 11.56, 21.93 14.01" />
      <path d="M 3.75 3.88 C 11.28 12.46, 19.13 9.43, 17.53 21.56" />
      <path d="M 9.73 5.17 C 19.33 12.59, 19.45 15.65, 15.10 17.50" />
      <path d="M 6.63 4.77 C 13.92 5.30, 5.40 16.15, 20.67 14.65" />
      <path d="M 6.95 6.14 C 18.15 12.68, 15.77 17.23, 17.14 14.55" />
      {children}
    </svg>
  );
});

export default GastroThresh;
