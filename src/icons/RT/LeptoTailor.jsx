import React from 'react';

export const iconData = {
  "id": "LeptoTailor",
  "name": "LeptoTailor",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.93 14.85 C 3.16 5.51, 4.15 6.29, 20.52 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 16.83 15.64 L 10.20 5.25 L 8.99 3.04 L 5.64 2.34 L 4.60 3.40 L 11.20 15.18 L 10.55 3.17 L 5.36 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 13.14 12.79 Q 9.36 4.84 2.16 14.32"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 15.98 L 19.36 7.48 L 16.15 21.06 L 5.80 7.22 L 18.04 14.23 L 5.14 5.66 L 19.31 14.13"
      }
    ],
    [
      "path",
      {
        "d": "M 8.52 8.49 Q 21.07 15.17 11.64 19.37"
      }
    ]
  ]
};

export const LeptoTailor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.93 14.85 C 3.16 5.51, 4.15 6.29, 20.52 20.58" />
      <path d="M 16.83 15.64 L 10.20 5.25 L 8.99 3.04 L 5.64 2.34 L 4.60 3.40 L 11.20 15.18 L 10.55 3.17 L 5.36 17.71" />
      <path d="M 13.14 12.79 Q 9.36 4.84 2.16 14.32" />
      <path d="M 16.11 15.98 L 19.36 7.48 L 16.15 21.06 L 5.80 7.22 L 18.04 14.23 L 5.14 5.66 L 19.31 14.13" />
      <path d="M 8.52 8.49 Q 21.07 15.17 11.64 19.37" />
      {children}
    </svg>
  );
});

export default LeptoTailor;
