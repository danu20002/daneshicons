import React from 'react';

export const iconData = {
  "id": "HexaTake",
  "name": "HexaTake",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.22 10.69 A 3.63 5.01 7 0 0 15.46 17.54"
      }
    ],
    [
      "path",
      {
        "d": "M 14.38 21.05 Q 20.42 18.73 3.28 16.63"
      }
    ],
    [
      "path",
      {
        "d": "M 12.63 6.96 A 5.64 5.39 52 0 0 7.23 16.18"
      }
    ]
  ]
};

export const HexaTake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.22 10.69 A 3.63 5.01 7 0 0 15.46 17.54" />
      <path d="M 14.38 21.05 Q 20.42 18.73 3.28 16.63" />
      <path d="M 12.63 6.96 A 5.64 5.39 52 0 0 7.23 16.18" />
      {children}
    </svg>
  );
});

export default HexaTake;
