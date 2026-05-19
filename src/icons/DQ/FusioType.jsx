import React from 'react';

export const iconData = {
  "id": "FusioType",
  "name": "FusioType",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.00 12.00 a 2.00 2.00 0 1 0 4.01 0 a 2.00 2.00 0 1 0 -4.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 12.00 a 4.84 4.84 0 1 0 9.69 0 a 4.84 4.84 0 1 0 -9.69 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 12.00 a 7.68 7.68 0 1 0 15.37 0 a 7.68 7.68 0 1 0 -15.37 0"
      }
    ]
  ]
};

export const FusioType = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.00 12.00 a 2.00 2.00 0 1 0 4.01 0 a 2.00 2.00 0 1 0 -4.01 0" />
      <path d="M 7.16 12.00 a 4.84 4.84 0 1 0 9.69 0 a 4.84 4.84 0 1 0 -9.69 0" stroke-dasharray="5 3" />
      <path d="M 4.32 12.00 a 7.68 7.68 0 1 0 15.37 0 a 7.68 7.68 0 1 0 -15.37 0" />
      {children}
    </svg>
  );
});

export default FusioType;
