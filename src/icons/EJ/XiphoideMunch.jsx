import React from 'react';

export const iconData = {
  "id": "XiphoideMunch",
  "name": "XiphoideMunch",
  "category": "EJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 12.00 a 3.79 3.79 0 1 0 7.58 0 a 3.79 3.79 0 1 0 -7.58 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 6.48 12.00 a 5.52 5.52 0 1 0 11.04 0 a 5.52 5.52 0 1 0 -11.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 12.00 a 6.84 6.84 0 1 0 13.67 0 a 6.84 6.84 0 1 0 -13.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 12.00 a 8.50 8.50 0 1 0 17.00 0 a 8.50 8.50 0 1 0 -17.00 0"
      }
    ]
  ]
};

export const XiphoideMunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0" />
      <path d="M 8.21 12.00 a 3.79 3.79 0 1 0 7.58 0 a 3.79 3.79 0 1 0 -7.58 0" stroke-dasharray="6 1" />
      <path d="M 6.48 12.00 a 5.52 5.52 0 1 0 11.04 0 a 5.52 5.52 0 1 0 -11.04 0" />
      <path d="M 5.16 12.00 a 6.84 6.84 0 1 0 13.67 0 a 6.84 6.84 0 1 0 -13.67 0" />
      <path d="M 3.50 12.00 a 8.50 8.50 0 1 0 17.00 0 a 8.50 8.50 0 1 0 -17.00 0" />
      {children}
    </svg>
  );
});

export default XiphoideMunch;
