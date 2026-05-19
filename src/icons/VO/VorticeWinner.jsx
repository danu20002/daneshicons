import React from 'react';

export const iconData = {
  "id": "VorticeWinner",
  "name": "VorticeWinner",
  "category": "VO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.12 12.00 a 8.88 8.88 0 1 0 17.75 0 a 8.88 8.88 0 1 0 -17.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.12 12.00 a 8.88 2.663230221904814 0 1 0 17.75 0 a 8.88 2.663230221904814 0 1 0 -17.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.28 5.72 A 2 2 0 0 0 18.28 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 18.28 5.72 A 2 2 0 0 1 18.28 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.12 A 2 2 0 0 0 12.00 20.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.12 A 2 2 0 0 1 12.00 20.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 5.72 A 2 2 0 0 0 5.72 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 5.72 A 2 2 0 0 1 5.72 18.28"
      }
    ]
  ]
};

export const VorticeWinner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.12 12.00 a 8.88 8.88 0 1 0 17.75 0 a 8.88 8.88 0 1 0 -17.75 0" />
      <path d="M 3.12 12.00 a 8.88 2.663230221904814 0 1 0 17.75 0 a 8.88 2.663230221904814 0 1 0 -17.75 0" />
      <path d="M 18.28 5.72 A 2 2 0 0 0 18.28 18.28" />
      <path d="M 18.28 5.72 A 2 2 0 0 1 18.28 18.28" />
      <path d="M 12.00 3.12 A 2 2 0 0 0 12.00 20.88" />
      <path d="M 12.00 3.12 A 2 2 0 0 1 12.00 20.88" />
      <path d="M 5.72 5.72 A 2 2 0 0 0 5.72 18.28" />
      <path d="M 5.72 5.72 A 2 2 0 0 1 5.72 18.28" />
      {children}
    </svg>
  );
});

export default VorticeWinner;
