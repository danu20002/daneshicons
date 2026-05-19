import React from 'react';

export const iconData = {
  "id": "TrasfigSleeve",
  "name": "TrasfigSleeve",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.91 12.00 a 8.09 8.09 0 1 0 16.19 0 a 8.09 8.09 0 1 0 -16.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 12.00 a 6.12 6.12 0 1 1 12.25 0 a 6.12 6.12 0 1 1 -12.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.59 12.00 L 21.59 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 17.94 L 17.98 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 10.31 19.40 L 9.87 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 15.29 L 3.36 16.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 8.71 L 3.36 7.84"
      }
    ],
    [
      "path",
      {
        "d": "M 10.31 4.60 L 9.87 2.65"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 6.06 L 17.98 4.50"
      }
    ]
  ]
};

export const TrasfigSleeve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.91 12.00 a 8.09 8.09 0 1 0 16.19 0 a 8.09 8.09 0 1 0 -16.19 0" />
      <path d="M 5.88 12.00 a 6.12 6.12 0 1 1 12.25 0 a 6.12 6.12 0 1 1 -12.25 0" />
      <path d="M 19.59 12.00 L 21.59 12.00" />
      <path d="M 16.73 17.94 L 17.98 19.50" />
      <path d="M 10.31 19.40 L 9.87 21.35" />
      <path d="M 5.16 15.29 L 3.36 16.16" />
      <path d="M 5.16 8.71 L 3.36 7.84" />
      <path d="M 10.31 4.60 L 9.87 2.65" />
      <path d="M 16.73 6.06 L 17.98 4.50" />
      {children}
    </svg>
  );
});

export default TrasfigSleeve;
