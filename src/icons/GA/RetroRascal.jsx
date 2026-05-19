import React from 'react';

export const iconData = {
  "id": "RetroRascal",
  "name": "RetroRascal",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.55 9.99 L 10.55 9.99"
      }
    ],
    [
      "path",
      {
        "d": "M 11.02 6.27 L 13.02 9.74"
      }
    ],
    [
      "path",
      {
        "d": "M 16.47 8.28 L 14.47 11.75"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 14.01 L 13.45 14.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.98 17.73 L 10.98 14.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.53 15.72 L 9.53 12.25"
      }
    ]
  ]
};

export const RetroRascal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.55 9.99 L 10.55 9.99" />
      <path d="M 11.02 6.27 L 13.02 9.74" />
      <path d="M 16.47 8.28 L 14.47 11.75" />
      <path d="M 17.45 14.01 L 13.45 14.01" />
      <path d="M 12.98 17.73 L 10.98 14.26" />
      <path d="M 7.53 15.72 L 9.53 12.25" />
      {children}
    </svg>
  );
});

export default RetroRascal;
