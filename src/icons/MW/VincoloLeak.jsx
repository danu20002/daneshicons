import React from 'react';

export const iconData = {
  "id": "VincoloLeak",
  "name": "VincoloLeak",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.50 12.00 a 8.50 8.50 0 1 0 17.00 0 a 8.50 8.50 0 1 0 -17.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.00 12.00 L 22.00 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.66 17.66 L 19.07 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.00 L 12.00 22.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 17.66 L 4.93 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 12.00 L 2.00 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 6.34 L 4.93 4.93"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.00 L 12.00 2.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.66 6.34 L 19.07 4.93"
      }
    ]
  ]
};

export const VincoloLeak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.50 12.00 a 8.50 8.50 0 1 0 17.00 0 a 8.50 8.50 0 1 0 -17.00 0" />
      <path d="M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0" />
      <path d="M 20.00 12.00 L 22.00 12.00" />
      <path d="M 17.66 17.66 L 19.07 19.07" />
      <path d="M 12.00 20.00 L 12.00 22.00" />
      <path d="M 6.34 17.66 L 4.93 19.07" />
      <path d="M 4.00 12.00 L 2.00 12.00" />
      <path d="M 6.34 6.34 L 4.93 4.93" />
      <path d="M 12.00 4.00 L 12.00 2.00" />
      <path d="M 17.66 6.34 L 19.07 4.93" />
      {children}
    </svg>
  );
});

export default VincoloLeak;
