import React from 'react';

export const iconData = {
  "id": "AudioSnug",
  "name": "AudioSnug",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.30 12.00 a 8.70 8.70 0 1 0 17.40 0 a 8.70 8.70 0 1 0 -17.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 12.00 a 6.61 6.61 0 1 1 13.21 0 a 6.61 6.61 0 1 1 -13.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.20 12.00 L 22.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.90 16.43 L 20.58 17.52"
      }
    ],
    [
      "path",
      {
        "d": "M 15.41 19.46 L 16.24 21.28"
      }
    ],
    [
      "path",
      {
        "d": "M 10.83 20.12 L 10.55 22.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 18.20 L 5.32 19.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 14.31 L 2.21 14.87"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 9.69 L 2.21 9.13"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 5.80 L 5.32 4.29"
      }
    ],
    [
      "path",
      {
        "d": "M 10.83 3.88 L 10.55 1.90"
      }
    ],
    [
      "path",
      {
        "d": "M 15.41 4.54 L 16.24 2.72"
      }
    ],
    [
      "path",
      {
        "d": "M 18.90 7.57 L 20.58 6.48"
      }
    ]
  ]
};

export const AudioSnug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.30 12.00 a 8.70 8.70 0 1 0 17.40 0 a 8.70 8.70 0 1 0 -17.40 0" />
      <path d="M 5.39 12.00 a 6.61 6.61 0 1 1 13.21 0 a 6.61 6.61 0 1 1 -13.21 0" />
      <path d="M 20.20 12.00 L 22.20 12.00" />
      <path d="M 18.90 16.43 L 20.58 17.52" />
      <path d="M 15.41 19.46 L 16.24 21.28" />
      <path d="M 10.83 20.12 L 10.55 22.10" />
      <path d="M 6.63 18.20 L 5.32 19.71" />
      <path d="M 4.13 14.31 L 2.21 14.87" />
      <path d="M 4.13 9.69 L 2.21 9.13" />
      <path d="M 6.63 5.80 L 5.32 4.29" />
      <path d="M 10.83 3.88 L 10.55 1.90" />
      <path d="M 15.41 4.54 L 16.24 2.72" />
      <path d="M 18.90 7.57 L 20.58 6.48" />
      {children}
    </svg>
  );
});

export default AudioSnug;
