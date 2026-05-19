import React from 'react';

export const iconData = {
  "id": "VolutoSolve",
  "name": "VolutoSolve",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.61 18.58 L 2.87 11.11 L 7.00 4.31 L 14.90 3.30 L 20.61 8.84 L 19.84 16.76 L 13.17 21.10 Z"
      }
    ]
  ]
};

export const VolutoSolve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.61 18.58 L 2.87 11.11 L 7.00 4.31 L 14.90 3.30 L 20.61 8.84 L 19.84 16.76 L 13.17 21.10 Z" />
      {children}
    </svg>
  );
});

export default VolutoSolve;
