import React from 'react';

export const iconData = {
  "id": "VerdeFlock",
  "name": "VerdeFlock",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.22 12.00 Q 14.17 12.58 19.12 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 16.11 Q 13.59 13.59 16.11 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 19.12 Q 12.58 14.17 12.00 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.22 Q 11.42 14.17 7.89 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 19.12 Q 10.41 13.59 4.88 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 16.11 Q 9.83 12.58 3.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 12.00 Q 9.83 11.42 4.88 7.89"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 7.89 Q 10.41 10.41 7.89 4.88"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 4.88 Q 11.42 9.83 12.00 3.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.78 Q 12.58 9.83 16.11 4.88"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 4.88 Q 13.59 10.41 19.12 7.89"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 7.89 Q 14.17 11.42 20.22 12.00"
      }
    ]
  ]
};

export const VerdeFlock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.22 12.00 Q 14.17 12.58 19.12 16.11" />
      <path d="M 19.12 16.11 Q 13.59 13.59 16.11 19.12" />
      <path d="M 16.11 19.12 Q 12.58 14.17 12.00 20.22" />
      <path d="M 12.00 20.22 Q 11.42 14.17 7.89 19.12" />
      <path d="M 7.89 19.12 Q 10.41 13.59 4.88 16.11" />
      <path d="M 4.88 16.11 Q 9.83 12.58 3.78 12.00" />
      <path d="M 3.78 12.00 Q 9.83 11.42 4.88 7.89" />
      <path d="M 4.88 7.89 Q 10.41 10.41 7.89 4.88" />
      <path d="M 7.89 4.88 Q 11.42 9.83 12.00 3.78" />
      <path d="M 12.00 3.78 Q 12.58 9.83 16.11 4.88" />
      <path d="M 16.11 4.88 Q 13.59 10.41 19.12 7.89" />
      <path d="M 19.12 7.89 Q 14.17 11.42 20.22 12.00" />
      {children}
    </svg>
  );
});

export default VerdeFlock;
