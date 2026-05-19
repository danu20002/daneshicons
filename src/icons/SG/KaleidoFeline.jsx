import React from 'react';

export const iconData = {
  "id": "KaleidoFeline",
  "name": "KaleidoFeline",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 12.00 a 4.79 4.79 0 1 0 9.58 0 a 4.79 4.79 0 1 0 -9.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 12.00 a 7.58 7.58 0 1 0 15.17 0 a 7.58 7.58 0 1 0 -15.17 0"
      }
    ]
  ]
};

export const KaleidoFeline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0" />
      <path d="M 7.21 12.00 a 4.79 4.79 0 1 0 9.58 0 a 4.79 4.79 0 1 0 -9.58 0" />
      <path d="M 4.42 12.00 a 7.58 7.58 0 1 0 15.17 0 a 7.58 7.58 0 1 0 -15.17 0" />
      {children}
    </svg>
  );
});

export default KaleidoFeline;
