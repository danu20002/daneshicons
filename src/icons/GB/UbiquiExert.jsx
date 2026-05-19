import React from 'react';

export const iconData = {
  "id": "UbiquiExert",
  "name": "UbiquiExert",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.48 10.56 Q 20.38 10.15 5.73 9.04"
      }
    ],
    [
      "path",
      {
        "d": "M 20.28 13.20 L 6.77 9.21"
      }
    ],
    [
      "path",
      {
        "d": "M 16.03 11.11 Q 3.54 10.26 10.34 5.58"
      }
    ],
    [
      "path",
      {
        "d": "M 9.78 7.69 A 6.10 6.12 94 0 0 16.59 14.02"
      }
    ],
    [
      "path",
      {
        "d": "M 16.47 5.94 L 4.58 20.30 L 19.58 19.98 L 13.19 7.86 L 5.74 21.88 L 6.59 20.30 L 4.80 7.64"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 10.74 L 18.32 15.07 L 15.03 11.12 L 9.63 15.50 L 12.97 10.39 L 21.37 19.14 L 12.93 11.92 L 17.63 14.41"
      }
    ]
  ]
};

export const UbiquiExert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.48 10.56 Q 20.38 10.15 5.73 9.04" />
      <path d="M 20.28 13.20 L 6.77 9.21" />
      <path d="M 16.03 11.11 Q 3.54 10.26 10.34 5.58" />
      <path d="M 9.78 7.69 A 6.10 6.12 94 0 0 16.59 14.02" />
      <path d="M 16.47 5.94 L 4.58 20.30 L 19.58 19.98 L 13.19 7.86 L 5.74 21.88 L 6.59 20.30 L 4.80 7.64" />
      <path d="M 2.60 10.74 L 18.32 15.07 L 15.03 11.12 L 9.63 15.50 L 12.97 10.39 L 21.37 19.14 L 12.93 11.92 L 17.63 14.41" />
      {children}
    </svg>
  );
});

export default UbiquiExert;
