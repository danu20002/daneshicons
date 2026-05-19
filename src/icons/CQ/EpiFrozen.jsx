import React from 'react';

export const iconData = {
  "id": "EpiFrozen",
  "name": "EpiFrozen",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 12.00 a 8.81 8.81 0 1 0 17.62 0 a 8.81 8.81 0 1 0 -17.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 1 12.30 0 a 6.15 6.15 0 1 1 -12.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.31 12.00 L 22.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.20 16.16 L 20.93 17.16"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 19.20 L 17.16 20.93"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.31 L 12.00 22.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 19.20 L 6.84 20.93"
      }
    ],
    [
      "path",
      {
        "d": "M 4.80 16.16 L 3.07 17.16"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 12.00 L 1.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.80 7.84 L 3.07 6.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 4.80 L 6.84 3.07"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.69 L 12.00 1.69"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 4.80 L 17.16 3.07"
      }
    ],
    [
      "path",
      {
        "d": "M 19.20 7.84 L 20.93 6.84"
      }
    ]
  ]
};

export const EpiFrozen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 12.00 a 8.81 8.81 0 1 0 17.62 0 a 8.81 8.81 0 1 0 -17.62 0" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 1 12.30 0 a 6.15 6.15 0 1 1 -12.30 0" />
      <path d="M 20.31 12.00 L 22.31 12.00" />
      <path d="M 19.20 16.16 L 20.93 17.16" />
      <path d="M 16.16 19.20 L 17.16 20.93" />
      <path d="M 12.00 20.31 L 12.00 22.31" />
      <path d="M 7.84 19.20 L 6.84 20.93" />
      <path d="M 4.80 16.16 L 3.07 17.16" />
      <path d="M 3.69 12.00 L 1.69 12.00" />
      <path d="M 4.80 7.84 L 3.07 6.84" />
      <path d="M 7.84 4.80 L 6.84 3.07" />
      <path d="M 12.00 3.69 L 12.00 1.69" />
      <path d="M 16.16 4.80 L 17.16 3.07" />
      <path d="M 19.20 7.84 L 20.93 6.84" />
      {children}
    </svg>
  );
});

export default EpiFrozen;
