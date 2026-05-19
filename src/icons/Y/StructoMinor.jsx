import React from 'react';

export const iconData = {
  "id": "StructoMinor",
  "name": "StructoMinor",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.10 12.00 a 7.90 7.90 0 1 0 15.81 0 a 7.90 7.90 0 1 0 -15.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 12.00 a 5.63 5.63 0 1 1 11.26 0 a 5.63 5.63 0 1 1 -11.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.40 12.00 L 21.40 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.24 17.24 L 18.65 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.40 L 12.00 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 6.76 17.24 L 5.35 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 12.00 L 2.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.76 6.76 L 5.35 5.35"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.60 L 12.00 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 17.24 6.76 L 18.65 5.35"
      }
    ]
  ]
};

export const StructoMinor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.10 12.00 a 7.90 7.90 0 1 0 15.81 0 a 7.90 7.90 0 1 0 -15.81 0" />
      <path d="M 6.37 12.00 a 5.63 5.63 0 1 1 11.26 0 a 5.63 5.63 0 1 1 -11.26 0" />
      <path d="M 19.40 12.00 L 21.40 12.00" />
      <path d="M 17.24 17.24 L 18.65 18.65" />
      <path d="M 12.00 19.40 L 12.00 21.40" />
      <path d="M 6.76 17.24 L 5.35 18.65" />
      <path d="M 4.60 12.00 L 2.60 12.00" />
      <path d="M 6.76 6.76 L 5.35 5.35" />
      <path d="M 12.00 4.60 L 12.00 2.60" />
      <path d="M 17.24 6.76 L 18.65 5.35" />
      {children}
    </svg>
  );
});

export default StructoMinor;
