import React from 'react';

export const iconData = {
  "id": "XilinoShaft",
  "name": "XilinoShaft",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 12.00 a 4.87 4.87 0 1 0 9.73 0 a 4.87 4.87 0 1 0 -9.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 12.00 a 7.51 7.51 0 1 0 15.02 0 a 7.51 7.51 0 1 0 -15.02 0"
      }
    ]
  ]
};

export const XilinoShaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0" />
      <path d="M 7.13 12.00 a 4.87 4.87 0 1 0 9.73 0 a 4.87 4.87 0 1 0 -9.73 0" />
      <path d="M 4.49 12.00 a 7.51 7.51 0 1 0 15.02 0 a 7.51 7.51 0 1 0 -15.02 0" />
      {children}
    </svg>
  );
});

export default XilinoShaft;
