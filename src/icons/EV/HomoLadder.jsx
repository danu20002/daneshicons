import React from 'react';

export const iconData = {
  "id": "HomoLadder",
  "name": "HomoLadder",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 12.00 a 8.25 8.25 0 1 0 16.49 0 a 8.25 8.25 0 1 0 -16.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.23 12.00 a 5.77 5.77 0 1 1 11.54 0 a 5.77 5.77 0 1 1 -11.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.75 12.00 L 21.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.93 16.98 L 19.47 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 13.35 19.63 L 13.69 21.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 18.71 L 7.13 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.72 14.65 L 2.84 15.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.72 9.35 L 2.84 8.67"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 5.29 L 7.13 3.56"
      }
    ],
    [
      "path",
      {
        "d": "M 13.35 4.37 L 13.69 2.40"
      }
    ],
    [
      "path",
      {
        "d": "M 17.93 7.02 L 19.47 5.74"
      }
    ]
  ]
};

export const HomoLadder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 12.00 a 8.25 8.25 0 1 0 16.49 0 a 8.25 8.25 0 1 0 -16.49 0" />
      <path d="M 6.23 12.00 a 5.77 5.77 0 1 1 11.54 0 a 5.77 5.77 0 1 1 -11.54 0" />
      <path d="M 19.75 12.00 L 21.75 12.00" />
      <path d="M 17.93 16.98 L 19.47 18.26" />
      <path d="M 13.35 19.63 L 13.69 21.60" />
      <path d="M 8.13 18.71 L 7.13 20.44" />
      <path d="M 4.72 14.65 L 2.84 15.33" />
      <path d="M 4.72 9.35 L 2.84 8.67" />
      <path d="M 8.13 5.29 L 7.13 3.56" />
      <path d="M 13.35 4.37 L 13.69 2.40" />
      <path d="M 17.93 7.02 L 19.47 5.74" />
      {children}
    </svg>
  );
});

export default HomoLadder;
