import React from 'react';

export const iconData = {
  "id": "ZondTall",
  "name": "ZondTall",
  "category": "LI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.83 12.00 a 9.17 9.17 0 1 0 18.35 0 a 9.17 9.17 0 1 0 -18.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 12.00 a 9.17 2.7517509922385215 0 1 0 18.35 0 a 9.17 2.7517509922385215 0 1 0 -18.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.59 4.06 A 2 2 0 0 0 16.59 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 16.59 4.06 A 2 2 0 0 1 16.59 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 4.06 A 2 2 0 0 0 7.41 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 4.06 A 2 2 0 0 1 7.41 19.94"
      }
    ]
  ]
};

export const ZondTall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.83 12.00 a 9.17 9.17 0 1 0 18.35 0 a 9.17 9.17 0 1 0 -18.35 0" />
      <path d="M 2.83 12.00 a 9.17 2.7517509922385215 0 1 0 18.35 0 a 9.17 2.7517509922385215 0 1 0 -18.35 0" />
      <path d="M 16.59 4.06 A 2 2 0 0 0 16.59 19.94" />
      <path d="M 16.59 4.06 A 2 2 0 0 1 16.59 19.94" />
      <path d="M 7.41 4.06 A 2 2 0 0 0 7.41 19.94" />
      <path d="M 7.41 4.06 A 2 2 0 0 1 7.41 19.94" />
      {children}
    </svg>
  );
});

export default ZondTall;
