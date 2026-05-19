import React from 'react';

export const iconData = {
  "id": "CycloCanal",
  "name": "CycloCanal",
  "category": "GO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 12.00 a 5.04 5.04 0 1 0 10.08 0 a 5.04 5.04 0 1 0 -10.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 12.00 a 7.49 7.49 0 1 0 14.98 0 a 7.49 7.49 0 1 0 -14.98 0"
      }
    ]
  ]
};

export const CycloCanal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0" />
      <path d="M 6.96 12.00 a 5.04 5.04 0 1 0 10.08 0 a 5.04 5.04 0 1 0 -10.08 0" />
      <path d="M 4.51 12.00 a 7.49 7.49 0 1 0 14.98 0 a 7.49 7.49 0 1 0 -14.98 0" />
      {children}
    </svg>
  );
});

export default CycloCanal;
