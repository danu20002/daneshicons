import React from 'react';

export const iconData = {
  "id": "TriumviHead",
  "name": "TriumviHead",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.10 10.10 L 13.10 10.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.20 8.53 L 14.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.10 10.44 L 13.10 13.90"
      }
    ],
    [
      "path",
      {
        "d": "M 14.90 13.90 L 10.90 13.90"
      }
    ],
    [
      "path",
      {
        "d": "M 11.80 15.47 L 9.80 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.90 13.56 L 10.90 10.10"
      }
    ]
  ]
};

export const TriumviHead = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.10 10.10 L 13.10 10.10" />
      <path d="M 12.20 8.53 L 14.20 12.00" />
      <path d="M 15.10 10.44 L 13.10 13.90" />
      <path d="M 14.90 13.90 L 10.90 13.90" />
      <path d="M 11.80 15.47 L 9.80 12.00" />
      <path d="M 8.90 13.56 L 10.90 10.10" />
      {children}
    </svg>
  );
});

export default TriumviHead;
