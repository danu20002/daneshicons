import React from 'react';

export const iconData = {
  "id": "OcciJaw",
  "name": "OcciJaw",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.24 8.17 C 15.36 5.39, 14.05 7.61, 15.93 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 7.10 C 12.22 11.96, 12.39 8.98, 19.80 18.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 3.85 C 9.40 15.69, 8.35 4.79, 18.66 17.66"
      }
    ],
    [
      "path",
      {
        "d": "M 9.41 2.19 C 9.67 7.14, 7.76 7.43, 18.23 21.62"
      }
    ],
    [
      "path",
      {
        "d": "M 8.24 8.99 C 7.60 13.41, 5.92 18.79, 20.34 14.43"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 3.33 C 4.88 8.47, 15.37 15.61, 16.65 20.51"
      }
    ]
  ]
};

export const OcciJaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.24 8.17 C 15.36 5.39, 14.05 7.61, 15.93 18.58" />
      <path d="M 4.04 7.10 C 12.22 11.96, 12.39 8.98, 19.80 18.77" />
      <path d="M 7.07 3.85 C 9.40 15.69, 8.35 4.79, 18.66 17.66" />
      <path d="M 9.41 2.19 C 9.67 7.14, 7.76 7.43, 18.23 21.62" />
      <path d="M 8.24 8.99 C 7.60 13.41, 5.92 18.79, 20.34 14.43" />
      <path d="M 3.25 3.33 C 4.88 8.47, 15.37 15.61, 16.65 20.51" />
      {children}
    </svg>
  );
});

export default OcciJaw;
