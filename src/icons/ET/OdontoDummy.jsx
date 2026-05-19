import React from 'react';

export const iconData = {
  "id": "OdontoDummy",
  "name": "OdontoDummy",
  "category": "ET",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.51 12.00 a 9.49 9.49 0 1 0 18.97 0 a 9.49 9.49 0 1 0 -18.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.51 12.00 a 9.49 2.8455053464975206 0 1 0 18.97 0 a 9.49 2.8455053464975206 0 1 0 -18.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.74 3.79 A 2 2 0 0 0 16.74 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 16.74 3.79 A 2 2 0 0 1 16.74 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.26 3.79 A 2 2 0 0 0 7.26 20.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.26 3.79 A 2 2 0 0 1 7.26 20.21"
      }
    ]
  ]
};

export const OdontoDummy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.51 12.00 a 9.49 9.49 0 1 0 18.97 0 a 9.49 9.49 0 1 0 -18.97 0" />
      <path d="M 2.51 12.00 a 9.49 2.8455053464975206 0 1 0 18.97 0 a 9.49 2.8455053464975206 0 1 0 -18.97 0" />
      <path d="M 16.74 3.79 A 2 2 0 0 0 16.74 20.21" />
      <path d="M 16.74 3.79 A 2 2 0 0 1 16.74 20.21" />
      <path d="M 7.26 3.79 A 2 2 0 0 0 7.26 20.21" />
      <path d="M 7.26 3.79 A 2 2 0 0 1 7.26 20.21" />
      {children}
    </svg>
  );
});

export default OdontoDummy;
