import React from 'react';

export const iconData = {
  "id": "ScurroCarrier",
  "name": "ScurroCarrier",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.28 6.06 L 15.28 6.06"
      }
    ],
    [
      "path",
      {
        "d": "M 16.78 8.40 L 18.78 11.87"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 14.35 L 15.51 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 12.72 17.94 L 8.72 17.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.22 15.60 L 5.22 12.13"
      }
    ],
    [
      "path",
      {
        "d": "M 6.49 9.65 L 8.49 6.19"
      }
    ]
  ]
};

export const ScurroCarrier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.28 6.06 L 15.28 6.06" />
      <path d="M 16.78 8.40 L 18.78 11.87" />
      <path d="M 17.51 14.35 L 15.51 17.81" />
      <path d="M 12.72 17.94 L 8.72 17.94" />
      <path d="M 7.22 15.60 L 5.22 12.13" />
      <path d="M 6.49 9.65 L 8.49 6.19" />
      {children}
    </svg>
  );
});

export default ScurroCarrier;
