import React from 'react';

export const iconData = {
  "id": "FrigoPaddle",
  "name": "FrigoPaddle",
  "category": "VE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.94 12.00 a 2.06 2.06 0 1 0 4.13 0 a 2.06 2.06 0 1 0 -4.13 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 12.00 a 6.32 6.32 0 1 0 12.64 0 a 6.32 6.32 0 1 0 -12.64 0",
        "stroke-dasharray": "5 2"
      }
    ]
  ]
};

export const FrigoPaddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.94 12.00 a 2.06 2.06 0 1 0 4.13 0 a 2.06 2.06 0 1 0 -4.13 0" stroke-dasharray="2 3" />
      <path d="M 5.68 12.00 a 6.32 6.32 0 1 0 12.64 0 a 6.32 6.32 0 1 0 -12.64 0" stroke-dasharray="5 2" />
      {children}
    </svg>
  );
});

export default FrigoPaddle;
