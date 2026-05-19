import React from 'react';

export const iconData = {
  "id": "TaphoLate",
  "name": "TaphoLate",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.16 7.86 C 10.03 8.97, 10.99 6.68, 15.75 15.14"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 3.65 C 9.17 11.52, 11.39 13.79, 15.69 14.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 8.13 C 10.94 4.93, 10.55 7.63, 16.33 17.16"
      }
    ],
    [
      "path",
      {
        "d": "M 2.08 2.20 C 5.46 14.45, 12.91 13.28, 14.44 19.24"
      }
    ],
    [
      "path",
      {
        "d": "M 2.90 9.38 C 11.31 15.59, 17.92 12.84, 18.03 14.22"
      }
    ]
  ]
};

export const TaphoLate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.16 7.86 C 10.03 8.97, 10.99 6.68, 15.75 15.14" />
      <path d="M 4.69 3.65 C 9.17 11.52, 11.39 13.79, 15.69 14.11" />
      <path d="M 5.30 8.13 C 10.94 4.93, 10.55 7.63, 16.33 17.16" />
      <path d="M 2.08 2.20 C 5.46 14.45, 12.91 13.28, 14.44 19.24" />
      <path d="M 2.90 9.38 C 11.31 15.59, 17.92 12.84, 18.03 14.22" />
      {children}
    </svg>
  );
});

export default TaphoLate;
