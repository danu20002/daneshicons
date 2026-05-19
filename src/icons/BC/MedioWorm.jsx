import React from 'react';

export const iconData = {
  "id": "MedioWorm",
  "name": "MedioWorm",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.03 12.00 a 9.97 9.97 0 1 0 19.94 0 a 9.97 9.97 0 1 0 -19.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.36 7.01 a 8.64 2.59057802428748 0 1 0 17.27 0 a 8.64 2.59057802428748 0 1 0 -17.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.03 12.00 a 9.97 2.9913418393582103 0 1 0 19.94 0 a 9.97 2.9913418393582103 0 1 0 -19.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.36 16.99 a 8.64 2.59057802428748 0 1 0 17.27 0 a 8.64 2.59057802428748 0 1 0 -17.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.99 3.36 A 2 2 0 0 0 16.99 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 16.99 3.36 A 2 2 0 0 1 16.99 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 3.36 A 2 2 0 0 0 7.01 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 3.36 A 2 2 0 0 1 7.01 20.64"
      }
    ]
  ]
};

export const MedioWorm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.03 12.00 a 9.97 9.97 0 1 0 19.94 0 a 9.97 9.97 0 1 0 -19.94 0" />
      <path d="M 3.36 7.01 a 8.64 2.59057802428748 0 1 0 17.27 0 a 8.64 2.59057802428748 0 1 0 -17.27 0" />
      <path d="M 2.03 12.00 a 9.97 2.9913418393582103 0 1 0 19.94 0 a 9.97 2.9913418393582103 0 1 0 -19.94 0" />
      <path d="M 3.36 16.99 a 8.64 2.59057802428748 0 1 0 17.27 0 a 8.64 2.59057802428748 0 1 0 -17.27 0" />
      <path d="M 16.99 3.36 A 2 2 0 0 0 16.99 20.64" />
      <path d="M 16.99 3.36 A 2 2 0 0 1 16.99 20.64" />
      <path d="M 7.01 3.36 A 2 2 0 0 0 7.01 20.64" />
      <path d="M 7.01 3.36 A 2 2 0 0 1 7.01 20.64" />
      {children}
    </svg>
  );
});

export default MedioWorm;
