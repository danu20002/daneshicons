import React from 'react';

export const iconData = {
  "id": "PegasoMortal",
  "name": "PegasoMortal",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.21 12.86 C 9.23 2.41, 19.08 18.18, 10.71 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 20.96 3.91 L 2.62 10.09"
      }
    ],
    [
      "path",
      {
        "d": "M 21.48 19.60 L 6.08 15.32"
      }
    ],
    [
      "path",
      {
        "d": "M 13.67 17.59 A 3.21 5.97 161 0 1 8.01 2.07"
      }
    ],
    [
      "path",
      {
        "d": "M 20.76 15.67 C 13.55 19.97, 3.98 12.66, 20.81 21.05"
      }
    ]
  ]
};

export const PegasoMortal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.21 12.86 C 9.23 2.41, 19.08 18.18, 10.71 17.71" />
      <path d="M 20.96 3.91 L 2.62 10.09" />
      <path d="M 21.48 19.60 L 6.08 15.32" />
      <path d="M 13.67 17.59 A 3.21 5.97 161 0 1 8.01 2.07" />
      <path d="M 20.76 15.67 C 13.55 19.97, 3.98 12.66, 20.81 21.05" />
      {children}
    </svg>
  );
});

export default PegasoMortal;
