import React from 'react';

export const iconData = {
  "id": "PseudoTangle",
  "name": "PseudoTangle",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.26 6.86 L 14.11 10.31 L 3.74 19.84 L 18.42 13.13 L 16.90 19.85 L 4.36 4.87 L 17.78 13.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.43 3.23 L 3.08 14.31"
      }
    ],
    [
      "path",
      {
        "d": "M 9.94 11.19 Q 5.30 19.22 13.95 14.42"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 18.22 L 17.80 16.41"
      }
    ],
    [
      "path",
      {
        "d": "M 14.86 12.20 A 5.14 5.51 130 0 0 9.18 11.65"
      }
    ]
  ]
};

export const PseudoTangle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.26 6.86 L 14.11 10.31 L 3.74 19.84 L 18.42 13.13 L 16.90 19.85 L 4.36 4.87 L 17.78 13.52" />
      <path d="M 12.43 3.23 L 3.08 14.31" />
      <path d="M 9.94 11.19 Q 5.30 19.22 13.95 14.42" />
      <path d="M 16.64 18.22 L 17.80 16.41" />
      <path d="M 14.86 12.20 A 5.14 5.51 130 0 0 9.18 11.65" />
      {children}
    </svg>
  );
});

export default PseudoTangle;
