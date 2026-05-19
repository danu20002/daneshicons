import React from 'react';

export const iconData = {
  "id": "InfraFeast",
  "name": "InfraFeast",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 12.00 a 4.80 4.80 0 1 0 9.60 0 a 4.80 4.80 0 1 0 -9.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 12.00 a 7.44 7.44 0 1 0 14.89 0 a 7.44 7.44 0 1 0 -14.89 0",
        "stroke-dasharray": "2 1"
      }
    ]
  ]
};

export const InfraFeast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0" />
      <path d="M 7.20 12.00 a 4.80 4.80 0 1 0 9.60 0 a 4.80 4.80 0 1 0 -9.60 0" />
      <path d="M 4.56 12.00 a 7.44 7.44 0 1 0 14.89 0 a 7.44 7.44 0 1 0 -14.89 0" stroke-dasharray="2 1" />
      {children}
    </svg>
  );
});

export default InfraFeast;
