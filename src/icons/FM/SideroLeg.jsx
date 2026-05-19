import React from 'react';

export const iconData = {
  "id": "SideroLeg",
  "name": "SideroLeg",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.09 12.00 a 9.91 9.91 0 1 0 19.82 0 a 9.91 9.91 0 1 0 -19.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 6.05 a 7.93 2.378615582026541 0 1 0 15.86 0 a 7.93 2.378615582026541 0 1 0 -15.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.29 10.02 a 9.71 2.9131972350991258 0 1 0 19.42 0 a 9.71 2.9131972350991258 0 1 0 -19.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.29 13.98 a 9.71 2.9131972350991258 0 1 0 19.42 0 a 9.71 2.9131972350991258 0 1 0 -19.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 17.95 a 7.93 2.3786155820265416 0 1 0 15.86 0 a 7.93 2.3786155820265416 0 1 0 -15.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 3.42 A 2 2 0 0 0 16.96 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 3.42 A 2 2 0 0 1 16.96 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 3.42 A 2 2 0 0 0 7.04 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 3.42 A 2 2 0 0 1 7.04 20.58"
      }
    ]
  ]
};

export const SideroLeg = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.09 12.00 a 9.91 9.91 0 1 0 19.82 0 a 9.91 9.91 0 1 0 -19.82 0" />
      <path d="M 4.07 6.05 a 7.93 2.378615582026541 0 1 0 15.86 0 a 7.93 2.378615582026541 0 1 0 -15.86 0" />
      <path d="M 2.29 10.02 a 9.71 2.9131972350991258 0 1 0 19.42 0 a 9.71 2.9131972350991258 0 1 0 -19.42 0" />
      <path d="M 2.29 13.98 a 9.71 2.9131972350991258 0 1 0 19.42 0 a 9.71 2.9131972350991258 0 1 0 -19.42 0" />
      <path d="M 4.07 17.95 a 7.93 2.3786155820265416 0 1 0 15.86 0 a 7.93 2.3786155820265416 0 1 0 -15.86 0" />
      <path d="M 16.96 3.42 A 2 2 0 0 0 16.96 20.58" />
      <path d="M 16.96 3.42 A 2 2 0 0 1 16.96 20.58" />
      <path d="M 7.04 3.42 A 2 2 0 0 0 7.04 20.58" />
      <path d="M 7.04 3.42 A 2 2 0 0 1 7.04 20.58" />
      {children}
    </svg>
  );
});

export default SideroLeg;
