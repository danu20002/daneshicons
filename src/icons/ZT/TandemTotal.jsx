import React from 'react';

export const iconData = {
  "id": "TandemTotal",
  "name": "TandemTotal",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.58 6.19 L 12.58 6.19"
      }
    ],
    [
      "path",
      {
        "d": "M 15.32 6.13 L 17.32 9.59"
      }
    ],
    [
      "path",
      {
        "d": "M 18.75 11.94 L 16.75 15.41"
      }
    ],
    [
      "path",
      {
        "d": "M 15.42 17.81 L 11.42 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 8.68 17.87 L 6.68 14.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 12.06 L 7.25 8.59"
      }
    ]
  ]
};

export const TandemTotal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.58 6.19 L 12.58 6.19" />
      <path d="M 15.32 6.13 L 17.32 9.59" />
      <path d="M 18.75 11.94 L 16.75 15.41" />
      <path d="M 15.42 17.81 L 11.42 17.81" />
      <path d="M 8.68 17.87 L 6.68 14.41" />
      <path d="M 5.25 12.06 L 7.25 8.59" />
      {children}
    </svg>
  );
});

export default TandemTotal;
