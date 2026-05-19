import React from 'react';

export const iconData = {
  "id": "VolaticoCore",
  "name": "VolaticoCore",
  "category": "RE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.50 12.00 a 9.50 9.50 0 1 0 19.00 0 a 9.50 9.50 0 1 0 -19.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.50 12.00 a 9.50 2.849446167703718 0 1 0 19.00 0 a 9.50 2.849446167703718 0 1 0 -19.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 5.28 A 2 2 0 0 0 18.72 18.72"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 5.28 A 2 2 0 0 1 18.72 18.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.50 A 2 2 0 0 0 12.00 21.50"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.50 A 2 2 0 0 1 12.00 21.50"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 5.28 A 2 2 0 0 0 5.28 18.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 5.28 A 2 2 0 0 1 5.28 18.72"
      }
    ]
  ]
};

export const VolaticoCore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.50 12.00 a 9.50 9.50 0 1 0 19.00 0 a 9.50 9.50 0 1 0 -19.00 0" />
      <path d="M 2.50 12.00 a 9.50 2.849446167703718 0 1 0 19.00 0 a 9.50 2.849446167703718 0 1 0 -19.00 0" />
      <path d="M 18.72 5.28 A 2 2 0 0 0 18.72 18.72" />
      <path d="M 18.72 5.28 A 2 2 0 0 1 18.72 18.72" />
      <path d="M 12.00 2.50 A 2 2 0 0 0 12.00 21.50" />
      <path d="M 12.00 2.50 A 2 2 0 0 1 12.00 21.50" />
      <path d="M 5.28 5.28 A 2 2 0 0 0 5.28 18.72" />
      <path d="M 5.28 5.28 A 2 2 0 0 1 5.28 18.72" />
      {children}
    </svg>
  );
});

export default VolaticoCore;
