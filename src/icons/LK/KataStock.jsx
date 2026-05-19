import React from 'react';

export const iconData = {
  "id": "KataStock",
  "name": "KataStock",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.11 12.00 a 7.89 7.89 0 1 0 15.78 0 a 7.89 7.89 0 1 0 -15.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 12.00 a 5.04 5.04 0 1 1 10.08 0 a 5.04 5.04 0 1 1 -10.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.39 12.00 L 21.39 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.61 17.78 L 17.86 19.34"
      }
    ],
    [
      "path",
      {
        "d": "M 10.36 19.21 L 9.91 21.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 15.21 L 3.54 16.07"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 8.79 L 3.54 7.93"
      }
    ],
    [
      "path",
      {
        "d": "M 10.36 4.79 L 9.91 2.84"
      }
    ],
    [
      "path",
      {
        "d": "M 16.61 6.22 L 17.86 4.66"
      }
    ]
  ]
};

export const KataStock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.11 12.00 a 7.89 7.89 0 1 0 15.78 0 a 7.89 7.89 0 1 0 -15.78 0" />
      <path d="M 6.96 12.00 a 5.04 5.04 0 1 1 10.08 0 a 5.04 5.04 0 1 1 -10.08 0" />
      <path d="M 19.39 12.00 L 21.39 12.00" />
      <path d="M 16.61 17.78 L 17.86 19.34" />
      <path d="M 10.36 19.21 L 9.91 21.16" />
      <path d="M 5.34 15.21 L 3.54 16.07" />
      <path d="M 5.34 8.79 L 3.54 7.93" />
      <path d="M 10.36 4.79 L 9.91 2.84" />
      <path d="M 16.61 6.22 L 17.86 4.66" />
      {children}
    </svg>
  );
});

export default KataStock;
