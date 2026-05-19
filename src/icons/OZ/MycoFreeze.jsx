import React from 'react';

export const iconData = {
  "id": "MycoFreeze",
  "name": "MycoFreeze",
  "category": "OZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.19 0 a 8.60 8.60 0 1 0 -17.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 9.13 a 8.11 2.4315317909424894 0 1 0 16.21 0 a 8.11 2.4315317909424894 0 1 0 -16.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 14.87 a 8.11 2.4315317909424894 0 1 0 16.21 0 a 8.11 2.4315317909424894 0 1 0 -16.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.30 4.55 A 2 2 0 0 0 16.30 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 16.30 4.55 A 2 2 0 0 1 16.30 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.70 4.55 A 2 2 0 0 0 7.70 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.70 4.55 A 2 2 0 0 1 7.70 19.45"
      }
    ]
  ]
};

export const MycoFreeze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.19 0 a 8.60 8.60 0 1 0 -17.19 0" />
      <path d="M 3.89 9.13 a 8.11 2.4315317909424894 0 1 0 16.21 0 a 8.11 2.4315317909424894 0 1 0 -16.21 0" />
      <path d="M 3.89 14.87 a 8.11 2.4315317909424894 0 1 0 16.21 0 a 8.11 2.4315317909424894 0 1 0 -16.21 0" />
      <path d="M 16.30 4.55 A 2 2 0 0 0 16.30 19.45" />
      <path d="M 16.30 4.55 A 2 2 0 0 1 16.30 19.45" />
      <path d="M 7.70 4.55 A 2 2 0 0 0 7.70 19.45" />
      <path d="M 7.70 4.55 A 2 2 0 0 1 7.70 19.45" />
      {children}
    </svg>
  );
});

export default MycoFreeze;
