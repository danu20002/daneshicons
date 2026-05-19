import React from 'react';

export const iconData = {
  "id": "GyroLava",
  "name": "GyroLava",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 2.17 C 4.21 10.45, 10.12 13.94, 14.27 15.41"
      }
    ],
    [
      "path",
      {
        "d": "M 9.07 7.57 C 8.45 6.54, 11.55 11.83, 19.01 19.68"
      }
    ],
    [
      "path",
      {
        "d": "M 9.23 7.51 C 18.12 9.46, 6.97 12.01, 21.39 16.95"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 7.87 C 9.07 12.71, 16.01 18.11, 19.40 15.35"
      }
    ]
  ]
};

export const GyroLava = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 2.17 C 4.21 10.45, 10.12 13.94, 14.27 15.41" />
      <path d="M 9.07 7.57 C 8.45 6.54, 11.55 11.83, 19.01 19.68" />
      <path d="M 9.23 7.51 C 18.12 9.46, 6.97 12.01, 21.39 16.95" />
      <path d="M 3.20 7.87 C 9.07 12.71, 16.01 18.11, 19.40 15.35" />
      {children}
    </svg>
  );
});

export default GyroLava;
