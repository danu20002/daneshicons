import React from 'react';

export const iconData = {
  "id": "RadioDish",
  "name": "RadioDish",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.05 7.01 C 8.57 11.08, 17.01 19.97, 16.90 18.34"
      }
    ],
    [
      "path",
      {
        "d": "M 9.51 6.96 C 7.79 8.08, 7.22 15.11, 17.79 19.98"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 2.58 C 10.57 13.60, 7.84 4.30, 14.16 18.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 7.03 C 8.55 12.62, 12.52 13.55, 18.67 16.34"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 9.88 C 4.57 10.77, 18.30 9.06, 20.26 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 3.78 C 5.99 17.01, 6.02 19.77, 16.85 14.68"
      }
    ]
  ]
};

export const RadioDish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.05 7.01 C 8.57 11.08, 17.01 19.97, 16.90 18.34" />
      <path d="M 9.51 6.96 C 7.79 8.08, 7.22 15.11, 17.79 19.98" />
      <path d="M 3.76 2.58 C 10.57 13.60, 7.84 4.30, 14.16 18.23" />
      <path d="M 6.13 7.03 C 8.55 12.62, 12.52 13.55, 18.67 16.34" />
      <path d="M 5.14 9.88 C 4.57 10.77, 18.30 9.06, 20.26 18.44" />
      <path d="M 5.40 3.78 C 5.99 17.01, 6.02 19.77, 16.85 14.68" />
      {children}
    </svg>
  );
});

export default RadioDish;
