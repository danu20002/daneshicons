import React from 'react';

export const iconData = {
  "id": "RubroRent",
  "name": "RubroRent",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.81 5.33 L 18.72 17.94 L 15.22 13.73 L 21.10 19.79 L 18.32 13.44 L 9.74 11.90 L 19.21 18.28 L 2.98 12.56"
      }
    ],
    [
      "path",
      {
        "d": "M 9.36 2.29 Q 6.47 13.52 2.01 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 19.01 L 8.80 13.67"
      }
    ],
    [
      "path",
      {
        "d": "M 16.90 6.54 C 19.96 20.58, 3.86 2.86, 18.17 2.68"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 13.21 L 12.54 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 21.69 13.89 L 4.48 2.88"
      }
    ]
  ]
};

export const RubroRent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.81 5.33 L 18.72 17.94 L 15.22 13.73 L 21.10 19.79 L 18.32 13.44 L 9.74 11.90 L 19.21 18.28 L 2.98 12.56" />
      <path d="M 9.36 2.29 Q 6.47 13.52 2.01 20.34" />
      <path d="M 5.97 19.01 L 8.80 13.67" />
      <path d="M 16.90 6.54 C 19.96 20.58, 3.86 2.86, 18.17 2.68" />
      <path d="M 6.96 13.21 L 12.54 19.87" />
      <path d="M 21.69 13.89 L 4.48 2.88" />
      {children}
    </svg>
  );
});

export default RubroRent;
