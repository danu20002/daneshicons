import React from 'react';

export const iconData = {
  "id": "ParaSaddle",
  "name": "ParaSaddle",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.44 9.89 C 9.50 17.20, 14.72 7.41, 18.94 16.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.59 4.83 C 13.62 4.39, 17.60 10.54, 14.79 19.22"
      }
    ],
    [
      "path",
      {
        "d": "M 7.65 6.94 C 14.51 6.61, 17.85 7.64, 14.57 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 2.29 C 19.66 10.28, 18.12 5.15, 19.60 17.17"
      }
    ]
  ]
};

export const ParaSaddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.44 9.89 C 9.50 17.20, 14.72 7.41, 18.94 16.89" />
      <path d="M 7.59 4.83 C 13.62 4.39, 17.60 10.54, 14.79 19.22" />
      <path d="M 7.65 6.94 C 14.51 6.61, 17.85 7.64, 14.57 20.67" />
      <path d="M 7.00 2.29 C 19.66 10.28, 18.12 5.15, 19.60 17.17" />
      {children}
    </svg>
  );
});

export default ParaSaddle;
