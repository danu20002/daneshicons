import React from 'react';

export const iconData = {
  "id": "NasoMedal",
  "name": "NasoMedal",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.05 12.00 a 5.95 5.95 0 1 1 11.90 0 a 5.95 5.95 0 1 1 -11.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.28 12.00 L 22.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 16.14 L 20.90 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.14 19.17 L 17.14 20.90"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.28 L 12.00 22.28"
      }
    ],
    [
      "path",
      {
        "d": "M 7.86 19.17 L 6.86 20.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 16.14 L 3.10 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 12.00 L 1.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 7.86 L 3.10 6.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.86 4.83 L 6.86 3.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.72 L 12.00 1.72"
      }
    ],
    [
      "path",
      {
        "d": "M 16.14 4.83 L 17.14 3.10"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 7.86 L 20.90 6.86"
      }
    ]
  ]
};

export const NasoMedal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0" />
      <path d="M 6.05 12.00 a 5.95 5.95 0 1 1 11.90 0 a 5.95 5.95 0 1 1 -11.90 0" />
      <path d="M 20.28 12.00 L 22.28 12.00" />
      <path d="M 19.17 16.14 L 20.90 17.14" />
      <path d="M 16.14 19.17 L 17.14 20.90" />
      <path d="M 12.00 20.28 L 12.00 22.28" />
      <path d="M 7.86 19.17 L 6.86 20.90" />
      <path d="M 4.83 16.14 L 3.10 17.14" />
      <path d="M 3.72 12.00 L 1.72 12.00" />
      <path d="M 4.83 7.86 L 3.10 6.86" />
      <path d="M 7.86 4.83 L 6.86 3.10" />
      <path d="M 12.00 3.72 L 12.00 1.72" />
      <path d="M 16.14 4.83 L 17.14 3.10" />
      <path d="M 19.17 7.86 L 20.90 6.86" />
      {children}
    </svg>
  );
});

export default NasoMedal;
