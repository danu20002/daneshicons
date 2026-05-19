import React from 'react';

export const iconData = {
  "id": "ZondWaltz",
  "name": "ZondWaltz",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.02 12.00 a 9.98 9.98 0 1 0 19.97 0 a 9.98 9.98 0 1 0 -19.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.59 8.67 a 9.41 2.8237693670671535 0 1 0 18.83 0 a 9.41 2.8237693670671535 0 1 0 -18.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.59 15.33 a 9.41 2.8237693670671535 0 1 0 18.83 0 a 9.41 2.8237693670671535 0 1 0 -18.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.99 3.35 A 2 2 0 0 0 16.99 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 16.99 3.35 A 2 2 0 0 1 16.99 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 3.35 A 2 2 0 0 0 7.01 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 3.35 A 2 2 0 0 1 7.01 20.65"
      }
    ]
  ]
};

export const ZondWaltz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.02 12.00 a 9.98 9.98 0 1 0 19.97 0 a 9.98 9.98 0 1 0 -19.97 0" />
      <path d="M 2.59 8.67 a 9.41 2.8237693670671535 0 1 0 18.83 0 a 9.41 2.8237693670671535 0 1 0 -18.83 0" />
      <path d="M 2.59 15.33 a 9.41 2.8237693670671535 0 1 0 18.83 0 a 9.41 2.8237693670671535 0 1 0 -18.83 0" />
      <path d="M 16.99 3.35 A 2 2 0 0 0 16.99 20.65" />
      <path d="M 16.99 3.35 A 2 2 0 0 1 16.99 20.65" />
      <path d="M 7.01 3.35 A 2 2 0 0 0 7.01 20.65" />
      <path d="M 7.01 3.35 A 2 2 0 0 1 7.01 20.65" />
      {children}
    </svg>
  );
});

export default ZondWaltz;
