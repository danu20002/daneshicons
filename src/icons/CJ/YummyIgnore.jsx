import React from 'react';

export const iconData = {
  "id": "YummyIgnore",
  "name": "YummyIgnore",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.29 12.00 Q 14.75 13.59 16.65 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 16.65 20.05 Q 12.00 15.17 7.35 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 7.35 20.05 Q 9.25 13.59 2.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.71 12.00 Q 9.25 10.41 7.35 3.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.35 3.95 Q 12.00 8.83 16.65 3.95"
      }
    ],
    [
      "path",
      {
        "d": "M 16.65 3.95 Q 14.75 10.41 21.29 12.00"
      }
    ]
  ]
};

export const YummyIgnore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.29 12.00 Q 14.75 13.59 16.65 20.05" />
      <path d="M 16.65 20.05 Q 12.00 15.17 7.35 20.05" />
      <path d="M 7.35 20.05 Q 9.25 13.59 2.71 12.00" />
      <path d="M 2.71 12.00 Q 9.25 10.41 7.35 3.95" />
      <path d="M 7.35 3.95 Q 12.00 8.83 16.65 3.95" />
      <path d="M 16.65 3.95 Q 14.75 10.41 21.29 12.00" />
      {children}
    </svg>
  );
});

export default YummyIgnore;
