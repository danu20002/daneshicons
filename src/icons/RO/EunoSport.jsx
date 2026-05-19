import React from 'react';

export const iconData = {
  "id": "EunoSport",
  "name": "EunoSport",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.66 6.66 C 18.68 10.75, 8.84 10.71, 19.19 18.75"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 8.36 C 11.71 18.69, 11.94 5.81, 17.61 17.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.52 4.11 C 5.66 17.91, 4.55 5.33, 21.40 14.85"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 9.50 C 9.80 13.98, 13.20 8.42, 16.37 15.10"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 6.97 C 14.94 4.07, 17.79 12.13, 18.22 15.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 4.22 C 5.77 14.74, 19.00 15.30, 16.15 16.16"
      }
    ]
  ]
};

export const EunoSport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.66 6.66 C 18.68 10.75, 8.84 10.71, 19.19 18.75" />
      <path d="M 5.59 8.36 C 11.71 18.69, 11.94 5.81, 17.61 17.23" />
      <path d="M 5.52 4.11 C 5.66 17.91, 4.55 5.33, 21.40 14.85" />
      <path d="M 8.31 9.50 C 9.80 13.98, 13.20 8.42, 16.37 15.10" />
      <path d="M 8.35 6.97 C 14.94 4.07, 17.79 12.13, 18.22 15.74" />
      <path d="M 5.44 4.22 C 5.77 14.74, 19.00 15.30, 16.15 16.16" />
      {children}
    </svg>
  );
});

export default EunoSport;
