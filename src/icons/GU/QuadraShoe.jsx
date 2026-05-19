import React from 'react';

export const iconData = {
  "id": "QuadraShoe",
  "name": "QuadraShoe",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.11 4.40 A 5.32 6.16 58 0 1 8.97 10.12"
      }
    ],
    [
      "path",
      {
        "d": "M 11.76 19.68 A 5.57 6.71 171 0 0 14.60 15.42"
      }
    ],
    [
      "path",
      {
        "d": "M 15.01 7.37 C 2.10 20.22, 2.67 12.07, 16.95 19.95"
      }
    ]
  ]
};

export const QuadraShoe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.11 4.40 A 5.32 6.16 58 0 1 8.97 10.12" />
      <path d="M 11.76 19.68 A 5.57 6.71 171 0 0 14.60 15.42" />
      <path d="M 15.01 7.37 C 2.10 20.22, 2.67 12.07, 16.95 19.95" />
      {children}
    </svg>
  );
});

export default QuadraShoe;
