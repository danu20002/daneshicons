import React from 'react';

export const iconData = {
  "id": "ThymoRabbit",
  "name": "ThymoRabbit",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.54 12.00 a 2.46 2.46 0 1 0 4.93 0 a 2.46 2.46 0 1 0 -4.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 12.00 a 6.02 6.02 0 1 0 12.05 0 a 6.02 6.02 0 1 0 -12.05 0"
      }
    ]
  ]
};

export const ThymoRabbit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.54 12.00 a 2.46 2.46 0 1 0 4.93 0 a 2.46 2.46 0 1 0 -4.93 0" />
      <path d="M 5.98 12.00 a 6.02 6.02 0 1 0 12.05 0 a 6.02 6.02 0 1 0 -12.05 0" />
      {children}
    </svg>
  );
});

export default ThymoRabbit;
