import React from 'react';

export const iconData = {
  "id": "PhysioEar",
  "name": "PhysioEar",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 12.00 a 8.64 8.64 0 1 0 17.27 0 a 8.64 8.64 0 1 0 -17.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 12.00 a 6.52 6.52 0 1 1 13.03 0 a 6.52 6.52 0 1 1 -13.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.14 12.00 L 22.14 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 16.07 L 20.78 17.07"
      }
    ],
    [
      "path",
      {
        "d": "M 16.07 19.05 L 17.07 20.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.14 L 12.00 22.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 19.05 L 6.93 20.78"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 16.07 L 3.22 17.07"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 12.00 L 1.86 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 7.93 L 3.22 6.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 4.95 L 6.93 3.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.86 L 12.00 1.86"
      }
    ],
    [
      "path",
      {
        "d": "M 16.07 4.95 L 17.07 3.22"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 7.93 L 20.78 6.93"
      }
    ]
  ]
};

export const PhysioEar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 12.00 a 8.64 8.64 0 1 0 17.27 0 a 8.64 8.64 0 1 0 -17.27 0" />
      <path d="M 5.48 12.00 a 6.52 6.52 0 1 1 13.03 0 a 6.52 6.52 0 1 1 -13.03 0" />
      <path d="M 20.14 12.00 L 22.14 12.00" />
      <path d="M 19.05 16.07 L 20.78 17.07" />
      <path d="M 16.07 19.05 L 17.07 20.78" />
      <path d="M 12.00 20.14 L 12.00 22.14" />
      <path d="M 7.93 19.05 L 6.93 20.78" />
      <path d="M 4.95 16.07 L 3.22 17.07" />
      <path d="M 3.86 12.00 L 1.86 12.00" />
      <path d="M 4.95 7.93 L 3.22 6.93" />
      <path d="M 7.93 4.95 L 6.93 3.22" />
      <path d="M 12.00 3.86 L 12.00 1.86" />
      <path d="M 16.07 4.95 L 17.07 3.22" />
      <path d="M 19.05 7.93 L 20.78 6.93" />
      {children}
    </svg>
  );
});

export default PhysioEar;
