import React from 'react';

export const iconData = {
  "id": "XenicoDoubt",
  "name": "XenicoDoubt",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.00 12.00 a 8.00 8.00 0 1 0 16.00 0 a 8.00 8.00 0 1 0 -16.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 12.00 a 5.22 5.22 0 1 1 10.43 0 a 5.22 5.22 0 1 1 -10.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.50 12.00 L 21.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 15.75 L 20.23 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 15.75 18.50 L 16.75 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.50 L 12.00 21.50"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 18.50 L 7.25 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 15.75 L 3.77 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 12.00 L 2.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 8.25 L 3.77 7.25"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 5.50 L 7.25 3.77"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.50 L 12.00 2.50"
      }
    ],
    [
      "path",
      {
        "d": "M 15.75 5.50 L 16.75 3.77"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 8.25 L 20.23 7.25"
      }
    ]
  ]
};

export const XenicoDoubt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.00 12.00 a 8.00 8.00 0 1 0 16.00 0 a 8.00 8.00 0 1 0 -16.00 0" />
      <path d="M 6.78 12.00 a 5.22 5.22 0 1 1 10.43 0 a 5.22 5.22 0 1 1 -10.43 0" />
      <path d="M 19.50 12.00 L 21.50 12.00" />
      <path d="M 18.50 15.75 L 20.23 16.75" />
      <path d="M 15.75 18.50 L 16.75 20.23" />
      <path d="M 12.00 19.50 L 12.00 21.50" />
      <path d="M 8.25 18.50 L 7.25 20.23" />
      <path d="M 5.50 15.75 L 3.77 16.75" />
      <path d="M 4.50 12.00 L 2.50 12.00" />
      <path d="M 5.50 8.25 L 3.77 7.25" />
      <path d="M 8.25 5.50 L 7.25 3.77" />
      <path d="M 12.00 4.50 L 12.00 2.50" />
      <path d="M 15.75 5.50 L 16.75 3.77" />
      <path d="M 18.50 8.25 L 20.23 7.25" />
      {children}
    </svg>
  );
});

export default XenicoDoubt;
