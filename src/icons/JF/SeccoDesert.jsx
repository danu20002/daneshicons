import React from 'react';

export const iconData = {
  "id": "SeccoDesert",
  "name": "SeccoDesert",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.08 12.00 a 7.92 7.92 0 1 0 15.84 0 a 7.92 7.92 0 1 0 -15.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 12.00 a 6.13 6.13 0 1 1 12.26 0 a 6.13 6.13 0 1 1 -12.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.42 12.00 L 21.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 15.71 L 20.16 16.71"
      }
    ],
    [
      "path",
      {
        "d": "M 15.71 18.42 L 16.71 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.42 L 12.00 21.42"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 18.42 L 7.29 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 15.71 L 3.84 16.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.58 12.00 L 2.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 8.29 L 3.84 7.29"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 5.58 L 7.29 3.84"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.58 L 12.00 2.58"
      }
    ],
    [
      "path",
      {
        "d": "M 15.71 5.58 L 16.71 3.84"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 8.29 L 20.16 7.29"
      }
    ]
  ]
};

export const SeccoDesert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.08 12.00 a 7.92 7.92 0 1 0 15.84 0 a 7.92 7.92 0 1 0 -15.84 0" />
      <path d="M 5.87 12.00 a 6.13 6.13 0 1 1 12.26 0 a 6.13 6.13 0 1 1 -12.26 0" />
      <path d="M 19.42 12.00 L 21.42 12.00" />
      <path d="M 18.42 15.71 L 20.16 16.71" />
      <path d="M 15.71 18.42 L 16.71 20.16" />
      <path d="M 12.00 19.42 L 12.00 21.42" />
      <path d="M 8.29 18.42 L 7.29 20.16" />
      <path d="M 5.58 15.71 L 3.84 16.71" />
      <path d="M 4.58 12.00 L 2.58 12.00" />
      <path d="M 5.58 8.29 L 3.84 7.29" />
      <path d="M 8.29 5.58 L 7.29 3.84" />
      <path d="M 12.00 4.58 L 12.00 2.58" />
      <path d="M 15.71 5.58 L 16.71 3.84" />
      <path d="M 18.42 8.29 L 20.16 7.29" />
      {children}
    </svg>
  );
});

export default SeccoDesert;
