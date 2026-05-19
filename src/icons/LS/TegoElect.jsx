import React from 'react';

export const iconData = {
  "id": "TegoElect",
  "name": "TegoElect",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.14 7.03 C 18.22 4.82, 10.86 10.05, 18.92 14.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 4.47 C 6.38 15.32, 9.81 10.03, 16.41 20.48"
      }
    ],
    [
      "path",
      {
        "d": "M 2.54 3.88 C 9.70 12.45, 16.97 16.97, 15.38 16.79"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 6.57 C 14.61 19.87, 12.70 12.59, 19.94 17.64"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 4.84 C 11.54 7.10, 6.75 12.03, 15.15 14.71"
      }
    ]
  ]
};

export const TegoElect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.14 7.03 C 18.22 4.82, 10.86 10.05, 18.92 14.43" />
      <path d="M 5.74 4.47 C 6.38 15.32, 9.81 10.03, 16.41 20.48" />
      <path d="M 2.54 3.88 C 9.70 12.45, 16.97 16.97, 15.38 16.79" />
      <path d="M 5.70 6.57 C 14.61 19.87, 12.70 12.59, 19.94 17.64" />
      <path d="M 3.85 4.84 C 11.54 7.10, 6.75 12.03, 15.15 14.71" />
      {children}
    </svg>
  );
});

export default TegoElect;
