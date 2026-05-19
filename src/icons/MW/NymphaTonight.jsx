import React from 'react';

export const iconData = {
  "id": "NymphaTonight",
  "name": "NymphaTonight",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.52 12.00 a 7.48 7.48 0 1 0 14.95 0 a 7.48 7.48 0 1 0 -14.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 12.00 a 5.34 5.34 0 1 1 10.68 0 a 5.34 5.34 0 1 1 -10.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 12.00 L 20.98 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.49 18.04 L 16.49 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 8.51 18.04 L 7.51 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 12.00 L 3.02 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.51 5.96 L 7.51 4.23"
      }
    ],
    [
      "path",
      {
        "d": "M 15.49 5.96 L 16.49 4.23"
      }
    ]
  ]
};

export const NymphaTonight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.52 12.00 a 7.48 7.48 0 1 0 14.95 0 a 7.48 7.48 0 1 0 -14.95 0" />
      <path d="M 6.66 12.00 a 5.34 5.34 0 1 1 10.68 0 a 5.34 5.34 0 1 1 -10.68 0" />
      <path d="M 18.98 12.00 L 20.98 12.00" />
      <path d="M 15.49 18.04 L 16.49 19.77" />
      <path d="M 8.51 18.04 L 7.51 19.77" />
      <path d="M 5.02 12.00 L 3.02 12.00" />
      <path d="M 8.51 5.96 L 7.51 4.23" />
      <path d="M 15.49 5.96 L 16.49 4.23" />
      {children}
    </svg>
  );
});

export default NymphaTonight;
