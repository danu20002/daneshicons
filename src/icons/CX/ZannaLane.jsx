import React from 'react';

export const iconData = {
  "id": "ZannaLane",
  "name": "ZannaLane",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 12.00 a 2.34 2.34 0 1 0 4.69 0 a 2.34 2.34 0 1 0 -4.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 12.00 a 6.36 6.36 0 1 0 12.72 0 a 6.36 6.36 0 1 0 -12.72 0"
      }
    ]
  ]
};

export const ZannaLane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 12.00 a 2.34 2.34 0 1 0 4.69 0 a 2.34 2.34 0 1 0 -4.69 0" />
      <path d="M 5.64 12.00 a 6.36 6.36 0 1 0 12.72 0 a 6.36 6.36 0 1 0 -12.72 0" />
      {children}
    </svg>
  );
});

export default ZannaLane;
