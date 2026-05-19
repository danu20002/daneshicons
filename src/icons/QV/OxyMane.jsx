import React from 'react';

export const iconData = {
  "id": "OxyMane",
  "name": "OxyMane",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.28 2.01 C 17.69 19.71, 7.38 9.73, 19.08 19.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 5.14 C 10.14 9.17, 17.83 10.24, 17.20 14.44"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 8.45 C 15.38 6.12, 8.33 4.40, 19.68 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 9.92 3.82 C 17.15 17.03, 8.98 10.19, 17.46 20.71"
      }
    ]
  ]
};

export const OxyMane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.28 2.01 C 17.69 19.71, 7.38 9.73, 19.08 19.72" />
      <path d="M 5.64 5.14 C 10.14 9.17, 17.83 10.24, 17.20 14.44" />
      <path d="M 6.16 8.45 C 15.38 6.12, 8.33 4.40, 19.68 20.43" />
      <path d="M 9.92 3.82 C 17.15 17.03, 8.98 10.19, 17.46 20.71" />
      {children}
    </svg>
  );
});

export default OxyMane;
