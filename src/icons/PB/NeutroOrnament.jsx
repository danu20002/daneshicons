import React from 'react';

export const iconData = {
  "id": "NeutroOrnament",
  "name": "NeutroOrnament",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 8.15 0 1 0 16.29 0 a 8.15 8.15 0 1 0 -16.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 12.00 a 5.90 5.90 0 1 1 11.81 0 a 5.90 5.90 0 1 1 -11.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.65 12.00 L 21.65 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 15.82 L 20.35 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 15.82 18.62 L 16.82 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.65 L 12.00 21.65"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 18.62 L 7.18 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 15.82 L 3.65 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 12.00 L 2.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 8.18 L 3.65 7.18"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 5.38 L 7.18 3.65"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.35 L 12.00 2.35"
      }
    ],
    [
      "path",
      {
        "d": "M 15.82 5.38 L 16.82 3.65"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 8.18 L 20.35 7.18"
      }
    ]
  ]
};

export const NeutroOrnament = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 12.00 a 8.15 8.15 0 1 0 16.29 0 a 8.15 8.15 0 1 0 -16.29 0" />
      <path d="M 6.10 12.00 a 5.90 5.90 0 1 1 11.81 0 a 5.90 5.90 0 1 1 -11.81 0" />
      <path d="M 19.65 12.00 L 21.65 12.00" />
      <path d="M 18.62 15.82 L 20.35 16.82" />
      <path d="M 15.82 18.62 L 16.82 20.35" />
      <path d="M 12.00 19.65 L 12.00 21.65" />
      <path d="M 8.18 18.62 L 7.18 20.35" />
      <path d="M 5.38 15.82 L 3.65 16.82" />
      <path d="M 4.35 12.00 L 2.35 12.00" />
      <path d="M 5.38 8.18 L 3.65 7.18" />
      <path d="M 8.18 5.38 L 7.18 3.65" />
      <path d="M 12.00 4.35 L 12.00 2.35" />
      <path d="M 15.82 5.38 L 16.82 3.65" />
      <path d="M 18.62 8.18 L 20.35 7.18" />
      {children}
    </svg>
  );
});

export default NeutroOrnament;
