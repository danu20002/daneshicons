import React from 'react';

export const iconData = {
  "id": "DuraEdition",
  "name": "DuraEdition",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 12.00 a 7.43 7.43 0 1 0 14.87 0 a 7.43 7.43 0 1 0 -14.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.35 12.00 a 5.65 5.65 0 1 1 11.30 0 a 5.65 5.65 0 1 1 -11.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 12.00 L 20.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.61 16.08 L 19.23 17.25"
      }
    ],
    [
      "path",
      {
        "d": "M 14.14 18.59 L 14.76 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 9.86 18.59 L 9.24 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 16.08 L 4.77 17.25"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 12.00 L 3.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 7.92 L 4.77 6.75"
      }
    ],
    [
      "path",
      {
        "d": "M 9.86 5.41 L 9.24 3.50"
      }
    ],
    [
      "path",
      {
        "d": "M 14.14 5.41 L 14.76 3.50"
      }
    ],
    [
      "path",
      {
        "d": "M 17.61 7.92 L 19.23 6.75"
      }
    ]
  ]
};

export const DuraEdition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 12.00 a 7.43 7.43 0 1 0 14.87 0 a 7.43 7.43 0 1 0 -14.87 0" />
      <path d="M 6.35 12.00 a 5.65 5.65 0 1 1 11.30 0 a 5.65 5.65 0 1 1 -11.30 0" />
      <path d="M 18.93 12.00 L 20.93 12.00" />
      <path d="M 17.61 16.08 L 19.23 17.25" />
      <path d="M 14.14 18.59 L 14.76 20.50" />
      <path d="M 9.86 18.59 L 9.24 20.50" />
      <path d="M 6.39 16.08 L 4.77 17.25" />
      <path d="M 5.07 12.00 L 3.07 12.00" />
      <path d="M 6.39 7.92 L 4.77 6.75" />
      <path d="M 9.86 5.41 L 9.24 3.50" />
      <path d="M 14.14 5.41 L 14.76 3.50" />
      <path d="M 17.61 7.92 L 19.23 6.75" />
      {children}
    </svg>
  );
});

export default DuraEdition;
