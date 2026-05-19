import React from 'react';

export const iconData = {
  "id": "LensoDay",
  "name": "LensoDay",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.85 12.00 a 2.15 2.15 0 1 0 4.31 0 a 2.15 2.15 0 1 0 -4.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 12.00 a 5.05 5.05 0 1 0 10.09 0 a 5.05 5.05 0 1 0 -10.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 12.00 a 7.64 7.64 0 1 0 15.28 0 a 7.64 7.64 0 1 0 -15.28 0"
      }
    ]
  ]
};

export const LensoDay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.85 12.00 a 2.15 2.15 0 1 0 4.31 0 a 2.15 2.15 0 1 0 -4.31 0" />
      <path d="M 6.95 12.00 a 5.05 5.05 0 1 0 10.09 0 a 5.05 5.05 0 1 0 -10.09 0" />
      <path d="M 4.36 12.00 a 7.64 7.64 0 1 0 15.28 0 a 7.64 7.64 0 1 0 -15.28 0" />
      {children}
    </svg>
  );
});

export default LensoDay;
