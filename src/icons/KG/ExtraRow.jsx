import React from 'react';

export const iconData = {
  "id": "ExtraRow",
  "name": "ExtraRow",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 4.94 C 10.68 16.31, 15.30 19.20, 19.38 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 7.00 C 4.92 16.70, 17.65 8.08, 18.41 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 5.60 7.62 C 9.23 8.32, 9.42 11.80, 14.20 16.95"
      }
    ]
  ]
};

export const ExtraRow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 4.94 C 10.68 16.31, 15.30 19.20, 19.38 20.69" />
      <path d="M 6.73 7.00 C 4.92 16.70, 17.65 8.08, 18.41 20.05" />
      <path d="M 5.60 7.62 C 9.23 8.32, 9.42 11.80, 14.20 16.95" />
      {children}
    </svg>
  );
});

export default ExtraRow;
