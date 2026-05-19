import React from 'react';

export const iconData = {
  "id": "SemiDrove",
  "name": "SemiDrove",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.33 0 a 8.67 8.67 0 1 0 -17.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.45 12.00 a 6.55 6.55 0 1 1 13.11 0 a 6.55 6.55 0 1 1 -13.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.17 12.00 L 22.17 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.87 16.41 L 20.55 17.50"
      }
    ],
    [
      "path",
      {
        "d": "M 15.39 19.43 L 16.22 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 10.84 20.08 L 10.55 22.06"
      }
    ],
    [
      "path",
      {
        "d": "M 6.65 18.17 L 5.34 19.68"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 14.30 L 2.25 14.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 9.70 L 2.25 9.14"
      }
    ],
    [
      "path",
      {
        "d": "M 6.65 5.83 L 5.34 4.32"
      }
    ],
    [
      "path",
      {
        "d": "M 10.84 3.92 L 10.55 1.94"
      }
    ],
    [
      "path",
      {
        "d": "M 15.39 4.57 L 16.22 2.75"
      }
    ],
    [
      "path",
      {
        "d": "M 18.87 7.59 L 20.55 6.50"
      }
    ]
  ]
};

export const SemiDrove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.33 0 a 8.67 8.67 0 1 0 -17.33 0" />
      <path d="M 5.45 12.00 a 6.55 6.55 0 1 1 13.11 0 a 6.55 6.55 0 1 1 -13.11 0" />
      <path d="M 20.17 12.00 L 22.17 12.00" />
      <path d="M 18.87 16.41 L 20.55 17.50" />
      <path d="M 15.39 19.43 L 16.22 21.25" />
      <path d="M 10.84 20.08 L 10.55 22.06" />
      <path d="M 6.65 18.17 L 5.34 19.68" />
      <path d="M 4.17 14.30 L 2.25 14.86" />
      <path d="M 4.17 9.70 L 2.25 9.14" />
      <path d="M 6.65 5.83 L 5.34 4.32" />
      <path d="M 10.84 3.92 L 10.55 1.94" />
      <path d="M 15.39 4.57 L 16.22 2.75" />
      <path d="M 18.87 7.59 L 20.55 6.50" />
      {children}
    </svg>
  );
});

export default SemiDrove;
