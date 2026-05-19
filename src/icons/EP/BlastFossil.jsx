import React from 'react';

export const iconData = {
  "id": "BlastFossil",
  "name": "BlastFossil",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.90 11.99 A 6.65 3.28 8 0 1 16.46 5.22"
      }
    ],
    [
      "path",
      {
        "d": "M 14.96 11.25 L 17.48 10.17 L 2.49 17.07 L 3.80 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 5.02 L 16.78 4.04 L 12.15 5.80 L 6.42 12.85"
      }
    ],
    [
      "path",
      {
        "d": "M 17.24 7.75 A 5.85 2.23 25 0 0 16.61 5.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.53 8.07 C 16.20 18.17, 6.32 3.73, 19.27 2.65"
      }
    ],
    [
      "path",
      {
        "d": "M 13.01 9.42 L 6.59 10.41 L 18.03 10.55 L 3.89 11.91 L 6.66 17.59"
      }
    ]
  ]
};

export const BlastFossil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.90 11.99 A 6.65 3.28 8 0 1 16.46 5.22" />
      <path d="M 14.96 11.25 L 17.48 10.17 L 2.49 17.07 L 3.80 18.03" />
      <path d="M 6.24 5.02 L 16.78 4.04 L 12.15 5.80 L 6.42 12.85" />
      <path d="M 17.24 7.75 A 5.85 2.23 25 0 0 16.61 5.28" />
      <path d="M 5.53 8.07 C 16.20 18.17, 6.32 3.73, 19.27 2.65" />
      <path d="M 13.01 9.42 L 6.59 10.41 L 18.03 10.55 L 3.89 11.91 L 6.66 17.59" />
      {children}
    </svg>
  );
});

export default BlastFossil;
