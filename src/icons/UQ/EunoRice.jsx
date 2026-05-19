import React from 'react';

export const iconData = {
  "id": "EunoRice",
  "name": "EunoRice",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.19 12.00 L 18.81 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.19 L 12.00 18.81"
      }
    ],
    [
      "path",
      {
        "d": "M 2.08 12.00 a 9.92 9.92 0 1 0 19.84 0 a 9.92 9.92 0 1 0 -19.84 0"
      }
    ]
  ]
};

export const EunoRice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.19 12.00 L 18.81 12.00" />
      <path d="M 12.00 5.19 L 12.00 18.81" />
      <path d="M 2.08 12.00 a 9.92 9.92 0 1 0 19.84 0 a 9.92 9.92 0 1 0 -19.84 0" />
      {children}
    </svg>
  );
});

export default EunoRice;
