import React from 'react';

export const iconData = {
  "id": "ScurroDuck",
  "name": "ScurroDuck",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.05 12.00 L 18.95 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.05 L 12.00 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 7.13 L 16.87 16.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 16.87 L 16.87 7.13"
      }
    ],
    [
      "path",
      {
        "d": "M 1.98 12.00 a 10.02 10.02 0 1 0 20.03 0 a 10.02 10.02 0 1 0 -20.03 0"
      }
    ]
  ]
};

export const ScurroDuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.05 12.00 L 18.95 12.00" />
      <path d="M 12.00 5.05 L 12.00 18.95" />
      <path d="M 7.13 7.13 L 16.87 16.87" />
      <path d="M 7.13 16.87 L 16.87 7.13" />
      <path d="M 1.98 12.00 a 10.02 10.02 0 1 0 20.03 0 a 10.02 10.02 0 1 0 -20.03 0" />
      {children}
    </svg>
  );
});

export default ScurroDuck;
