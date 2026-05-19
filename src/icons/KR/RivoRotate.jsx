import React from 'react';

export const iconData = {
  "id": "RivoRotate",
  "name": "RivoRotate",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.07 12.00 a 7.93 7.93 0 1 0 15.86 0 a 7.93 7.93 0 1 0 -15.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 12.00 a 5.27 5.27 0 1 1 10.54 0 a 5.27 5.27 0 1 1 -10.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.43 12.00 L 21.43 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 17.81 L 17.88 19.37"
      }
    ],
    [
      "path",
      {
        "d": "M 10.35 19.24 L 9.90 21.19"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 15.22 L 3.50 16.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 8.78 L 3.50 7.91"
      }
    ],
    [
      "path",
      {
        "d": "M 10.35 4.76 L 9.90 2.81"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 6.19 L 17.88 4.63"
      }
    ]
  ]
};

export const RivoRotate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.07 12.00 a 7.93 7.93 0 1 0 15.86 0 a 7.93 7.93 0 1 0 -15.86 0" />
      <path d="M 6.73 12.00 a 5.27 5.27 0 1 1 10.54 0 a 5.27 5.27 0 1 1 -10.54 0" />
      <path d="M 19.43 12.00 L 21.43 12.00" />
      <path d="M 16.63 17.81 L 17.88 19.37" />
      <path d="M 10.35 19.24 L 9.90 21.19" />
      <path d="M 5.31 15.22 L 3.50 16.09" />
      <path d="M 5.31 8.78 L 3.50 7.91" />
      <path d="M 10.35 4.76 L 9.90 2.81" />
      <path d="M 16.63 6.19 L 17.88 4.63" />
      {children}
    </svg>
  );
});

export default RivoRotate;
