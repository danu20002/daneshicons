import React from 'react';

export const iconData = {
  "id": "ProprioTorch",
  "name": "ProprioTorch",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 12.00 a 8.16 8.16 0 1 0 16.33 0 a 8.16 8.16 0 1 0 -16.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 12.00 a 6.44 6.44 0 1 1 12.88 0 a 6.44 6.44 0 1 1 -12.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.66 12.00 L 21.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.42 17.42 L 18.83 18.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.66 L 12.00 21.66"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 17.42 L 5.17 18.83"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 12.00 L 2.34 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 6.58 L 5.17 5.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.34 L 12.00 2.34"
      }
    ],
    [
      "path",
      {
        "d": "M 17.42 6.58 L 18.83 5.17"
      }
    ]
  ]
};

export const ProprioTorch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 12.00 a 8.16 8.16 0 1 0 16.33 0 a 8.16 8.16 0 1 0 -16.33 0" />
      <path d="M 5.56 12.00 a 6.44 6.44 0 1 1 12.88 0 a 6.44 6.44 0 1 1 -12.88 0" />
      <path d="M 19.66 12.00 L 21.66 12.00" />
      <path d="M 17.42 17.42 L 18.83 18.83" />
      <path d="M 12.00 19.66 L 12.00 21.66" />
      <path d="M 6.58 17.42 L 5.17 18.83" />
      <path d="M 4.34 12.00 L 2.34 12.00" />
      <path d="M 6.58 6.58 L 5.17 5.17" />
      <path d="M 12.00 4.34 L 12.00 2.34" />
      <path d="M 17.42 6.58 L 18.83 5.17" />
      {children}
    </svg>
  );
});

export default ProprioTorch;
