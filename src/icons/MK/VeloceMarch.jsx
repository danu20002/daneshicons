import React from 'react';

export const iconData = {
  "id": "VeloceMarch",
  "name": "VeloceMarch",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 12.00 a 2.14 2.14 0 1 0 4.28 0 a 2.14 2.14 0 1 0 -4.28 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.11 12.00 a 4.89 4.89 0 1 0 9.78 0 a 4.89 4.89 0 1 0 -9.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 12.00 a 7.63 7.63 0 1 0 15.27 0 a 7.63 7.63 0 1 0 -15.27 0"
      }
    ]
  ]
};

export const VeloceMarch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 12.00 a 2.14 2.14 0 1 0 4.28 0 a 2.14 2.14 0 1 0 -4.28 0" stroke-dasharray="3 2" />
      <path d="M 7.11 12.00 a 4.89 4.89 0 1 0 9.78 0 a 4.89 4.89 0 1 0 -9.78 0" />
      <path d="M 4.37 12.00 a 7.63 7.63 0 1 0 15.27 0 a 7.63 7.63 0 1 0 -15.27 0" />
      {children}
    </svg>
  );
});

export default VeloceMarch;
