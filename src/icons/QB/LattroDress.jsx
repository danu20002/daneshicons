import React from 'react';

export const iconData = {
  "id": "LattroDress",
  "name": "LattroDress",
  "category": "QB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 12.00 a 2.28 2.28 0 1 0 4.56 0 a 2.28 2.28 0 1 0 -4.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.69 12.00 a 6.31 6.31 0 1 0 12.61 0 a 6.31 6.31 0 1 0 -12.61 0",
        "stroke-dasharray": "3 3"
      }
    ]
  ]
};

export const LattroDress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 12.00 a 2.28 2.28 0 1 0 4.56 0 a 2.28 2.28 0 1 0 -4.56 0" />
      <path d="M 5.69 12.00 a 6.31 6.31 0 1 0 12.61 0 a 6.31 6.31 0 1 0 -12.61 0" stroke-dasharray="3 3" />
      {children}
    </svg>
  );
});

export default LattroDress;
