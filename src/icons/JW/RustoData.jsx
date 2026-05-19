import React from 'react';

export const iconData = {
  "id": "RustoData",
  "name": "RustoData",
  "category": "JW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.86 12.00 a 8.14 8.14 0 1 0 16.29 0 a 8.14 8.14 0 1 0 -16.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 9.29 a 7.68 2.3032285419956837 0 1 0 15.35 0 a 7.68 2.3032285419956837 0 1 0 -15.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 14.71 a 7.68 2.3032285419956837 0 1 0 15.35 0 a 7.68 2.3032285419956837 0 1 0 -15.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.76 6.24 A 2 2 0 0 0 17.76 17.76"
      }
    ],
    [
      "path",
      {
        "d": "M 17.76 6.24 A 2 2 0 0 1 17.76 17.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.86 A 2 2 0 0 0 12.00 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.86 A 2 2 0 0 1 12.00 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 6.24 A 2 2 0 0 0 6.24 17.76"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 6.24 A 2 2 0 0 1 6.24 17.76"
      }
    ]
  ]
};

export const RustoData = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.86 12.00 a 8.14 8.14 0 1 0 16.29 0 a 8.14 8.14 0 1 0 -16.29 0" />
      <path d="M 4.32 9.29 a 7.68 2.3032285419956837 0 1 0 15.35 0 a 7.68 2.3032285419956837 0 1 0 -15.35 0" />
      <path d="M 4.32 14.71 a 7.68 2.3032285419956837 0 1 0 15.35 0 a 7.68 2.3032285419956837 0 1 0 -15.35 0" />
      <path d="M 17.76 6.24 A 2 2 0 0 0 17.76 17.76" />
      <path d="M 17.76 6.24 A 2 2 0 0 1 17.76 17.76" />
      <path d="M 12.00 3.86 A 2 2 0 0 0 12.00 20.14" />
      <path d="M 12.00 3.86 A 2 2 0 0 1 12.00 20.14" />
      <path d="M 6.24 6.24 A 2 2 0 0 0 6.24 17.76" />
      <path d="M 6.24 6.24 A 2 2 0 0 1 6.24 17.76" />
      {children}
    </svg>
  );
});

export default RustoData;
