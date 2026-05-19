import React from 'react';

export const iconData = {
  "id": "EtherField",
  "name": "EtherField",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.24 12.00 a 8.76 8.76 0 1 0 17.52 0 a 8.76 8.76 0 1 0 -17.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.43 12.00 a 6.57 6.57 0 1 1 13.15 0 a 6.57 6.57 0 1 1 -13.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.26 12.00 L 22.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 16.86 L 20.30 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 14.55 19.86 L 15.17 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.45 19.86 L 8.83 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 16.86 L 3.70 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 12.00 L 1.74 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 7.14 L 3.70 5.97"
      }
    ],
    [
      "path",
      {
        "d": "M 9.45 4.14 L 8.83 2.24"
      }
    ],
    [
      "path",
      {
        "d": "M 14.55 4.14 L 15.17 2.24"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 7.14 L 20.30 5.97"
      }
    ]
  ]
};

export const EtherField = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.24 12.00 a 8.76 8.76 0 1 0 17.52 0 a 8.76 8.76 0 1 0 -17.52 0" />
      <path d="M 5.43 12.00 a 6.57 6.57 0 1 1 13.15 0 a 6.57 6.57 0 1 1 -13.15 0" />
      <path d="M 20.26 12.00 L 22.26 12.00" />
      <path d="M 18.68 16.86 L 20.30 18.03" />
      <path d="M 14.55 19.86 L 15.17 21.76" />
      <path d="M 9.45 19.86 L 8.83 21.76" />
      <path d="M 5.32 16.86 L 3.70 18.03" />
      <path d="M 3.74 12.00 L 1.74 12.00" />
      <path d="M 5.32 7.14 L 3.70 5.97" />
      <path d="M 9.45 4.14 L 8.83 2.24" />
      <path d="M 14.55 4.14 L 15.17 2.24" />
      <path d="M 18.68 7.14 L 20.30 5.97" />
      {children}
    </svg>
  );
});

export default EtherField;
