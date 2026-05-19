import React from 'react';

export const iconData = {
  "id": "InteroStranger",
  "name": "InteroStranger",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.39 8.15 C 19.85 14.55, 6.27 19.47, 18.99 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 8.13 C 15.43 16.82, 10.12 16.60, 15.49 14.87"
      }
    ],
    [
      "path",
      {
        "d": "M 2.68 6.56 C 5.33 17.67, 8.90 17.00, 15.58 15.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 7.81 C 18.36 7.39, 18.55 16.68, 15.34 17.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.90 3.76 C 18.66 13.95, 7.30 15.90, 20.89 16.68"
      }
    ]
  ]
};

export const InteroStranger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.39 8.15 C 19.85 14.55, 6.27 19.47, 18.99 19.20" />
      <path d="M 3.27 8.13 C 15.43 16.82, 10.12 16.60, 15.49 14.87" />
      <path d="M 2.68 6.56 C 5.33 17.67, 8.90 17.00, 15.58 15.00" />
      <path d="M 8.42 7.81 C 18.36 7.39, 18.55 16.68, 15.34 17.76" />
      <path d="M 7.90 3.76 C 18.66 13.95, 7.30 15.90, 20.89 16.68" />
      {children}
    </svg>
  );
});

export default InteroStranger;
