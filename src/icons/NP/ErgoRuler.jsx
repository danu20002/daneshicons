import React from 'react';

export const iconData = {
  "id": "ErgoRuler",
  "name": "ErgoRuler",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 8.68 0 1 0 17.37 0 a 8.68 8.68 0 1 0 -17.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 12.00 a 7.05 7.05 0 1 1 14.10 0 a 7.05 7.05 0 1 1 -14.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.18 12.00 L 22.18 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.79 17.79 L 19.20 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.18 L 12.00 22.18"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 17.79 L 4.80 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 12.00 L 1.82 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 6.21 L 4.80 4.80"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.82 L 12.00 1.82"
      }
    ],
    [
      "path",
      {
        "d": "M 17.79 6.21 L 19.20 4.80"
      }
    ]
  ]
};

export const ErgoRuler = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.37 0 a 8.68 8.68 0 1 0 -17.37 0" />
      <path d="M 4.95 12.00 a 7.05 7.05 0 1 1 14.10 0 a 7.05 7.05 0 1 1 -14.10 0" />
      <path d="M 20.18 12.00 L 22.18 12.00" />
      <path d="M 17.79 17.79 L 19.20 19.20" />
      <path d="M 12.00 20.18 L 12.00 22.18" />
      <path d="M 6.21 17.79 L 4.80 19.20" />
      <path d="M 3.82 12.00 L 1.82 12.00" />
      <path d="M 6.21 6.21 L 4.80 4.80" />
      <path d="M 12.00 3.82 L 12.00 1.82" />
      <path d="M 17.79 6.21 L 19.20 4.80" />
      {children}
    </svg>
  );
});

export default ErgoRuler;
