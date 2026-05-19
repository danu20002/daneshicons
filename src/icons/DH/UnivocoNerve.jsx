import React from 'react';

export const iconData = {
  "id": "UnivocoNerve",
  "name": "UnivocoNerve",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 8.72 0 1 0 17.44 0 a 8.72 8.72 0 1 0 -17.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 7.64 a 7.55 2.2659745523983585 0 1 0 15.11 0 a 7.55 2.2659745523983585 0 1 0 -15.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 2.616522035608068 0 1 0 17.44 0 a 8.72 2.616522035608068 0 1 0 -17.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 16.36 a 7.55 2.2659745523983585 0 1 0 15.11 0 a 7.55 2.2659745523983585 0 1 0 -15.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.36 4.45 A 2 2 0 0 0 16.36 19.55"
      }
    ],
    [
      "path",
      {
        "d": "M 16.36 4.45 A 2 2 0 0 1 16.36 19.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 4.45 A 2 2 0 0 0 7.64 19.55"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 4.45 A 2 2 0 0 1 7.64 19.55"
      }
    ]
  ]
};

export const UnivocoNerve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 12.00 a 8.72 8.72 0 1 0 17.44 0 a 8.72 8.72 0 1 0 -17.44 0" />
      <path d="M 4.45 7.64 a 7.55 2.2659745523983585 0 1 0 15.11 0 a 7.55 2.2659745523983585 0 1 0 -15.11 0" />
      <path d="M 3.28 12.00 a 8.72 2.616522035608068 0 1 0 17.44 0 a 8.72 2.616522035608068 0 1 0 -17.44 0" />
      <path d="M 4.45 16.36 a 7.55 2.2659745523983585 0 1 0 15.11 0 a 7.55 2.2659745523983585 0 1 0 -15.11 0" />
      <path d="M 16.36 4.45 A 2 2 0 0 0 16.36 19.55" />
      <path d="M 16.36 4.45 A 2 2 0 0 1 16.36 19.55" />
      <path d="M 7.64 4.45 A 2 2 0 0 0 7.64 19.55" />
      <path d="M 7.64 4.45 A 2 2 0 0 1 7.64 19.55" />
      {children}
    </svg>
  );
});

export default UnivocoNerve;
