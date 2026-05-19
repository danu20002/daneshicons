import React from 'react';

export const iconData = {
  "id": "ErgoOlympic",
  "name": "ErgoOlympic",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 12.00 a 3.96 3.96 0 1 0 7.92 0 a 3.96 3.96 0 1 0 -7.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 12.00 a 5.58 5.58 0 1 0 11.17 0 a 5.58 5.58 0 1 0 -11.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 12.00 a 7.13 7.13 0 1 0 14.27 0 a 7.13 7.13 0 1 0 -14.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.12 12.00 a 8.88 8.88 0 1 0 17.76 0 a 8.88 8.88 0 1 0 -17.76 0"
      }
    ]
  ]
};

export const ErgoOlympic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0" />
      <path d="M 8.04 12.00 a 3.96 3.96 0 1 0 7.92 0 a 3.96 3.96 0 1 0 -7.92 0" />
      <path d="M 6.42 12.00 a 5.58 5.58 0 1 0 11.17 0 a 5.58 5.58 0 1 0 -11.17 0" />
      <path d="M 4.87 12.00 a 7.13 7.13 0 1 0 14.27 0 a 7.13 7.13 0 1 0 -14.27 0" />
      <path d="M 3.12 12.00 a 8.88 8.88 0 1 0 17.76 0 a 8.88 8.88 0 1 0 -17.76 0" />
      {children}
    </svg>
  );
});

export default ErgoOlympic;
