import React from 'react';

export const iconData = {
  "id": "FantoSuperb",
  "name": "FantoSuperb",
  "category": "JW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 9.16 a 8.04 2.412776943190423 0 1 0 16.09 0 a 8.04 2.412776943190423 0 1 0 -16.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 14.84 a 8.04 2.412776943190423 0 1 0 16.09 0 a 8.04 2.412776943190423 0 1 0 -16.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 5.97 A 2 2 0 0 0 18.03 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 5.97 A 2 2 0 0 1 18.03 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.47 A 2 2 0 0 0 12.00 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.47 A 2 2 0 0 1 12.00 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 5.97 A 2 2 0 0 0 5.97 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 5.97 A 2 2 0 0 1 5.97 18.03"
      }
    ]
  ]
};

export const FantoSuperb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0" />
      <path d="M 3.96 9.16 a 8.04 2.412776943190423 0 1 0 16.09 0 a 8.04 2.412776943190423 0 1 0 -16.09 0" />
      <path d="M 3.96 14.84 a 8.04 2.412776943190423 0 1 0 16.09 0 a 8.04 2.412776943190423 0 1 0 -16.09 0" />
      <path d="M 18.03 5.97 A 2 2 0 0 0 18.03 18.03" />
      <path d="M 18.03 5.97 A 2 2 0 0 1 18.03 18.03" />
      <path d="M 12.00 3.47 A 2 2 0 0 0 12.00 20.53" />
      <path d="M 12.00 3.47 A 2 2 0 0 1 12.00 20.53" />
      <path d="M 5.97 5.97 A 2 2 0 0 0 5.97 18.03" />
      <path d="M 5.97 5.97 A 2 2 0 0 1 5.97 18.03" />
      {children}
    </svg>
  );
});

export default FantoSuperb;
