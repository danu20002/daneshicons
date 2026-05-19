import React from 'react';

export const iconData = {
  "id": "TriboCanoe",
  "name": "TriboCanoe",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.48 12.00 a 9.52 9.52 0 1 0 19.04 0 a 9.52 9.52 0 1 0 -19.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 8.83 a 8.98 2.69336156884548 0 1 0 17.96 0 a 8.98 2.69336156884548 0 1 0 -17.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.02 15.17 a 8.98 2.69336156884548 0 1 0 17.96 0 a 8.98 2.69336156884548 0 1 0 -17.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.73 5.27 A 2 2 0 0 0 18.73 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 18.73 5.27 A 2 2 0 0 1 18.73 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.48 A 2 2 0 0 0 12.00 21.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.48 A 2 2 0 0 1 12.00 21.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 5.27 A 2 2 0 0 0 5.27 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 5.27 A 2 2 0 0 1 5.27 18.73"
      }
    ]
  ]
};

export const TriboCanoe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.48 12.00 a 9.52 9.52 0 1 0 19.04 0 a 9.52 9.52 0 1 0 -19.04 0" />
      <path d="M 3.02 8.83 a 8.98 2.69336156884548 0 1 0 17.96 0 a 8.98 2.69336156884548 0 1 0 -17.96 0" />
      <path d="M 3.02 15.17 a 8.98 2.69336156884548 0 1 0 17.96 0 a 8.98 2.69336156884548 0 1 0 -17.96 0" />
      <path d="M 18.73 5.27 A 2 2 0 0 0 18.73 18.73" />
      <path d="M 18.73 5.27 A 2 2 0 0 1 18.73 18.73" />
      <path d="M 12.00 2.48 A 2 2 0 0 0 12.00 21.52" />
      <path d="M 12.00 2.48 A 2 2 0 0 1 12.00 21.52" />
      <path d="M 5.27 5.27 A 2 2 0 0 0 5.27 18.73" />
      <path d="M 5.27 5.27 A 2 2 0 0 1 5.27 18.73" />
      {children}
    </svg>
  );
});

export default TriboCanoe;
