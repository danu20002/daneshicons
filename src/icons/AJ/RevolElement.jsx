import React from 'react';

export const iconData = {
  "id": "RevolElement",
  "name": "RevolElement",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.88 12.00 a 8.12 8.12 0 1 0 16.24 0 a 8.12 8.12 0 1 0 -16.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.88 12.00 a 8.12 2.4363983607385307 0 1 0 16.24 0 a 8.12 2.4363983607385307 0 1 0 -16.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 4.97 A 2 2 0 0 0 16.06 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 4.97 A 2 2 0 0 1 16.06 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 4.97 A 2 2 0 0 0 7.94 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 4.97 A 2 2 0 0 1 7.94 19.03"
      }
    ]
  ]
};

export const RevolElement = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.88 12.00 a 8.12 8.12 0 1 0 16.24 0 a 8.12 8.12 0 1 0 -16.24 0" />
      <path d="M 3.88 12.00 a 8.12 2.4363983607385307 0 1 0 16.24 0 a 8.12 2.4363983607385307 0 1 0 -16.24 0" />
      <path d="M 16.06 4.97 A 2 2 0 0 0 16.06 19.03" />
      <path d="M 16.06 4.97 A 2 2 0 0 1 16.06 19.03" />
      <path d="M 7.94 4.97 A 2 2 0 0 0 7.94 19.03" />
      <path d="M 7.94 4.97 A 2 2 0 0 1 7.94 19.03" />
      {children}
    </svg>
  );
});

export default RevolElement;
