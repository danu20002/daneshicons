import React from 'react';

export const iconData = {
  "id": "SaproGod",
  "name": "SaproGod",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.43 4.93 C 6.57 4.12, 15.30 4.23, 15.66 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 9.66 9.87 C 15.85 9.52, 17.15 18.25, 19.69 20.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 6.44 C 12.01 17.71, 9.82 5.45, 20.07 17.30"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 2.29 C 18.71 16.40, 15.63 15.31, 16.29 19.60"
      }
    ],
    [
      "path",
      {
        "d": "M 3.01 5.62 C 7.43 4.51, 9.29 13.79, 18.07 16.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 8.29 C 18.10 11.14, 11.42 5.44, 16.05 17.20"
      }
    ]
  ]
};

export const SaproGod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.43 4.93 C 6.57 4.12, 15.30 4.23, 15.66 19.91" />
      <path d="M 9.66 9.87 C 15.85 9.52, 17.15 18.25, 19.69 20.08" />
      <path d="M 5.82 6.44 C 12.01 17.71, 9.82 5.45, 20.07 17.30" />
      <path d="M 6.16 2.29 C 18.71 16.40, 15.63 15.31, 16.29 19.60" />
      <path d="M 3.01 5.62 C 7.43 4.51, 9.29 13.79, 18.07 16.74" />
      <path d="M 5.21 8.29 C 18.10 11.14, 11.42 5.44, 16.05 17.20" />
      {children}
    </svg>
  );
});

export default SaproGod;
