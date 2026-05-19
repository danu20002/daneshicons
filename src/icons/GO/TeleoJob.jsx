import React from 'react';

export const iconData = {
  "id": "TeleoJob",
  "name": "TeleoJob",
  "category": "GO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.84 12.00 a 5.16 5.16 0 1 0 10.31 0 a 5.16 5.16 0 1 0 -10.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 12.00 a 7.64 7.64 0 1 0 15.27 0 a 7.64 7.64 0 1 0 -15.27 0",
        "stroke-dasharray": "2 1"
      }
    ]
  ]
};

export const TeleoJob = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0" />
      <path d="M 6.84 12.00 a 5.16 5.16 0 1 0 10.31 0 a 5.16 5.16 0 1 0 -10.31 0" />
      <path d="M 4.36 12.00 a 7.64 7.64 0 1 0 15.27 0 a 7.64 7.64 0 1 0 -15.27 0" stroke-dasharray="2 1" />
      {children}
    </svg>
  );
});

export default TeleoJob;
