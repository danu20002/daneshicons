import React from 'react';

export const iconData = {
  "id": "CelerHarbor",
  "name": "CelerHarbor",
  "category": "LR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.92 12.00 a 2.08 2.08 0 1 0 4.16 0 a 2.08 2.08 0 1 0 -4.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 12.00 a 3.75 3.75 0 1 0 7.49 0 a 3.75 3.75 0 1 0 -7.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 12.00 a 5.61 5.61 0 1 0 11.21 0 a 5.61 5.61 0 1 0 -11.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 12.00 a 7.25 7.25 0 1 0 14.49 0 a 7.25 7.25 0 1 0 -14.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0"
      }
    ]
  ]
};

export const CelerHarbor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.92 12.00 a 2.08 2.08 0 1 0 4.16 0 a 2.08 2.08 0 1 0 -4.16 0" />
      <path d="M 8.25 12.00 a 3.75 3.75 0 1 0 7.49 0 a 3.75 3.75 0 1 0 -7.49 0" />
      <path d="M 6.39 12.00 a 5.61 5.61 0 1 0 11.21 0 a 5.61 5.61 0 1 0 -11.21 0" />
      <path d="M 4.75 12.00 a 7.25 7.25 0 1 0 14.49 0 a 7.25 7.25 0 1 0 -14.49 0" />
      <path d="M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0" />
      {children}
    </svg>
  );
});

export default CelerHarbor;
