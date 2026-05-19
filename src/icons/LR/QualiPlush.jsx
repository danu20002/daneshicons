import React from 'react';

export const iconData = {
  "id": "QualiPlush",
  "name": "QualiPlush",
  "category": "LR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.93 12.00 a 2.07 2.07 0 1 0 4.14 0 a 2.07 2.07 0 1 0 -4.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 12.00 a 4.83 4.83 0 1 0 9.66 0 a 4.83 4.83 0 1 0 -9.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 12.00 a 7.64 7.64 0 1 0 15.28 0 a 7.64 7.64 0 1 0 -15.28 0"
      }
    ]
  ]
};

export const QualiPlush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.93 12.00 a 2.07 2.07 0 1 0 4.14 0 a 2.07 2.07 0 1 0 -4.14 0" />
      <path d="M 7.17 12.00 a 4.83 4.83 0 1 0 9.66 0 a 4.83 4.83 0 1 0 -9.66 0" />
      <path d="M 4.36 12.00 a 7.64 7.64 0 1 0 15.28 0 a 7.64 7.64 0 1 0 -15.28 0" />
      {children}
    </svg>
  );
});

export default QualiPlush;
