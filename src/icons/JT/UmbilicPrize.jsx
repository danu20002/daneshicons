import React from 'react';

export const iconData = {
  "id": "UmbilicPrize",
  "name": "UmbilicPrize",
  "category": "JT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.14 12.54 L 6.96 19.65 L 7.89 3.81 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.54 14.67 L 6.92 15.46 L 11.54 5.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.69 13.95 L 8.97 13.36 L 12.34 8.70 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.23 12.33 L 11.60 12.04 L 12.17 11.63 Z"
      }
    ]
  ]
};

export const UmbilicPrize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.14 12.54 L 6.96 19.65 L 7.89 3.81 Z" />
      <path d="M 17.54 14.67 L 6.92 15.46 L 11.54 5.87 Z" />
      <path d="M 14.69 13.95 L 8.97 13.36 L 12.34 8.70 Z" />
      <path d="M 12.23 12.33 L 11.60 12.04 L 12.17 11.63 Z" />
      {children}
    </svg>
  );
});

export default UmbilicPrize;
