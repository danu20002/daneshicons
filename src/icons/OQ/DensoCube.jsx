import React from 'react';

export const iconData = {
  "id": "DensoCube",
  "name": "DensoCube",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.60 6.39 C 8.13 11.05, 10.69 12.58, 15.45 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 3.90 C 10.92 9.05, 19.52 19.22, 19.80 14.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.26 7.70 C 18.76 15.44, 14.08 19.65, 21.54 14.42"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 7.04 C 17.81 10.66, 11.06 13.17, 15.76 17.69"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 7.00 C 18.64 9.55, 18.47 12.91, 19.64 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 7.29 C 15.30 12.38, 11.08 11.68, 15.33 15.25"
      }
    ]
  ]
};

export const DensoCube = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.60 6.39 C 8.13 11.05, 10.69 12.58, 15.45 19.91" />
      <path d="M 3.25 3.90 C 10.92 9.05, 19.52 19.22, 19.80 14.76" />
      <path d="M 9.26 7.70 C 18.76 15.44, 14.08 19.65, 21.54 14.42" />
      <path d="M 9.43 7.04 C 17.81 10.66, 11.06 13.17, 15.76 17.69" />
      <path d="M 5.85 7.00 C 18.64 9.55, 18.47 12.91, 19.64 18.15" />
      <path d="M 5.82 7.29 C 15.30 12.38, 11.08 11.68, 15.33 15.25" />
      {children}
    </svg>
  );
});

export default DensoCube;
