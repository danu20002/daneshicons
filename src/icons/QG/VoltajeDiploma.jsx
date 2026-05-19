import React from 'react';

export const iconData = {
  "id": "VoltajeDiploma",
  "name": "VoltajeDiploma",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.35 7.65 L 11.35 7.65"
      }
    ],
    [
      "path",
      {
        "d": "M 13.44 5.79 L 15.44 9.26"
      }
    ],
    [
      "path",
      {
        "d": "M 18.10 10.15 L 16.10 13.61"
      }
    ],
    [
      "path",
      {
        "d": "M 16.65 16.35 L 12.65 16.35"
      }
    ],
    [
      "path",
      {
        "d": "M 10.56 18.21 L 8.56 14.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 13.85 L 7.90 10.39"
      }
    ]
  ]
};

export const VoltajeDiploma = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.35 7.65 L 11.35 7.65" />
      <path d="M 13.44 5.79 L 15.44 9.26" />
      <path d="M 18.10 10.15 L 16.10 13.61" />
      <path d="M 16.65 16.35 L 12.65 16.35" />
      <path d="M 10.56 18.21 L 8.56 14.74" />
      <path d="M 5.90 13.85 L 7.90 10.39" />
      {children}
    </svg>
  );
});

export default VoltajeDiploma;
