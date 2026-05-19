import React from 'react';

export const iconData = {
  "id": "VisioneVest",
  "name": "VisioneVest",
  "category": "RE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.63 12.00 a 9.37 9.37 0 1 0 18.75 0 a 9.37 9.37 0 1 0 -18.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.16 8.88 a 8.84 2.6515354832715716 0 1 0 17.68 0 a 8.84 2.6515354832715716 0 1 0 -17.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.16 15.12 a 8.84 2.651535483271572 0 1 0 17.68 0 a 8.84 2.651535483271572 0 1 0 -17.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 3.88 A 2 2 0 0 0 16.69 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 3.88 A 2 2 0 0 1 16.69 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 3.88 A 2 2 0 0 0 7.31 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 3.88 A 2 2 0 0 1 7.31 20.12"
      }
    ]
  ]
};

export const VisioneVest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.63 12.00 a 9.37 9.37 0 1 0 18.75 0 a 9.37 9.37 0 1 0 -18.75 0" />
      <path d="M 3.16 8.88 a 8.84 2.6515354832715716 0 1 0 17.68 0 a 8.84 2.6515354832715716 0 1 0 -17.68 0" />
      <path d="M 3.16 15.12 a 8.84 2.651535483271572 0 1 0 17.68 0 a 8.84 2.651535483271572 0 1 0 -17.68 0" />
      <path d="M 16.69 3.88 A 2 2 0 0 0 16.69 20.12" />
      <path d="M 16.69 3.88 A 2 2 0 0 1 16.69 20.12" />
      <path d="M 7.31 3.88 A 2 2 0 0 0 7.31 20.12" />
      <path d="M 7.31 3.88 A 2 2 0 0 1 7.31 20.12" />
      {children}
    </svg>
  );
});

export default VisioneVest;
