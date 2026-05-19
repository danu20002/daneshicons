import React from 'react';

export const iconData = {
  "id": "MechaPuppet",
  "name": "MechaPuppet",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.05 12.00 a 9.95 9.95 0 1 0 19.90 0 a 9.95 9.95 0 1 0 -19.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.05 12.00 a 9.95 2.9854884197004137 0 1 0 19.90 0 a 9.95 2.9854884197004137 0 1 0 -19.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 4.96 A 2 2 0 0 0 19.04 19.04"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 4.96 A 2 2 0 0 1 19.04 19.04"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.05 A 2 2 0 0 0 12.00 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.05 A 2 2 0 0 1 12.00 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 4.96 A 2 2 0 0 0 4.96 19.04"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 4.96 A 2 2 0 0 1 4.96 19.04"
      }
    ]
  ]
};

export const MechaPuppet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.05 12.00 a 9.95 9.95 0 1 0 19.90 0 a 9.95 9.95 0 1 0 -19.90 0" />
      <path d="M 2.05 12.00 a 9.95 2.9854884197004137 0 1 0 19.90 0 a 9.95 2.9854884197004137 0 1 0 -19.90 0" />
      <path d="M 19.04 4.96 A 2 2 0 0 0 19.04 19.04" />
      <path d="M 19.04 4.96 A 2 2 0 0 1 19.04 19.04" />
      <path d="M 12.00 2.05 A 2 2 0 0 0 12.00 21.95" />
      <path d="M 12.00 2.05 A 2 2 0 0 1 12.00 21.95" />
      <path d="M 4.96 4.96 A 2 2 0 0 0 4.96 19.04" />
      <path d="M 4.96 4.96 A 2 2 0 0 1 4.96 19.04" />
      {children}
    </svg>
  );
});

export default MechaPuppet;
