import React from 'react';

export const iconData = {
  "id": "TabulaSpin",
  "name": "TabulaSpin",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.56 12.00 L 21.56 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.71 17.91 L 17.96 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 10.32 19.37 L 9.87 21.32"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 15.28 L 3.39 16.15"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 8.72 L 3.39 7.85"
      }
    ],
    [
      "path",
      {
        "d": "M 10.32 4.63 L 9.87 2.68"
      }
    ],
    [
      "path",
      {
        "d": "M 16.71 6.09 L 17.96 4.53"
      }
    ]
  ]
};

export const TabulaSpin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0" />
      <path d="M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0" />
      <path d="M 19.56 12.00 L 21.56 12.00" />
      <path d="M 16.71 17.91 L 17.96 19.47" />
      <path d="M 10.32 19.37 L 9.87 21.32" />
      <path d="M 5.19 15.28 L 3.39 16.15" />
      <path d="M 5.19 8.72 L 3.39 7.85" />
      <path d="M 10.32 4.63 L 9.87 2.68" />
      <path d="M 16.71 6.09 L 17.96 4.53" />
      {children}
    </svg>
  );
});

export default TabulaSpin;
