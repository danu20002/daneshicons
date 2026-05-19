import React from 'react';

export const iconData = {
  "id": "MechaSqueeze",
  "name": "MechaSqueeze",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 12.00 a 8.28 8.28 0 1 0 16.57 0 a 8.28 8.28 0 1 0 -16.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 12.00 a 6.16 6.16 0 1 1 12.31 0 a 6.16 6.16 0 1 1 -12.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.78 12.00 L 21.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.50 17.50 L 18.92 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.78 L 12.00 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 17.50 L 5.08 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 12.00 L 2.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 6.50 L 5.08 5.08"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.22 L 12.00 2.22"
      }
    ],
    [
      "path",
      {
        "d": "M 17.50 6.50 L 18.92 5.08"
      }
    ]
  ]
};

export const MechaSqueeze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 12.00 a 8.28 8.28 0 1 0 16.57 0 a 8.28 8.28 0 1 0 -16.57 0" />
      <path d="M 5.84 12.00 a 6.16 6.16 0 1 1 12.31 0 a 6.16 6.16 0 1 1 -12.31 0" />
      <path d="M 19.78 12.00 L 21.78 12.00" />
      <path d="M 17.50 17.50 L 18.92 18.92" />
      <path d="M 12.00 19.78 L 12.00 21.78" />
      <path d="M 6.50 17.50 L 5.08 18.92" />
      <path d="M 4.22 12.00 L 2.22 12.00" />
      <path d="M 6.50 6.50 L 5.08 5.08" />
      <path d="M 12.00 4.22 L 12.00 2.22" />
      <path d="M 17.50 6.50 L 18.92 5.08" />
      {children}
    </svg>
  );
});

export default MechaSqueeze;
