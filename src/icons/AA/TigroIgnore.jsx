import React from 'react';

export const iconData = {
  "id": "TigroIgnore",
  "name": "TigroIgnore",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.55 8.61 C 11.57 15.98, 14.81 11.23, 21.60 18.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 7.15 C 4.13 8.70, 10.41 8.62, 17.32 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 9.20 6.62 C 9.93 5.42, 13.81 7.47, 20.81 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 6.96 C 15.92 8.43, 9.50 16.59, 16.71 19.25"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 7.10 C 10.31 9.92, 17.33 18.88, 21.88 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 9.60 3.93 C 9.55 17.42, 6.17 17.98, 21.02 20.40"
      }
    ]
  ]
};

export const TigroIgnore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.55 8.61 C 11.57 15.98, 14.81 11.23, 21.60 18.32" />
      <path d="M 7.66 7.15 C 4.13 8.70, 10.41 8.62, 17.32 17.91" />
      <path d="M 9.20 6.62 C 9.93 5.42, 13.81 7.47, 20.81 20.30" />
      <path d="M 4.77 6.96 C 15.92 8.43, 9.50 16.59, 16.71 19.25" />
      <path d="M 5.16 7.10 C 10.31 9.92, 17.33 18.88, 21.88 17.78" />
      <path d="M 9.60 3.93 C 9.55 17.42, 6.17 17.98, 21.02 20.40" />
      {children}
    </svg>
  );
});

export default TigroIgnore;
