import React from 'react';

export const iconData = {
  "id": "MirageDilute",
  "name": "MirageDilute",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.86 2.56 L 10.08 4.53 L 18.09 13.75 L 21.36 3.95 L 16.88 21.48 L 7.11 21.96 L 4.48 4.61 L 8.48 7.41"
      }
    ],
    [
      "path",
      {
        "d": "M 9.74 2.90 L 18.69 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 21.58 13.59 C 2.30 5.90, 14.68 18.45, 20.12 13.15"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 13.72 L 12.74 18.04"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 4.51 L 19.86 11.38 L 3.45 18.02 L 12.11 19.37"
      }
    ],
    [
      "path",
      {
        "d": "M 21.24 8.53 L 10.60 19.29 L 15.33 19.82 L 19.97 7.65 L 15.74 14.01 L 15.81 14.47 L 20.73 8.18 L 11.27 5.60"
      }
    ]
  ]
};

export const MirageDilute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.86 2.56 L 10.08 4.53 L 18.09 13.75 L 21.36 3.95 L 16.88 21.48 L 7.11 21.96 L 4.48 4.61 L 8.48 7.41" />
      <path d="M 9.74 2.90 L 18.69 18.65" />
      <path d="M 21.58 13.59 C 2.30 5.90, 14.68 18.45, 20.12 13.15" />
      <path d="M 18.63 13.72 L 12.74 18.04" />
      <path d="M 3.91 4.51 L 19.86 11.38 L 3.45 18.02 L 12.11 19.37" />
      <path d="M 21.24 8.53 L 10.60 19.29 L 15.33 19.82 L 19.97 7.65 L 15.74 14.01 L 15.81 14.47 L 20.73 8.18 L 11.27 5.60" />
      {children}
    </svg>
  );
});

export default MirageDilute;
