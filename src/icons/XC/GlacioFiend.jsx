import React from 'react';

export const iconData = {
  "id": "GlacioFiend",
  "name": "GlacioFiend",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.32 12.00 a 7.68 7.68 0 1 0 15.36 0 a 7.68 7.68 0 1 0 -15.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 12.00 a 5.47 5.47 0 1 1 10.95 0 a 5.47 5.47 0 1 1 -10.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 12.00 L 21.18 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.04 15.88 L 19.72 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 18.53 L 15.81 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 19.11 L 10.69 21.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 17.43 L 5.99 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 14.02 L 3.19 14.59"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 9.98 L 3.19 9.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 6.57 L 5.99 5.06"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 4.89 L 10.69 2.92"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 5.47 L 15.81 3.65"
      }
    ],
    [
      "path",
      {
        "d": "M 18.04 8.12 L 19.72 7.04"
      }
    ]
  ]
};

export const GlacioFiend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.32 12.00 a 7.68 7.68 0 1 0 15.36 0 a 7.68 7.68 0 1 0 -15.36 0" />
      <path d="M 6.53 12.00 a 5.47 5.47 0 1 1 10.95 0 a 5.47 5.47 0 1 1 -10.95 0" />
      <path d="M 19.18 12.00 L 21.18 12.00" />
      <path d="M 18.04 15.88 L 19.72 16.96" />
      <path d="M 14.98 18.53 L 15.81 20.35" />
      <path d="M 10.98 19.11 L 10.69 21.08" />
      <path d="M 7.30 17.43 L 5.99 18.94" />
      <path d="M 5.11 14.02 L 3.19 14.59" />
      <path d="M 5.11 9.98 L 3.19 9.41" />
      <path d="M 7.30 6.57 L 5.99 5.06" />
      <path d="M 10.98 4.89 L 10.69 2.92" />
      <path d="M 14.98 5.47 L 15.81 3.65" />
      <path d="M 18.04 8.12 L 19.72 7.04" />
      {children}
    </svg>
  );
});

export default GlacioFiend;
