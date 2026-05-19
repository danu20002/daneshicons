import React from 'react';

export const iconData = {
  "id": "LatexoPony",
  "name": "LatexoPony",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 6.12 C 3.50 6.79, 8.50 16.16, 19.99 9.22"
      }
    ],
    [
      "path",
      {
        "d": "M 9.58 7.55 L 11.22 15.45 L 8.26 17.64"
      }
    ],
    [
      "path",
      {
        "d": "M 2.31 3.20 Q 19.44 14.04 17.85 2.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.83 5.49 A 3.28 3.88 81 0 1 15.32 9.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 21.99 A 2.64 2.84 154 0 0 2.60 20.82"
      }
    ],
    [
      "path",
      {
        "d": "M 14.60 16.54 L 14.72 12.64 L 18.84 18.55 L 12.48 5.72 L 20.71 5.73"
      }
    ]
  ]
};

export const LatexoPony = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 6.12 C 3.50 6.79, 8.50 16.16, 19.99 9.22" />
      <path d="M 9.58 7.55 L 11.22 15.45 L 8.26 17.64" />
      <path d="M 2.31 3.20 Q 19.44 14.04 17.85 2.00" />
      <path d="M 16.83 5.49 A 3.28 3.88 81 0 1 15.32 9.23" />
      <path d="M 7.04 21.99 A 2.64 2.84 154 0 0 2.60 20.82" />
      <path d="M 14.60 16.54 L 14.72 12.64 L 18.84 18.55 L 12.48 5.72 L 20.71 5.73" />
      {children}
    </svg>
  );
});

export default LatexoPony;
