import React from 'react';

export const iconData = {
  "id": "RemoQuip",
  "name": "RemoQuip",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.89 21.66 L 8.96 16.11 L 3.08 15.87 L 6.92 11.42 L 4.19 6.21 L 9.96 7.31 L 13.11 2.34 L 15.04 7.89 L 20.92 8.13 L 17.08 12.58 L 19.81 17.79 L 14.04 16.69 Z"
      }
    ]
  ]
};

export const RemoQuip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.89 21.66 L 8.96 16.11 L 3.08 15.87 L 6.92 11.42 L 4.19 6.21 L 9.96 7.31 L 13.11 2.34 L 15.04 7.89 L 20.92 8.13 L 17.08 12.58 L 19.81 17.79 L 14.04 16.69 Z" />
      {children}
    </svg>
  );
});

export default RemoQuip;
