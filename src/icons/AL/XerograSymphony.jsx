import React from 'react';

export const iconData = {
  "id": "XerograSymphony",
  "name": "XerograSymphony",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.37 12.00 a 7.63 7.63 0 1 0 15.26 0 a 7.63 7.63 0 1 0 -15.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 12.00 a 6.08 6.08 0 1 1 12.17 0 a 6.08 6.08 0 1 1 -12.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.13 12.00 L 21.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.00 15.86 L 19.68 16.94"
      }
    ],
    [
      "path",
      {
        "d": "M 14.96 18.49 L 15.79 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 19.06 L 10.70 21.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 17.39 L 6.02 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 14.01 L 3.24 14.57"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 9.99 L 3.24 9.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 6.61 L 6.02 5.10"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 4.94 L 10.70 2.96"
      }
    ],
    [
      "path",
      {
        "d": "M 14.96 5.51 L 15.79 3.69"
      }
    ],
    [
      "path",
      {
        "d": "M 18.00 8.14 L 19.68 7.06"
      }
    ]
  ]
};

export const XerograSymphony = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.37 12.00 a 7.63 7.63 0 1 0 15.26 0 a 7.63 7.63 0 1 0 -15.26 0" />
      <path d="M 5.92 12.00 a 6.08 6.08 0 1 1 12.17 0 a 6.08 6.08 0 1 1 -12.17 0" />
      <path d="M 19.13 12.00 L 21.13 12.00" />
      <path d="M 18.00 15.86 L 19.68 16.94" />
      <path d="M 14.96 18.49 L 15.79 20.31" />
      <path d="M 10.98 19.06 L 10.70 21.04" />
      <path d="M 7.33 17.39 L 6.02 18.90" />
      <path d="M 5.16 14.01 L 3.24 14.57" />
      <path d="M 5.16 9.99 L 3.24 9.43" />
      <path d="M 7.33 6.61 L 6.02 5.10" />
      <path d="M 10.98 4.94 L 10.70 2.96" />
      <path d="M 14.96 5.51 L 15.79 3.69" />
      <path d="M 18.00 8.14 L 19.68 7.06" />
      {children}
    </svg>
  );
});

export default XerograSymphony;
