import React from 'react';

export const iconData = {
  "id": "VividoClimb",
  "name": "VividoClimb",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.05 12.00 a 7.95 7.95 0 1 0 15.91 0 a 7.95 7.95 0 1 0 -15.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.03 12.00 a 4.97 4.97 0 1 1 9.95 0 a 4.97 4.97 0 1 1 -9.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.45 12.00 L 21.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 16.38 L 19.65 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 14.30 19.09 L 14.92 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 9.70 19.09 L 9.08 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 16.38 L 4.35 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.55 12.00 L 2.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 7.62 L 4.35 6.44"
      }
    ],
    [
      "path",
      {
        "d": "M 9.70 4.91 L 9.08 3.01"
      }
    ],
    [
      "path",
      {
        "d": "M 14.30 4.91 L 14.92 3.01"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 7.62 L 19.65 6.44"
      }
    ]
  ]
};

export const VividoClimb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.05 12.00 a 7.95 7.95 0 1 0 15.91 0 a 7.95 7.95 0 1 0 -15.91 0" />
      <path d="M 7.03 12.00 a 4.97 4.97 0 1 1 9.95 0 a 4.97 4.97 0 1 1 -9.95 0" />
      <path d="M 19.45 12.00 L 21.45 12.00" />
      <path d="M 18.03 16.38 L 19.65 17.56" />
      <path d="M 14.30 19.09 L 14.92 20.99" />
      <path d="M 9.70 19.09 L 9.08 20.99" />
      <path d="M 5.97 16.38 L 4.35 17.56" />
      <path d="M 4.55 12.00 L 2.55 12.00" />
      <path d="M 5.97 7.62 L 4.35 6.44" />
      <path d="M 9.70 4.91 L 9.08 3.01" />
      <path d="M 14.30 4.91 L 14.92 3.01" />
      <path d="M 18.03 7.62 L 19.65 6.44" />
      {children}
    </svg>
  );
});

export default VividoClimb;
