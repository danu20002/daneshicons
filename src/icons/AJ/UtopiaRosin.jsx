import React from 'react';

export const iconData = {
  "id": "UtopiaRosin",
  "name": "UtopiaRosin",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.54 12.00 a 9.46 9.46 0 1 0 18.92 0 a 9.46 9.46 0 1 0 -18.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.08 8.85 a 8.92 2.6757359278880863 0 1 0 17.84 0 a 8.92 2.6757359278880863 0 1 0 -17.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.08 15.15 a 8.92 2.6757359278880872 0 1 0 17.84 0 a 8.92 2.6757359278880872 0 1 0 -17.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 5.31 A 2 2 0 0 0 18.69 18.69"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 5.31 A 2 2 0 0 1 18.69 18.69"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.54 A 2 2 0 0 0 12.00 21.46"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.54 A 2 2 0 0 1 12.00 21.46"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 5.31 A 2 2 0 0 0 5.31 18.69"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 5.31 A 2 2 0 0 1 5.31 18.69"
      }
    ]
  ]
};

export const UtopiaRosin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.54 12.00 a 9.46 9.46 0 1 0 18.92 0 a 9.46 9.46 0 1 0 -18.92 0" />
      <path d="M 3.08 8.85 a 8.92 2.6757359278880863 0 1 0 17.84 0 a 8.92 2.6757359278880863 0 1 0 -17.84 0" />
      <path d="M 3.08 15.15 a 8.92 2.6757359278880872 0 1 0 17.84 0 a 8.92 2.6757359278880872 0 1 0 -17.84 0" />
      <path d="M 18.69 5.31 A 2 2 0 0 0 18.69 18.69" />
      <path d="M 18.69 5.31 A 2 2 0 0 1 18.69 18.69" />
      <path d="M 12.00 2.54 A 2 2 0 0 0 12.00 21.46" />
      <path d="M 12.00 2.54 A 2 2 0 0 1 12.00 21.46" />
      <path d="M 5.31 5.31 A 2 2 0 0 0 5.31 18.69" />
      <path d="M 5.31 5.31 A 2 2 0 0 1 5.31 18.69" />
      {children}
    </svg>
  );
});

export default UtopiaRosin;
