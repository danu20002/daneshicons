import React from 'react';

export const iconData = {
  "id": "LiquidoGimbal",
  "name": "LiquidoGimbal",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.51 12.00 a 7.49 7.49 0 1 0 14.98 0 a 7.49 7.49 0 1 0 -14.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 12.00 a 5.76 5.76 0 1 1 11.53 0 a 5.76 5.76 0 1 1 -11.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.99 12.00 L 20.99 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 15.50 L 19.79 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 15.50 18.05 L 16.50 19.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.99 L 12.00 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 8.50 18.05 L 7.50 19.79"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 15.50 L 4.21 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 12.00 L 3.01 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 8.50 L 4.21 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 8.50 5.95 L 7.50 4.21"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.01 L 12.00 3.01"
      }
    ],
    [
      "path",
      {
        "d": "M 15.50 5.95 L 16.50 4.21"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 8.50 L 19.79 7.50"
      }
    ]
  ]
};

export const LiquidoGimbal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.51 12.00 a 7.49 7.49 0 1 0 14.98 0 a 7.49 7.49 0 1 0 -14.98 0" />
      <path d="M 6.24 12.00 a 5.76 5.76 0 1 1 11.53 0 a 5.76 5.76 0 1 1 -11.53 0" />
      <path d="M 18.99 12.00 L 20.99 12.00" />
      <path d="M 18.05 15.50 L 19.79 16.50" />
      <path d="M 15.50 18.05 L 16.50 19.79" />
      <path d="M 12.00 18.99 L 12.00 20.99" />
      <path d="M 8.50 18.05 L 7.50 19.79" />
      <path d="M 5.95 15.50 L 4.21 16.50" />
      <path d="M 5.01 12.00 L 3.01 12.00" />
      <path d="M 5.95 8.50 L 4.21 7.50" />
      <path d="M 8.50 5.95 L 7.50 4.21" />
      <path d="M 12.00 5.01 L 12.00 3.01" />
      <path d="M 15.50 5.95 L 16.50 4.21" />
      <path d="M 18.05 8.50 L 19.79 7.50" />
      {children}
    </svg>
  );
});

export default LiquidoGimbal;
