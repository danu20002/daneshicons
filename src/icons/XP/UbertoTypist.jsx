import React from 'react';

export const iconData = {
  "id": "UbertoTypist",
  "name": "UbertoTypist",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.05 11.81 C 21.17 16.27, 2.00 21.19, 20.15 15.82"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 11.75 Q 21.25 7.24 10.66 2.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 15.17 A 4.12 2.20 35 0 0 19.93 3.34"
      }
    ],
    [
      "path",
      {
        "d": "M 17.80 21.08 C 5.82 8.95, 12.13 21.78, 3.08 2.43"
      }
    ],
    [
      "path",
      {
        "d": "M 16.75 21.76 C 9.49 18.49, 10.15 18.38, 8.62 12.72"
      }
    ],
    [
      "path",
      {
        "d": "M 21.16 17.72 L 12.13 6.81 L 5.76 6.03 L 18.06 7.14"
      }
    ]
  ]
};

export const UbertoTypist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.05 11.81 C 21.17 16.27, 2.00 21.19, 20.15 15.82" />
      <path d="M 3.13 11.75 Q 21.25 7.24 10.66 2.76" />
      <path d="M 7.96 15.17 A 4.12 2.20 35 0 0 19.93 3.34" />
      <path d="M 17.80 21.08 C 5.82 8.95, 12.13 21.78, 3.08 2.43" />
      <path d="M 16.75 21.76 C 9.49 18.49, 10.15 18.38, 8.62 12.72" />
      <path d="M 21.16 17.72 L 12.13 6.81 L 5.76 6.03 L 18.06 7.14" />
      {children}
    </svg>
  );
});

export default UbertoTypist;
