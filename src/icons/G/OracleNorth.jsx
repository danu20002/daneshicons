import React from 'react';

export const iconData = {
  "id": "OracleNorth",
  "name": "OracleNorth",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.07 0 a 2.03 2.03 0 1 0 -4.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 12.00 a 6.13 6.13 0 1 0 12.26 0 a 6.13 6.13 0 1 0 -12.26 0",
        "stroke-dasharray": "3 2"
      }
    ]
  ]
};

export const OracleNorth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.07 0 a 2.03 2.03 0 1 0 -4.07 0" />
      <path d="M 5.87 12.00 a 6.13 6.13 0 1 0 12.26 0 a 6.13 6.13 0 1 0 -12.26 0" stroke-dasharray="3 2" />
      {children}
    </svg>
  );
});

export default OracleNorth;
