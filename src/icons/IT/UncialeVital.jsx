import React from 'react';

export const iconData = {
  "id": "UncialeVital",
  "name": "UncialeVital",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.53 12.00 a 2.47 2.47 0 1 0 4.93 0 a 2.47 2.47 0 1 0 -4.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.11 12.00 a 4.89 4.89 0 1 0 9.77 0 a 4.89 4.89 0 1 0 -9.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.26 12.00 a 7.74 7.74 0 1 0 15.49 0 a 7.74 7.74 0 1 0 -15.49 0",
        "stroke-dasharray": "6 2"
      }
    ]
  ]
};

export const UncialeVital = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.53 12.00 a 2.47 2.47 0 1 0 4.93 0 a 2.47 2.47 0 1 0 -4.93 0" />
      <path d="M 7.11 12.00 a 4.89 4.89 0 1 0 9.77 0 a 4.89 4.89 0 1 0 -9.77 0" />
      <path d="M 4.26 12.00 a 7.74 7.74 0 1 0 15.49 0 a 7.74 7.74 0 1 0 -15.49 0" stroke-dasharray="6 2" />
      {children}
    </svg>
  );
});

export default UncialeVital;
