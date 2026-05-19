import React from 'react';

export const iconData = {
  "id": "VertebraFlap",
  "name": "VertebraFlap",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 12.00 a 7.84 7.84 0 1 0 15.69 0 a 7.84 7.84 0 1 0 -15.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 12.00 a 5.30 5.30 0 1 1 10.61 0 a 5.30 5.30 0 1 1 -10.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.34 12.00 L 21.34 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 15.97 L 19.86 17.05"
      }
    ],
    [
      "path",
      {
        "d": "M 15.05 18.68 L 15.88 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 10.95 19.27 L 10.67 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 17.55 L 5.88 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 14.07 L 3.04 14.63"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 9.93 L 3.04 9.37"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 6.45 L 5.88 4.94"
      }
    ],
    [
      "path",
      {
        "d": "M 10.95 4.73 L 10.67 2.75"
      }
    ],
    [
      "path",
      {
        "d": "M 15.05 5.32 L 15.88 3.50"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 8.03 L 19.86 6.95"
      }
    ]
  ]
};

export const VertebraFlap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 12.00 a 7.84 7.84 0 1 0 15.69 0 a 7.84 7.84 0 1 0 -15.69 0" />
      <path d="M 6.70 12.00 a 5.30 5.30 0 1 1 10.61 0 a 5.30 5.30 0 1 1 -10.61 0" />
      <path d="M 19.34 12.00 L 21.34 12.00" />
      <path d="M 18.18 15.97 L 19.86 17.05" />
      <path d="M 15.05 18.68 L 15.88 20.50" />
      <path d="M 10.95 19.27 L 10.67 21.25" />
      <path d="M 7.19 17.55 L 5.88 19.06" />
      <path d="M 4.95 14.07 L 3.04 14.63" />
      <path d="M 4.95 9.93 L 3.04 9.37" />
      <path d="M 7.19 6.45 L 5.88 4.94" />
      <path d="M 10.95 4.73 L 10.67 2.75" />
      <path d="M 15.05 5.32 L 15.88 3.50" />
      <path d="M 18.18 8.03 L 19.86 6.95" />
      {children}
    </svg>
  );
});

export default VertebraFlap;
