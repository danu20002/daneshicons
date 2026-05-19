import React from 'react';

export const iconData = {
  "id": "YearLeek",
  "name": "YearLeek",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.95 10.79 L 14.95 10.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.52 10.48 L 14.52 13.95"
      }
    ],
    [
      "path",
      {
        "d": "M 13.58 11.70 L 11.58 15.16"
      }
    ],
    [
      "path",
      {
        "d": "M 13.05 13.21 L 9.05 13.21"
      }
    ],
    [
      "path",
      {
        "d": "M 11.48 13.52 L 9.48 10.05"
      }
    ],
    [
      "path",
      {
        "d": "M 10.42 12.30 L 12.42 8.84"
      }
    ]
  ]
};

export const YearLeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.95 10.79 L 14.95 10.79" />
      <path d="M 12.52 10.48 L 14.52 13.95" />
      <path d="M 13.58 11.70 L 11.58 15.16" />
      <path d="M 13.05 13.21 L 9.05 13.21" />
      <path d="M 11.48 13.52 L 9.48 10.05" />
      <path d="M 10.42 12.30 L 12.42 8.84" />
      {children}
    </svg>
  );
});

export default YearLeek;
