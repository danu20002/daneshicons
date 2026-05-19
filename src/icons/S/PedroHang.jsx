import React from 'react';

export const iconData = {
  "id": "PedroHang",
  "name": "PedroHang",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 12.00 a 8.96 8.96 0 1 0 17.92 0 a 8.96 8.96 0 1 0 -17.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 12.00 a 6.54 6.54 0 1 1 13.08 0 a 6.54 6.54 0 1 1 -13.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.46 12.00 L 22.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.32 16.23 L 21.06 17.23"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 19.32 L 17.23 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.46 L 12.00 22.46"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 19.32 L 6.77 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 16.23 L 2.94 17.23"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 L 1.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 7.77 L 2.94 6.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 4.68 L 6.77 2.94"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.54 L 12.00 1.54"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 4.68 L 17.23 2.94"
      }
    ],
    [
      "path",
      {
        "d": "M 19.32 7.77 L 21.06 6.77"
      }
    ]
  ]
};

export const PedroHang = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 12.00 a 8.96 8.96 0 1 0 17.92 0 a 8.96 8.96 0 1 0 -17.92 0" />
      <path d="M 5.46 12.00 a 6.54 6.54 0 1 1 13.08 0 a 6.54 6.54 0 1 1 -13.08 0" />
      <path d="M 20.46 12.00 L 22.46 12.00" />
      <path d="M 19.32 16.23 L 21.06 17.23" />
      <path d="M 16.23 19.32 L 17.23 21.06" />
      <path d="M 12.00 20.46 L 12.00 22.46" />
      <path d="M 7.77 19.32 L 6.77 21.06" />
      <path d="M 4.68 16.23 L 2.94 17.23" />
      <path d="M 3.54 12.00 L 1.54 12.00" />
      <path d="M 4.68 7.77 L 2.94 6.77" />
      <path d="M 7.77 4.68 L 6.77 2.94" />
      <path d="M 12.00 3.54 L 12.00 1.54" />
      <path d="M 16.23 4.68 L 17.23 2.94" />
      <path d="M 19.32 7.77 L 21.06 6.77" />
      {children}
    </svg>
  );
});

export default PedroHang;
