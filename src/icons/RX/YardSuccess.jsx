import React from 'react';

export const iconData = {
  "id": "YardSuccess",
  "name": "YardSuccess",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.27 12.00 a 9.73 9.73 0 1 0 19.46 0 a 9.73 9.73 0 1 0 -19.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.27 12.00 a 9.73 2.9185935131739824 0 1 0 19.46 0 a 9.73 2.9185935131739824 0 1 0 -19.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.27 A 2 2 0 0 0 12.00 21.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.27 A 2 2 0 0 1 12.00 21.73"
      }
    ]
  ]
};

export const YardSuccess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.27 12.00 a 9.73 9.73 0 1 0 19.46 0 a 9.73 9.73 0 1 0 -19.46 0" />
      <path d="M 2.27 12.00 a 9.73 2.9185935131739824 0 1 0 19.46 0 a 9.73 2.9185935131739824 0 1 0 -19.46 0" />
      <path d="M 12.00 2.27 A 2 2 0 0 0 12.00 21.73" />
      <path d="M 12.00 2.27 A 2 2 0 0 1 12.00 21.73" />
      {children}
    </svg>
  );
});

export default YardSuccess;
