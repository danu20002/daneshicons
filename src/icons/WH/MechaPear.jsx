import React from 'react';

export const iconData = {
  "id": "MechaPear",
  "name": "MechaPear",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.02 12.00 a 8.98 8.98 0 1 0 17.96 0 a 8.98 8.98 0 1 0 -17.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 7.51 a 7.78 2.3335763964288505 0 1 0 15.56 0 a 7.78 2.3335763964288505 0 1 0 -15.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 12.00 a 8.98 2.6945819213055073 0 1 0 17.96 0 a 8.98 2.6945819213055073 0 1 0 -17.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 16.49 a 7.78 2.3335763964288505 0 1 0 15.56 0 a 7.78 2.3335763964288505 0 1 0 -15.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.02 A 2 2 0 0 0 12.00 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.02 A 2 2 0 0 1 12.00 20.98"
      }
    ]
  ]
};

export const MechaPear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.02 12.00 a 8.98 8.98 0 1 0 17.96 0 a 8.98 8.98 0 1 0 -17.96 0" />
      <path d="M 4.22 7.51 a 7.78 2.3335763964288505 0 1 0 15.56 0 a 7.78 2.3335763964288505 0 1 0 -15.56 0" />
      <path d="M 3.02 12.00 a 8.98 2.6945819213055073 0 1 0 17.96 0 a 8.98 2.6945819213055073 0 1 0 -17.96 0" />
      <path d="M 4.22 16.49 a 7.78 2.3335763964288505 0 1 0 15.56 0 a 7.78 2.3335763964288505 0 1 0 -15.56 0" />
      <path d="M 12.00 3.02 A 2 2 0 0 0 12.00 20.98" />
      <path d="M 12.00 3.02 A 2 2 0 0 1 12.00 20.98" />
      {children}
    </svg>
  );
});

export default MechaPear;
