import React from 'react';

export const iconData = {
  "id": "VinileNomad",
  "name": "VinileNomad",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.35 3.88 C 16.44 9.62, 4.93 14.57, 18.65 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 3.14 C 9.38 8.96, 4.52 11.88, 19.98 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 2.11 2.15 C 14.61 7.78, 18.15 11.42, 15.70 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 3.35 C 12.24 4.38, 7.48 7.57, 15.78 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 2.17 C 18.47 11.41, 6.04 14.38, 16.93 14.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 5.22 C 14.62 17.53, 18.16 14.73, 17.77 14.92"
      }
    ]
  ]
};

export const VinileNomad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.35 3.88 C 16.44 9.62, 4.93 14.57, 18.65 20.51" />
      <path d="M 4.04 3.14 C 9.38 8.96, 4.52 11.88, 19.98 19.62" />
      <path d="M 2.11 2.15 C 14.61 7.78, 18.15 11.42, 15.70 18.88" />
      <path d="M 6.60 3.35 C 12.24 4.38, 7.48 7.57, 15.78 16.75" />
      <path d="M 3.20 2.17 C 18.47 11.41, 6.04 14.38, 16.93 14.71" />
      <path d="M 4.23 5.22 C 14.62 17.53, 18.16 14.73, 17.77 14.92" />
      {children}
    </svg>
  );
});

export default VinileNomad;
