import React from 'react';

export const iconData = {
  "id": "ZappinoPear",
  "name": "ZappinoPear",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.47 6.36 C 7.00 9.47, 16.48 9.17, 16.15 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 8.98 5.98 C 7.05 11.43, 9.52 15.75, 18.31 15.30"
      }
    ],
    [
      "path",
      {
        "d": "M 9.94 9.83 C 14.92 12.16, 10.26 12.46, 17.83 16.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.63 2.20 C 5.15 17.12, 13.04 16.88, 15.19 21.42"
      }
    ],
    [
      "path",
      {
        "d": "M 9.32 9.68 C 4.06 4.63, 8.74 17.64, 19.61 18.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 5.56 C 6.65 19.89, 15.55 5.62, 17.38 17.78"
      }
    ]
  ]
};

export const ZappinoPear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.47 6.36 C 7.00 9.47, 16.48 9.17, 16.15 21.80" />
      <path d="M 8.98 5.98 C 7.05 11.43, 9.52 15.75, 18.31 15.30" />
      <path d="M 9.94 9.83 C 14.92 12.16, 10.26 12.46, 17.83 16.87" />
      <path d="M 7.63 2.20 C 5.15 17.12, 13.04 16.88, 15.19 21.42" />
      <path d="M 9.32 9.68 C 4.06 4.63, 8.74 17.64, 19.61 18.31" />
      <path d="M 6.73 5.56 C 6.65 19.89, 15.55 5.62, 17.38 17.78" />
      {children}
    </svg>
  );
});

export default ZappinoPear;
