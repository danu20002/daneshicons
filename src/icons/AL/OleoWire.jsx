import React from 'react';

export const iconData = {
  "id": "OleoWire",
  "name": "OleoWire",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 12.00 a 6.32 6.32 0 1 1 12.63 0 a 6.32 6.32 0 1 1 -12.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.94 12.00 L 21.94 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 16.29 L 20.36 17.37"
      }
    ],
    [
      "path",
      {
        "d": "M 15.30 19.22 L 16.13 21.04"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 19.86 L 10.59 21.84"
      }
    ],
    [
      "path",
      {
        "d": "M 6.80 18.00 L 5.49 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 14.24 L 2.46 14.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 9.76 L 2.46 9.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.80 6.00 L 5.49 4.49"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 4.14 L 10.59 2.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.30 4.78 L 16.13 2.96"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 7.71 L 20.36 6.63"
      }
    ]
  ]
};

export const OleoWire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.88 0 a 8.44 8.44 0 1 0 -16.88 0" />
      <path d="M 5.68 12.00 a 6.32 6.32 0 1 1 12.63 0 a 6.32 6.32 0 1 1 -12.63 0" />
      <path d="M 19.94 12.00 L 21.94 12.00" />
      <path d="M 18.68 16.29 L 20.36 17.37" />
      <path d="M 15.30 19.22 L 16.13 21.04" />
      <path d="M 10.87 19.86 L 10.59 21.84" />
      <path d="M 6.80 18.00 L 5.49 19.51" />
      <path d="M 4.38 14.24 L 2.46 14.80" />
      <path d="M 4.38 9.76 L 2.46 9.20" />
      <path d="M 6.80 6.00 L 5.49 4.49" />
      <path d="M 10.87 4.14 L 10.59 2.16" />
      <path d="M 15.30 4.78 L 16.13 2.96" />
      <path d="M 18.68 7.71 L 20.36 6.63" />
      {children}
    </svg>
  );
});

export default OleoWire;
