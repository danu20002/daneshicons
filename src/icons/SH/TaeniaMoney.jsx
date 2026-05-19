import React from 'react';

export const iconData = {
  "id": "TaeniaMoney",
  "name": "TaeniaMoney",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.54 4.76 C 15.03 19.91, 15.14 13.20, 20.68 14.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 5.95 C 4.86 16.11, 4.83 14.47, 14.97 19.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 8.94 C 16.03 19.05, 18.99 19.37, 19.03 21.01"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 4.67 C 12.70 12.77, 9.61 15.32, 15.56 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 3.40 C 4.34 6.23, 8.59 12.12, 20.35 14.33"
      }
    ]
  ]
};

export const TaeniaMoney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.54 4.76 C 15.03 19.91, 15.14 13.20, 20.68 14.26" />
      <path d="M 7.50 5.95 C 4.86 16.11, 4.83 14.47, 14.97 19.81" />
      <path d="M 5.38 8.94 C 16.03 19.05, 18.99 19.37, 19.03 21.01" />
      <path d="M 8.18 4.67 C 12.70 12.77, 9.61 15.32, 15.56 16.46" />
      <path d="M 6.85 3.40 C 4.34 6.23, 8.59 12.12, 20.35 14.33" />
      {children}
    </svg>
  );
});

export default TaeniaMoney;
