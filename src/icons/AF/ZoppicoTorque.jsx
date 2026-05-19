import React from 'react';

export const iconData = {
  "id": "ZoppicoTorque",
  "name": "ZoppicoTorque",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.40 3.11 C 19.54 17.67, 14.22 9.74, 4.79 3.35"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 5.20 Q 18.85 3.82 16.29 16.49"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 4.44 A 6.60 4.07 20 0 1 21.58 21.51"
      }
    ],
    [
      "path",
      {
        "d": "M 15.09 14.54 L 17.36 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 19.54 9.73 C 15.17 15.25, 16.61 5.68, 5.17 13.25"
      }
    ],
    [
      "path",
      {
        "d": "M 10.68 13.87 A 2.87 5.90 8 0 1 16.18 7.77"
      }
    ]
  ]
};

export const ZoppicoTorque = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.40 3.11 C 19.54 17.67, 14.22 9.74, 4.79 3.35" />
      <path d="M 18.58 5.20 Q 18.85 3.82 16.29 16.49" />
      <path d="M 4.01 4.44 A 6.60 4.07 20 0 1 21.58 21.51" />
      <path d="M 15.09 14.54 L 17.36 20.50" />
      <path d="M 19.54 9.73 C 15.17 15.25, 16.61 5.68, 5.17 13.25" />
      <path d="M 10.68 13.87 A 2.87 5.90 8 0 1 16.18 7.77" />
      {children}
    </svg>
  );
});

export default ZoppicoTorque;
