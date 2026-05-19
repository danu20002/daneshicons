import React from 'react';

export const iconData = {
  "id": "RenoTrigger",
  "name": "RenoTrigger",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 12.00 a 7.13 7.13 0 1 1 14.27 0 a 7.13 7.13 0 1 1 -14.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.23 12.00 L 22.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 17.82 L 19.24 19.24"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.23 L 12.00 22.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.18 17.82 L 4.76 19.24"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 12.00 L 1.77 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.18 6.18 L 4.76 4.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.77 L 12.00 1.77"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 6.18 L 19.24 4.76"
      }
    ]
  ]
};

export const RenoTrigger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0" />
      <path d="M 4.87 12.00 a 7.13 7.13 0 1 1 14.27 0 a 7.13 7.13 0 1 1 -14.27 0" />
      <path d="M 20.23 12.00 L 22.23 12.00" />
      <path d="M 17.82 17.82 L 19.24 19.24" />
      <path d="M 12.00 20.23 L 12.00 22.23" />
      <path d="M 6.18 17.82 L 4.76 19.24" />
      <path d="M 3.77 12.00 L 1.77 12.00" />
      <path d="M 6.18 6.18 L 4.76 4.76" />
      <path d="M 12.00 3.77 L 12.00 1.77" />
      <path d="M 17.82 6.18 L 19.24 4.76" />
      {children}
    </svg>
  );
});

export default RenoTrigger;
