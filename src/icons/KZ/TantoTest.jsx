import React from 'react';

export const iconData = {
  "id": "TantoTest",
  "name": "TantoTest",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.52 4.43 C 16.62 19.79, 7.28 10.45, 15.24 14.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.31 4.09 C 11.11 14.68, 15.62 12.43, 15.31 19.72"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 7.44 C 13.22 10.93, 13.50 17.53, 16.79 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 6.00 C 6.76 5.62, 6.15 13.37, 19.07 16.81"
      }
    ],
    [
      "path",
      {
        "d": "M 9.50 6.54 C 5.06 13.76, 18.52 5.95, 17.07 21.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.31 5.07 C 10.08 7.86, 4.89 14.30, 21.56 20.19"
      }
    ]
  ]
};

export const TantoTest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.52 4.43 C 16.62 19.79, 7.28 10.45, 15.24 14.07" />
      <path d="M 6.31 4.09 C 11.11 14.68, 15.62 12.43, 15.31 19.72" />
      <path d="M 7.23 7.44 C 13.22 10.93, 13.50 17.53, 16.79 15.76" />
      <path d="M 7.78 6.00 C 6.76 5.62, 6.15 13.37, 19.07 16.81" />
      <path d="M 9.50 6.54 C 5.06 13.76, 18.52 5.95, 17.07 21.45" />
      <path d="M 6.31 5.07 C 10.08 7.86, 4.89 14.30, 21.56 20.19" />
      {children}
    </svg>
  );
});

export default TantoTest;
