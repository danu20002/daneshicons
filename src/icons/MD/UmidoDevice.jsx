import React from 'react';

export const iconData = {
  "id": "UmidoDevice",
  "name": "UmidoDevice",
  "category": "MD",
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
        "d": "M 7.06 12.00 a 4.94 4.94 0 1 1 9.88 0 a 4.94 4.94 0 1 1 -9.88 0"
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
        "d": "M 18.43 15.71 L 20.16 16.71"
      }
    ],
    [
      "path",
      {
        "d": "M 15.71 18.43 L 16.71 20.16"
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
        "d": "M 8.29 18.43 L 7.29 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 15.71 L 3.84 16.71"
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
        "d": "M 5.57 8.29 L 3.84 7.29"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 5.57 L 7.29 3.84"
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
        "d": "M 15.71 5.57 L 16.71 3.84"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 8.29 L 20.16 7.29"
      }
    ]
  ]
};

export const UmidoDevice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.06 12.00 a 4.94 4.94 0 1 1 9.88 0 a 4.94 4.94 0 1 1 -9.88 0" />
      <path d="M 19.42 12.00 L 21.42 12.00" />
      <path d="M 18.43 15.71 L 20.16 16.71" />
      <path d="M 15.71 18.43 L 16.71 20.16" />
      <path d="M 12.00 19.42 L 12.00 21.42" />
      <path d="M 8.29 18.43 L 7.29 20.16" />
      <path d="M 5.57 15.71 L 3.84 16.71" />
      <path d="M 4.58 12.00 L 2.58 12.00" />
      <path d="M 5.57 8.29 L 3.84 7.29" />
      <path d="M 8.29 5.57 L 7.29 3.84" />
      <path d="M 12.00 4.58 L 12.00 2.58" />
      <path d="M 15.71 5.57 L 16.71 3.84" />
      <path d="M 18.43 8.29 L 20.16 7.29" />
      {children}
    </svg>
  );
});

export default UmidoDevice;
