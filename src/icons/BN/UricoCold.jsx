import React from 'react';

export const iconData = {
  "id": "UricoCold",
  "name": "UricoCold",
  "category": "BN",
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
        "d": "M 7.20 4.00 L 7.20 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.40 4.00 L 10.40 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 13.60 4.00 L 13.60 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.80 4.00 L 16.80 20.00"
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
        "d": "M 4.00 7.20 L 20.00 7.20"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 10.40 L 20.00 10.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 13.60 L 20.00 13.60"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 16.80 L 20.00 16.80"
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

export const UricoCold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.20 4.00 L 7.20 20.00" />
      <path d="M 10.40 4.00 L 10.40 20.00" />
      <path d="M 13.60 4.00 L 13.60 20.00" />
      <path d="M 16.80 4.00 L 16.80 20.00" />
      <path d="M 20.00 4.00 L 20.00 20.00" />
      <path d="M 4.00 4.00 L 20.00 4.00" />
      <path d="M 4.00 7.20 L 20.00 7.20" />
      <path d="M 4.00 10.40 L 20.00 10.40" />
      <path d="M 4.00 13.60 L 20.00 13.60" />
      <path d="M 4.00 16.80 L 20.00 16.80" />
      <path d="M 4.00 20.00 L 20.00 20.00" />
      {children}
    </svg>
  );
});

export default UricoCold;
