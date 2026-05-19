import React from 'react';

export const iconData = {
  "id": "NumeroThing",
  "name": "NumeroThing",
  "category": "XV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 12.00 a 8.95 8.95 0 1 0 17.90 0 a 8.95 8.95 0 1 0 -17.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 12.00 a 7.44 7.44 0 1 1 14.87 0 a 7.44 7.44 0 1 1 -14.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.45 12.00 L 22.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.84 16.97 L 20.45 18.14"
      }
    ],
    [
      "path",
      {
        "d": "M 14.61 20.04 L 15.23 21.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.39 20.04 L 8.77 21.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 16.97 L 3.55 18.14"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 12.00 L 1.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 7.03 L 3.55 5.86"
      }
    ],
    [
      "path",
      {
        "d": "M 9.39 3.96 L 8.77 2.06"
      }
    ],
    [
      "path",
      {
        "d": "M 14.61 3.96 L 15.23 2.06"
      }
    ],
    [
      "path",
      {
        "d": "M 18.84 7.03 L 20.45 5.86"
      }
    ]
  ]
};

export const NumeroThing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 12.00 a 8.95 8.95 0 1 0 17.90 0 a 8.95 8.95 0 1 0 -17.90 0" />
      <path d="M 4.56 12.00 a 7.44 7.44 0 1 1 14.87 0 a 7.44 7.44 0 1 1 -14.87 0" />
      <path d="M 20.45 12.00 L 22.45 12.00" />
      <path d="M 18.84 16.97 L 20.45 18.14" />
      <path d="M 14.61 20.04 L 15.23 21.94" />
      <path d="M 9.39 20.04 L 8.77 21.94" />
      <path d="M 5.16 16.97 L 3.55 18.14" />
      <path d="M 3.55 12.00 L 1.55 12.00" />
      <path d="M 5.16 7.03 L 3.55 5.86" />
      <path d="M 9.39 3.96 L 8.77 2.06" />
      <path d="M 14.61 3.96 L 15.23 2.06" />
      <path d="M 18.84 7.03 L 20.45 5.86" />
      {children}
    </svg>
  );
});

export default NumeroThing;
