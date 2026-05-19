import React from 'react';

export const iconData = {
  "id": "PhysioQuick",
  "name": "PhysioQuick",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.00 12.00 a 8.00 8.00 0 1 0 16.01 0 a 8.00 8.00 0 1 0 -16.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 12.00 a 6.04 6.04 0 1 1 12.08 0 a 6.04 6.04 0 1 1 -12.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.50 12.00 L 21.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.75 18.50 L 16.75 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 18.50 L 7.25 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 12.00 L 2.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 5.50 L 7.25 3.77"
      }
    ],
    [
      "path",
      {
        "d": "M 15.75 5.50 L 16.75 3.77"
      }
    ]
  ]
};

export const PhysioQuick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.00 12.00 a 8.00 8.00 0 1 0 16.01 0 a 8.00 8.00 0 1 0 -16.01 0" />
      <path d="M 5.96 12.00 a 6.04 6.04 0 1 1 12.08 0 a 6.04 6.04 0 1 1 -12.08 0" />
      <path d="M 19.50 12.00 L 21.50 12.00" />
      <path d="M 15.75 18.50 L 16.75 20.23" />
      <path d="M 8.25 18.50 L 7.25 20.23" />
      <path d="M 4.50 12.00 L 2.50 12.00" />
      <path d="M 8.25 5.50 L 7.25 3.77" />
      <path d="M 15.75 5.50 L 16.75 3.77" />
      {children}
    </svg>
  );
});

export default PhysioQuick;
