import React from 'react';

export const iconData = {
  "id": "LavaSince",
  "name": "LavaSince",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 12.00 a 6.68 6.68 0 1 1 13.36 0 a 6.68 6.68 0 1 1 -13.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.97 12.00 L 21.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 16.68 L 20.06 17.86"
      }
    ],
    [
      "path",
      {
        "d": "M 14.46 19.58 L 15.08 21.48"
      }
    ],
    [
      "path",
      {
        "d": "M 9.54 19.58 L 8.92 21.48"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 16.68 L 3.94 17.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 12.00 L 2.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 7.32 L 3.94 6.14"
      }
    ],
    [
      "path",
      {
        "d": "M 9.54 4.42 L 8.92 2.52"
      }
    ],
    [
      "path",
      {
        "d": "M 14.46 4.42 L 15.08 2.52"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 7.32 L 20.06 6.14"
      }
    ]
  ]
};

export const LavaSince = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0" />
      <path d="M 5.32 12.00 a 6.68 6.68 0 1 1 13.36 0 a 6.68 6.68 0 1 1 -13.36 0" />
      <path d="M 19.97 12.00 L 21.97 12.00" />
      <path d="M 18.45 16.68 L 20.06 17.86" />
      <path d="M 14.46 19.58 L 15.08 21.48" />
      <path d="M 9.54 19.58 L 8.92 21.48" />
      <path d="M 5.55 16.68 L 3.94 17.86" />
      <path d="M 4.03 12.00 L 2.03 12.00" />
      <path d="M 5.55 7.32 L 3.94 6.14" />
      <path d="M 9.54 4.42 L 8.92 2.52" />
      <path d="M 14.46 4.42 L 15.08 2.52" />
      <path d="M 18.45 7.32 L 20.06 6.14" />
      {children}
    </svg>
  );
});

export default LavaSince;
