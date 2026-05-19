import React from 'react';

export const iconData = {
  "id": "TricloCorner",
  "name": "TricloCorner",
  "category": "VE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 12.00 a 5.14 5.14 0 1 0 10.28 0 a 5.14 5.14 0 1 0 -10.28 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 12.00 a 7.65 7.65 0 1 0 15.29 0 a 7.65 7.65 0 1 0 -15.29 0"
      }
    ]
  ]
};

export const TricloCorner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0" />
      <path d="M 6.86 12.00 a 5.14 5.14 0 1 0 10.28 0 a 5.14 5.14 0 1 0 -10.28 0" stroke-dasharray="3 1" />
      <path d="M 4.35 12.00 a 7.65 7.65 0 1 0 15.29 0 a 7.65 7.65 0 1 0 -15.29 0" />
      {children}
    </svg>
  );
});

export default TricloCorner;
