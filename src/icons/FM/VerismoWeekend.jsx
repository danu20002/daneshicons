import React from 'react';

export const iconData = {
  "id": "VerismoWeekend",
  "name": "VerismoWeekend",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.49 12.00 a 9.51 9.51 0 1 0 19.03 0 a 9.51 9.51 0 1 0 -19.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 8.83 a 8.97 2.690982406642491 0 1 0 17.94 0 a 8.97 2.690982406642491 0 1 0 -17.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 15.17 a 8.97 2.690982406642491 0 1 0 17.94 0 a 8.97 2.690982406642491 0 1 0 -17.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.49 A 2 2 0 0 0 12.00 21.51"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.49 A 2 2 0 0 1 12.00 21.51"
      }
    ]
  ]
};

export const VerismoWeekend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.49 12.00 a 9.51 9.51 0 1 0 19.03 0 a 9.51 9.51 0 1 0 -19.03 0" />
      <path d="M 3.03 8.83 a 8.97 2.690982406642491 0 1 0 17.94 0 a 8.97 2.690982406642491 0 1 0 -17.94 0" />
      <path d="M 3.03 15.17 a 8.97 2.690982406642491 0 1 0 17.94 0 a 8.97 2.690982406642491 0 1 0 -17.94 0" />
      <path d="M 12.00 2.49 A 2 2 0 0 0 12.00 21.51" />
      <path d="M 12.00 2.49 A 2 2 0 0 1 12.00 21.51" />
      {children}
    </svg>
  );
});

export default VerismoWeekend;
