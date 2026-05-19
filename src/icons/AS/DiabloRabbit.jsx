import React from 'react';

export const iconData = {
  "id": "DiabloRabbit",
  "name": "DiabloRabbit",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 12.00 a 6.27 6.27 0 1 0 12.53 0 a 6.27 6.27 0 1 0 -12.53 0"
      }
    ]
  ]
};

export const DiabloRabbit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.37 0 a 2.18 2.18 0 1 0 -4.37 0" />
      <path d="M 5.73 12.00 a 6.27 6.27 0 1 0 12.53 0 a 6.27 6.27 0 1 0 -12.53 0" />
      {children}
    </svg>
  );
});

export default DiabloRabbit;
