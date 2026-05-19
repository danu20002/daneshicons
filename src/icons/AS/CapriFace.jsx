import React from 'react';

export const iconData = {
  "id": "CapriFace",
  "name": "CapriFace",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.81 12.00 a 2.19 2.19 0 1 0 4.37 0 a 2.19 2.19 0 1 0 -4.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 12.00 a 3.99 3.99 0 1 0 7.97 0 a 3.99 3.99 0 1 0 -7.97 0",
        "stroke-dasharray": "4 1"
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
        "d": "M 4.97 12.00 a 7.03 7.03 0 1 0 14.06 0 a 7.03 7.03 0 1 0 -14.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 12.00 a 8.48 8.48 0 1 0 16.97 0 a 8.48 8.48 0 1 0 -16.97 0"
      }
    ]
  ]
};

export const CapriFace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.81 12.00 a 2.19 2.19 0 1 0 4.37 0 a 2.19 2.19 0 1 0 -4.37 0" />
      <path d="M 8.01 12.00 a 3.99 3.99 0 1 0 7.97 0 a 3.99 3.99 0 1 0 -7.97 0" stroke-dasharray="4 1" />
      <path d="M 6.69 12.00 a 5.31 5.31 0 1 0 10.62 0 a 5.31 5.31 0 1 0 -10.62 0" />
      <path d="M 4.97 12.00 a 7.03 7.03 0 1 0 14.06 0 a 7.03 7.03 0 1 0 -14.06 0" />
      <path d="M 3.52 12.00 a 8.48 8.48 0 1 0 16.97 0 a 8.48 8.48 0 1 0 -16.97 0" />
      {children}
    </svg>
  );
});

export default CapriFace;
