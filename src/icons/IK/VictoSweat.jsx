import React from 'react';

export const iconData = {
  "id": "VictoSweat",
  "name": "VictoSweat",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.21 12.00 a 9.79 9.79 0 1 0 19.57 0 a 9.79 9.79 0 1 0 -19.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.21 12.00 a 9.79 2.93565662833862 0 1 0 19.57 0 a 9.79 2.93565662833862 0 1 0 -19.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 5.08 A 2 2 0 0 0 18.92 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 5.08 A 2 2 0 0 1 18.92 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.21 A 2 2 0 0 0 12.00 21.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.21 A 2 2 0 0 1 12.00 21.79"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 5.08 A 2 2 0 0 0 5.08 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 5.08 A 2 2 0 0 1 5.08 18.92"
      }
    ]
  ]
};

export const VictoSweat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.21 12.00 a 9.79 9.79 0 1 0 19.57 0 a 9.79 9.79 0 1 0 -19.57 0" />
      <path d="M 2.21 12.00 a 9.79 2.93565662833862 0 1 0 19.57 0 a 9.79 2.93565662833862 0 1 0 -19.57 0" />
      <path d="M 18.92 5.08 A 2 2 0 0 0 18.92 18.92" />
      <path d="M 18.92 5.08 A 2 2 0 0 1 18.92 18.92" />
      <path d="M 12.00 2.21 A 2 2 0 0 0 12.00 21.79" />
      <path d="M 12.00 2.21 A 2 2 0 0 1 12.00 21.79" />
      <path d="M 5.08 5.08 A 2 2 0 0 0 5.08 18.92" />
      <path d="M 5.08 5.08 A 2 2 0 0 1 5.08 18.92" />
      {children}
    </svg>
  );
});

export default VictoSweat;
