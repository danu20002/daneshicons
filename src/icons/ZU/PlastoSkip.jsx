import React from 'react';

export const iconData = {
  "id": "PlastoSkip",
  "name": "PlastoSkip",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.67 2.08 A 5.39 2.52 165 0 0 2.79 8.70"
      }
    ],
    [
      "path",
      {
        "d": "M 13.97 13.40 C 6.30 15.04, 8.11 21.20, 9.11 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 21.15 L 9.01 12.31 L 17.44 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 13.41 21.18 A 5.47 3.28 43 0 1 16.71 17.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.30 2.18 A 6.03 4.80 41 0 1 10.40 21.84"
      }
    ],
    [
      "path",
      {
        "d": "M 17.58 7.87 Q 15.24 2.71 13.55 2.36"
      }
    ]
  ]
};

export const PlastoSkip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.67 2.08 A 5.39 2.52 165 0 0 2.79 8.70" />
      <path d="M 13.97 13.40 C 6.30 15.04, 8.11 21.20, 9.11 21.55" />
      <path d="M 19.77 21.15 L 9.01 12.31 L 17.44 17.21" />
      <path d="M 13.41 21.18 A 5.47 3.28 43 0 1 16.71 17.50" />
      <path d="M 16.30 2.18 A 6.03 4.80 41 0 1 10.40 21.84" />
      <path d="M 17.58 7.87 Q 15.24 2.71 13.55 2.36" />
      {children}
    </svg>
  );
});

export default PlastoSkip;
