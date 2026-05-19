import React from 'react';

export const iconData = {
  "id": "LevoScratch",
  "name": "LevoScratch",
  "category": "GO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.52 12.00 a 2.48 2.48 0 1 0 4.96 0 a 2.48 2.48 0 1 0 -4.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 12.00 a 4.09 4.09 0 1 0 8.18 0 a 4.09 4.09 0 1 0 -8.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 12.00 a 5.55 5.55 0 1 0 11.10 0 a 5.55 5.55 0 1 0 -11.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 12.00 a 7.09 7.09 0 1 0 14.17 0 a 7.09 7.09 0 1 0 -14.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 12.00 a 8.66 8.66 0 1 0 17.31 0 a 8.66 8.66 0 1 0 -17.31 0",
        "stroke-dasharray": "6 1"
      }
    ]
  ]
};

export const LevoScratch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.52 12.00 a 2.48 2.48 0 1 0 4.96 0 a 2.48 2.48 0 1 0 -4.96 0" />
      <path d="M 7.91 12.00 a 4.09 4.09 0 1 0 8.18 0 a 4.09 4.09 0 1 0 -8.18 0" />
      <path d="M 6.45 12.00 a 5.55 5.55 0 1 0 11.10 0 a 5.55 5.55 0 1 0 -11.10 0" />
      <path d="M 4.91 12.00 a 7.09 7.09 0 1 0 14.17 0 a 7.09 7.09 0 1 0 -14.17 0" />
      <path d="M 3.34 12.00 a 8.66 8.66 0 1 0 17.31 0 a 8.66 8.66 0 1 0 -17.31 0" stroke-dasharray="6 1" />
      {children}
    </svg>
  );
});

export default LevoScratch;
