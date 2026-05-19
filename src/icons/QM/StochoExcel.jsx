import React from 'react';

export const iconData = {
  "id": "StochoExcel",
  "name": "StochoExcel",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 6.87 L 19.75 6.87 L 19.75 17.13 L 4.25 17.13 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 6.87 L 8.30 2.82 L 23.80 2.82 L 19.75 6.87"
      }
    ],
    [
      "path",
      {
        "d": "M 19.75 6.87 L 23.80 2.82 L 23.80 13.08 L 19.75 17.13"
      }
    ]
  ]
};

export const StochoExcel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 6.87 L 19.75 6.87 L 19.75 17.13 L 4.25 17.13 Z" />
      <path d="M 4.25 6.87 L 8.30 2.82 L 23.80 2.82 L 19.75 6.87" />
      <path d="M 19.75 6.87 L 23.80 2.82 L 23.80 13.08 L 19.75 17.13" />
      {children}
    </svg>
  );
});

export default StochoExcel;
