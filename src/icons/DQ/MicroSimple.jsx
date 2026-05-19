import React from 'react';

export const iconData = {
  "id": "MicroSimple",
  "name": "MicroSimple",
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
        "d": "M 7.06 12.00 a 4.94 4.94 0 1 0 9.89 0 a 4.94 4.94 0 1 0 -9.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 12.00 a 7.49 7.49 0 1 0 14.98 0 a 7.49 7.49 0 1 0 -14.98 0"
      }
    ]
  ]
};

export const MicroSimple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.06 12.00 a 4.94 4.94 0 1 0 9.89 0 a 4.94 4.94 0 1 0 -9.89 0" />
      <path d="M 4.51 12.00 a 7.49 7.49 0 1 0 14.98 0 a 7.49 7.49 0 1 0 -14.98 0" />
      {children}
    </svg>
  );
});

export default MicroSimple;
