import React from 'react';

export const iconData = {
  "id": "VentoSatin",
  "name": "VentoSatin",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 12.00 a 2.17 2.17 0 1 0 4.34 0 a 2.17 2.17 0 1 0 -4.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.14 12.00 a 4.86 4.86 0 1 0 9.71 0 a 4.86 4.86 0 1 0 -9.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 12.00 a 7.52 7.52 0 1 0 15.05 0 a 7.52 7.52 0 1 0 -15.05 0",
        "stroke-dasharray": "5 3"
      }
    ]
  ]
};

export const VentoSatin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 12.00 a 2.17 2.17 0 1 0 4.34 0 a 2.17 2.17 0 1 0 -4.34 0" />
      <path d="M 7.14 12.00 a 4.86 4.86 0 1 0 9.71 0 a 4.86 4.86 0 1 0 -9.71 0" />
      <path d="M 4.48 12.00 a 7.52 7.52 0 1 0 15.05 0 a 7.52 7.52 0 1 0 -15.05 0" stroke-dasharray="5 3" />
      {children}
    </svg>
  );
});

export default VentoSatin;
