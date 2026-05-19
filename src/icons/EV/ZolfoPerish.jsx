import React from 'react';

export const iconData = {
  "id": "ZolfoPerish",
  "name": "ZolfoPerish",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 12.00 a 8.27 8.27 0 1 0 16.54 0 a 8.27 8.27 0 1 0 -16.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 12.00 a 5.95 5.95 0 1 1 11.90 0 a 5.95 5.95 0 1 1 -11.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 12.00 L 21.77 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.49 17.49 L 18.91 18.91"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.77 L 12.00 21.77"
      }
    ],
    [
      "path",
      {
        "d": "M 6.51 17.49 L 5.09 18.91"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 12.00 L 2.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.51 6.51 L 5.09 5.09"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.23 L 12.00 2.23"
      }
    ],
    [
      "path",
      {
        "d": "M 17.49 6.51 L 18.91 5.09"
      }
    ]
  ]
};

export const ZolfoPerish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 12.00 a 8.27 8.27 0 1 0 16.54 0 a 8.27 8.27 0 1 0 -16.54 0" />
      <path d="M 6.05 12.00 a 5.95 5.95 0 1 1 11.90 0 a 5.95 5.95 0 1 1 -11.90 0" />
      <path d="M 19.77 12.00 L 21.77 12.00" />
      <path d="M 17.49 17.49 L 18.91 18.91" />
      <path d="M 12.00 19.77 L 12.00 21.77" />
      <path d="M 6.51 17.49 L 5.09 18.91" />
      <path d="M 4.23 12.00 L 2.23 12.00" />
      <path d="M 6.51 6.51 L 5.09 5.09" />
      <path d="M 12.00 4.23 L 12.00 2.23" />
      <path d="M 17.49 6.51 L 18.91 5.09" />
      {children}
    </svg>
  );
});

export default ZolfoPerish;
