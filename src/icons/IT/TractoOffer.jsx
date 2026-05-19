import React from 'react';

export const iconData = {
  "id": "TractoOffer",
  "name": "TractoOffer",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 12.00 a 2.22 2.22 0 1 0 4.44 0 a 2.22 2.22 0 1 0 -4.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 12.00 a 3.85 3.85 0 1 0 7.69 0 a 3.85 3.85 0 1 0 -7.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.69 12.00 a 5.31 5.31 0 1 0 10.62 0 a 5.31 5.31 0 1 0 -10.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 12.00 a 7.00 7.00 0 1 0 13.99 0 a 7.00 7.00 0 1 0 -13.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 12.00 a 8.74 8.74 0 1 0 17.48 0 a 8.74 8.74 0 1 0 -17.48 0"
      }
    ]
  ]
};

export const TractoOffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 12.00 a 2.22 2.22 0 1 0 4.44 0 a 2.22 2.22 0 1 0 -4.44 0" />
      <path d="M 8.15 12.00 a 3.85 3.85 0 1 0 7.69 0 a 3.85 3.85 0 1 0 -7.69 0" />
      <path d="M 6.69 12.00 a 5.31 5.31 0 1 0 10.62 0 a 5.31 5.31 0 1 0 -10.62 0" />
      <path d="M 5.00 12.00 a 7.00 7.00 0 1 0 13.99 0 a 7.00 7.00 0 1 0 -13.99 0" />
      <path d="M 3.26 12.00 a 8.74 8.74 0 1 0 17.48 0 a 8.74 8.74 0 1 0 -17.48 0" />
      {children}
    </svg>
  );
});

export default TractoOffer;
