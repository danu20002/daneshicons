import React from 'react';

export const iconData = {
  "id": "NephroPound",
  "name": "NephroPound",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 12.00 a 2.41 2.41 0 1 0 4.81 0 a 2.41 2.41 0 1 0 -4.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.07 12.00 a 3.93 3.93 0 1 0 7.86 0 a 3.93 3.93 0 1 0 -7.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 12.00 a 5.23 5.23 0 1 0 10.46 0 a 5.23 5.23 0 1 0 -10.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 12.00 a 7.01 7.01 0 1 0 14.01 0 a 7.01 7.01 0 1 0 -14.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.16 12.00 a 8.84 8.84 0 1 0 17.68 0 a 8.84 8.84 0 1 0 -17.68 0",
        "stroke-dasharray": "3 3"
      }
    ]
  ]
};

export const NephroPound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 12.00 a 2.41 2.41 0 1 0 4.81 0 a 2.41 2.41 0 1 0 -4.81 0" />
      <path d="M 8.07 12.00 a 3.93 3.93 0 1 0 7.86 0 a 3.93 3.93 0 1 0 -7.86 0" />
      <path d="M 6.77 12.00 a 5.23 5.23 0 1 0 10.46 0 a 5.23 5.23 0 1 0 -10.46 0" />
      <path d="M 4.99 12.00 a 7.01 7.01 0 1 0 14.01 0 a 7.01 7.01 0 1 0 -14.01 0" />
      <path d="M 3.16 12.00 a 8.84 8.84 0 1 0 17.68 0 a 8.84 8.84 0 1 0 -17.68 0" stroke-dasharray="3 3" />
      {children}
    </svg>
  );
});

export default NephroPound;
