import React from 'react';

export const iconData = {
  "id": "ScannoRetain",
  "name": "ScannoRetain",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.58 12.00 a 7.42 7.42 0 1 0 14.84 0 a 7.42 7.42 0 1 0 -14.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 12.00 a 5.90 5.90 0 1 1 11.79 0 a 5.90 5.90 0 1 1 -11.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 12.00 L 20.92 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 15.74 L 19.51 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 14.88 18.30 L 15.71 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 11.01 18.85 L 10.73 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 17.23 L 6.16 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 13.95 L 3.44 14.51"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 10.05 L 3.44 9.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 6.77 L 6.16 5.26"
      }
    ],
    [
      "path",
      {
        "d": "M 11.01 5.15 L 10.73 3.17"
      }
    ],
    [
      "path",
      {
        "d": "M 14.88 5.70 L 15.71 3.88"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 8.26 L 19.51 7.18"
      }
    ]
  ]
};

export const ScannoRetain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.58 12.00 a 7.42 7.42 0 1 0 14.84 0 a 7.42 7.42 0 1 0 -14.84 0" />
      <path d="M 6.10 12.00 a 5.90 5.90 0 1 1 11.79 0 a 5.90 5.90 0 1 1 -11.79 0" />
      <path d="M 18.92 12.00 L 20.92 12.00" />
      <path d="M 17.82 15.74 L 19.51 16.82" />
      <path d="M 14.88 18.30 L 15.71 20.12" />
      <path d="M 11.01 18.85 L 10.73 20.83" />
      <path d="M 7.47 17.23 L 6.16 18.74" />
      <path d="M 5.36 13.95 L 3.44 14.51" />
      <path d="M 5.36 10.05 L 3.44 9.49" />
      <path d="M 7.47 6.77 L 6.16 5.26" />
      <path d="M 11.01 5.15 L 10.73 3.17" />
      <path d="M 14.88 5.70 L 15.71 3.88" />
      <path d="M 17.82 8.26 L 19.51 7.18" />
      {children}
    </svg>
  );
});

export default ScannoRetain;
