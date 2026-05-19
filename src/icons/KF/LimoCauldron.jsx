import React from 'react';

export const iconData = {
  "id": "LimoCauldron",
  "name": "LimoCauldron",
  "category": "KF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.98 12.00 a 2.02 2.02 0 1 0 4.04 0 a 2.02 2.02 0 1 0 -4.04 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 12.00 a 4.03 4.03 0 1 0 8.06 0 a 4.03 4.03 0 1 0 -8.06 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 12.00 a 5.40 5.40 0 1 0 10.79 0 a 5.40 5.40 0 1 0 -10.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 12.00 a 6.99 6.99 0 1 0 13.98 0 a 6.99 6.99 0 1 0 -13.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0"
      }
    ]
  ]
};

export const LimoCauldron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.98 12.00 a 2.02 2.02 0 1 0 4.04 0 a 2.02 2.02 0 1 0 -4.04 0" stroke-dasharray="4 1" />
      <path d="M 7.97 12.00 a 4.03 4.03 0 1 0 8.06 0 a 4.03 4.03 0 1 0 -8.06 0" stroke-dasharray="3 1" />
      <path d="M 6.60 12.00 a 5.40 5.40 0 1 0 10.79 0 a 5.40 5.40 0 1 0 -10.79 0" />
      <path d="M 5.01 12.00 a 6.99 6.99 0 1 0 13.98 0 a 6.99 6.99 0 1 0 -13.98 0" />
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0" />
      {children}
    </svg>
  );
});

export default LimoCauldron;
