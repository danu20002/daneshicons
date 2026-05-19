import React from 'react';

export const iconData = {
  "id": "VeteroCorridor",
  "name": "VeteroCorridor",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.39 12.00 a 7.61 7.61 0 1 0 15.22 0 a 7.61 7.61 0 1 0 -15.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 12.00 a 4.79 4.79 0 1 1 9.58 0 a 4.79 4.79 0 1 1 -9.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.11 12.00 L 21.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.98 15.84 L 19.66 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 14.95 18.47 L 15.78 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 10.99 19.04 L 10.70 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 7.34 17.37 L 6.04 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 14.00 L 3.26 14.57"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 10.00 L 3.26 9.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.34 6.63 L 6.04 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 10.99 4.96 L 10.70 2.98"
      }
    ],
    [
      "path",
      {
        "d": "M 14.95 5.53 L 15.78 3.71"
      }
    ],
    [
      "path",
      {
        "d": "M 17.98 8.16 L 19.66 7.08"
      }
    ]
  ]
};

export const VeteroCorridor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.39 12.00 a 7.61 7.61 0 1 0 15.22 0 a 7.61 7.61 0 1 0 -15.22 0" />
      <path d="M 7.21 12.00 a 4.79 4.79 0 1 1 9.58 0 a 4.79 4.79 0 1 1 -9.58 0" />
      <path d="M 19.11 12.00 L 21.11 12.00" />
      <path d="M 17.98 15.84 L 19.66 16.92" />
      <path d="M 14.95 18.47 L 15.78 20.29" />
      <path d="M 10.99 19.04 L 10.70 21.02" />
      <path d="M 7.34 17.37 L 6.04 18.88" />
      <path d="M 5.18 14.00 L 3.26 14.57" />
      <path d="M 5.18 10.00 L 3.26 9.43" />
      <path d="M 7.34 6.63 L 6.04 5.12" />
      <path d="M 10.99 4.96 L 10.70 2.98" />
      <path d="M 14.95 5.53 L 15.78 3.71" />
      <path d="M 17.98 8.16 L 19.66 7.08" />
      {children}
    </svg>
  );
});

export default VeteroCorridor;
