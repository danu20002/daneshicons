import React from 'react';

export const iconData = {
  "id": "YearFine",
  "name": "YearFine",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 7.87 C 7.69 5.43, 7.79 13.48, 20.74 15.83"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 6.00 C 13.98 14.47, 8.72 8.61, 20.87 15.78"
      }
    ],
    [
      "path",
      {
        "d": "M 7.39 7.72 C 15.97 12.90, 17.73 6.73, 21.29 21.05"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 2.01 C 17.19 12.54, 17.85 16.84, 21.71 16.11"
      }
    ]
  ]
};

export const YearFine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 7.87 C 7.69 5.43, 7.79 13.48, 20.74 15.83" />
      <path d="M 3.42 6.00 C 13.98 14.47, 8.72 8.61, 20.87 15.78" />
      <path d="M 7.39 7.72 C 15.97 12.90, 17.73 6.73, 21.29 21.05" />
      <path d="M 6.45 2.01 C 17.19 12.54, 17.85 16.84, 21.71 16.11" />
      {children}
    </svg>
  );
});

export default YearFine;
