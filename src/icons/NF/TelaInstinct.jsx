import React from 'react';

export const iconData = {
  "id": "TelaInstinct",
  "name": "TelaInstinct",
  "category": "NF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.00 4.00 L 4.00 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 4.00 L 8.00 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.00 L 12.00 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.00 4.00 L 16.00 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 20.00 4.00 L 20.00 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 4.00 L 20.00 4.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 8.00 L 20.00 8.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 12.00 L 20.00 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 16.00 L 20.00 16.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 20.00 L 20.00 20.00"
      }
    ]
  ]
};

export const TelaInstinct = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.00 4.00 L 4.00 20.00" />
      <path d="M 8.00 4.00 L 8.00 20.00" />
      <path d="M 12.00 4.00 L 12.00 20.00" />
      <path d="M 16.00 4.00 L 16.00 20.00" />
      <path d="M 20.00 4.00 L 20.00 20.00" />
      <path d="M 4.00 4.00 L 20.00 4.00" />
      <path d="M 4.00 8.00 L 20.00 8.00" />
      <path d="M 4.00 12.00 L 20.00 12.00" />
      <path d="M 4.00 16.00 L 20.00 16.00" />
      <path d="M 4.00 20.00 L 20.00 20.00" />
      {children}
    </svg>
  );
});

export default TelaInstinct;
