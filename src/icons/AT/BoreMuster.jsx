import React from 'react';

export const iconData = {
  "id": "BoreMuster",
  "name": "BoreMuster",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 6.89 C 6.56 12.06, 14.45 18.69, 16.54 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 2.05 8.52 C 4.73 16.71, 9.02 14.78, 16.93 16.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 9.40 C 9.78 19.46, 12.71 18.26, 19.37 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 9.84 C 8.21 16.50, 7.27 11.89, 18.56 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 3.94 C 5.12 10.45, 12.37 17.53, 14.93 17.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 3.00 C 8.50 14.46, 11.96 4.79, 15.66 14.92"
      }
    ]
  ]
};

export const BoreMuster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 6.89 C 6.56 12.06, 14.45 18.69, 16.54 18.87" />
      <path d="M 2.05 8.52 C 4.73 16.71, 9.02 14.78, 16.93 16.23" />
      <path d="M 5.87 9.40 C 9.78 19.46, 12.71 18.26, 19.37 20.69" />
      <path d="M 6.86 9.84 C 8.21 16.50, 7.27 11.89, 18.56 14.48" />
      <path d="M 5.36 3.94 C 5.12 10.45, 12.37 17.53, 14.93 17.39" />
      <path d="M 7.10 3.00 C 8.50 14.46, 11.96 4.79, 15.66 14.92" />
      {children}
    </svg>
  );
});

export default BoreMuster;
