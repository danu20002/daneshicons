import React from 'react';

export const iconData = {
  "id": "StochoHip",
  "name": "StochoHip",
  "category": "KF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.71 12.00 a 2.29 2.29 0 1 0 4.58 0 a 2.29 2.29 0 1 0 -4.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.22 12.00 a 3.78 3.78 0 1 0 7.57 0 a 3.78 3.78 0 1 0 -7.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 12.00 a 5.61 5.61 0 1 0 11.23 0 a 5.61 5.61 0 1 0 -11.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 12.00 a 7.09 7.09 0 1 0 14.18 0 a 7.09 7.09 0 1 0 -14.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.45 12.00 a 8.55 8.55 0 1 0 17.10 0 a 8.55 8.55 0 1 0 -17.10 0",
        "stroke-dasharray": "6 2"
      }
    ]
  ]
};

export const StochoHip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.71 12.00 a 2.29 2.29 0 1 0 4.58 0 a 2.29 2.29 0 1 0 -4.58 0" />
      <path d="M 8.22 12.00 a 3.78 3.78 0 1 0 7.57 0 a 3.78 3.78 0 1 0 -7.57 0" />
      <path d="M 6.39 12.00 a 5.61 5.61 0 1 0 11.23 0 a 5.61 5.61 0 1 0 -11.23 0" />
      <path d="M 4.91 12.00 a 7.09 7.09 0 1 0 14.18 0 a 7.09 7.09 0 1 0 -14.18 0" />
      <path d="M 3.45 12.00 a 8.55 8.55 0 1 0 17.10 0 a 8.55 8.55 0 1 0 -17.10 0" stroke-dasharray="6 2" />
      {children}
    </svg>
  );
});

export default StochoHip;
