import React from 'react';

export const iconData = {
  "id": "VimineNiece",
  "name": "VimineNiece",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.42 12.00 a 8.58 8.58 0 1 0 17.17 0 a 8.58 8.58 0 1 0 -17.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 12.00 a 6.97 6.97 0 1 1 13.95 0 a 6.97 6.97 0 1 1 -13.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.08 12.00 L 22.08 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.00 16.04 L 20.73 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.04 19.00 L 17.04 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.08 L 12.00 22.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 19.00 L 6.96 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 16.04 L 3.27 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 12.00 L 1.92 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 7.96 L 3.27 6.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 5.00 L 6.96 3.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.92 L 12.00 1.92"
      }
    ],
    [
      "path",
      {
        "d": "M 16.04 5.00 L 17.04 3.27"
      }
    ],
    [
      "path",
      {
        "d": "M 19.00 7.96 L 20.73 6.96"
      }
    ]
  ]
};

export const VimineNiece = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.42 12.00 a 8.58 8.58 0 1 0 17.17 0 a 8.58 8.58 0 1 0 -17.17 0" />
      <path d="M 5.03 12.00 a 6.97 6.97 0 1 1 13.95 0 a 6.97 6.97 0 1 1 -13.95 0" />
      <path d="M 20.08 12.00 L 22.08 12.00" />
      <path d="M 19.00 16.04 L 20.73 17.04" />
      <path d="M 16.04 19.00 L 17.04 20.73" />
      <path d="M 12.00 20.08 L 12.00 22.08" />
      <path d="M 7.96 19.00 L 6.96 20.73" />
      <path d="M 5.00 16.04 L 3.27 17.04" />
      <path d="M 3.92 12.00 L 1.92 12.00" />
      <path d="M 5.00 7.96 L 3.27 6.96" />
      <path d="M 7.96 5.00 L 6.96 3.27" />
      <path d="M 12.00 3.92 L 12.00 1.92" />
      <path d="M 16.04 5.00 L 17.04 3.27" />
      <path d="M 19.00 7.96 L 20.73 6.96" />
      {children}
    </svg>
  );
});

export default VimineNiece;
