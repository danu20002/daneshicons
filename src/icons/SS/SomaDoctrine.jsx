import React from 'react';

export const iconData = {
  "id": "SomaDoctrine",
  "name": "SomaDoctrine",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.45 12.00 a 7.55 7.55 0 1 0 15.10 0 a 7.55 7.55 0 1 0 -15.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 12.00 a 4.73 4.73 0 1 1 9.45 0 a 4.73 4.73 0 1 1 -9.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 12.00 L 21.05 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 16.14 L 19.32 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 14.18 18.71 L 14.80 20.61"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 18.71 L 9.20 20.61"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 16.14 L 4.68 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 12.00 L 2.95 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 7.86 L 4.68 6.68"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 5.29 L 9.20 3.39"
      }
    ],
    [
      "path",
      {
        "d": "M 14.18 5.29 L 14.80 3.39"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 7.86 L 19.32 6.68"
      }
    ]
  ]
};

export const SomaDoctrine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.45 12.00 a 7.55 7.55 0 1 0 15.10 0 a 7.55 7.55 0 1 0 -15.10 0" />
      <path d="M 7.27 12.00 a 4.73 4.73 0 1 1 9.45 0 a 4.73 4.73 0 1 1 -9.45 0" />
      <path d="M 19.05 12.00 L 21.05 12.00" />
      <path d="M 17.70 16.14 L 19.32 17.32" />
      <path d="M 14.18 18.71 L 14.80 20.61" />
      <path d="M 9.82 18.71 L 9.20 20.61" />
      <path d="M 6.30 16.14 L 4.68 17.32" />
      <path d="M 4.95 12.00 L 2.95 12.00" />
      <path d="M 6.30 7.86 L 4.68 6.68" />
      <path d="M 9.82 5.29 L 9.20 3.39" />
      <path d="M 14.18 5.29 L 14.80 3.39" />
      <path d="M 17.70 7.86 L 19.32 6.68" />
      {children}
    </svg>
  );
});

export default SomaDoctrine;
