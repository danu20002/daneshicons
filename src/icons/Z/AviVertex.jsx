import React from 'react';

export const iconData = {
  "id": "AviVertex",
  "name": "AviVertex",
  "category": "Z",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 12.00 a 2.28 2.28 0 1 0 4.56 0 a 2.28 2.28 0 1 0 -4.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 12.00 a 5.05 5.05 0 1 0 10.11 0 a 5.05 5.05 0 1 0 -10.11 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 12.00 a 7.83 7.83 0 1 0 15.66 0 a 7.83 7.83 0 1 0 -15.66 0"
      }
    ]
  ]
};

export const AviVertex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 12.00 a 2.28 2.28 0 1 0 4.56 0 a 2.28 2.28 0 1 0 -4.56 0" />
      <path d="M 6.95 12.00 a 5.05 5.05 0 1 0 10.11 0 a 5.05 5.05 0 1 0 -10.11 0" stroke-dasharray="6 1" />
      <path d="M 4.17 12.00 a 7.83 7.83 0 1 0 15.66 0 a 7.83 7.83 0 1 0 -15.66 0" />
      {children}
    </svg>
  );
});

export default AviVertex;
