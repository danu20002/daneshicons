import React from 'react';

export const iconData = {
  "id": "XoloRaccoon",
  "name": "XoloRaccoon",
  "category": "XV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 12.00 a 8.95 8.95 0 1 0 17.91 0 a 8.95 8.95 0 1 0 -17.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 12.00 a 7.23 7.23 0 1 1 14.46 0 a 7.23 7.23 0 1 1 -14.46 0"
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
        "d": "M 18.48 17.43 L 20.01 18.72"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 20.33 L 13.82 22.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 19.32 L 6.77 21.05"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 14.89 L 2.18 15.58"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 9.11 L 2.18 8.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 4.68 L 6.77 2.95"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 3.67 L 13.82 1.70"
      }
    ],
    [
      "path",
      {
        "d": "M 18.48 6.57 L 20.01 5.28"
      }
    ]
  ]
};

export const XoloRaccoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 12.00 a 8.95 8.95 0 1 0 17.91 0 a 8.95 8.95 0 1 0 -17.91 0" />
      <path d="M 4.77 12.00 a 7.23 7.23 0 1 1 14.46 0 a 7.23 7.23 0 1 1 -14.46 0" />
      <path d="M 20.45 12.00 L 22.45 12.00" />
      <path d="M 18.48 17.43 L 20.01 18.72" />
      <path d="M 13.47 20.33 L 13.82 22.30" />
      <path d="M 7.77 19.32 L 6.77 21.05" />
      <path d="M 4.06 14.89 L 2.18 15.58" />
      <path d="M 4.06 9.11 L 2.18 8.42" />
      <path d="M 7.77 4.68 L 6.77 2.95" />
      <path d="M 13.47 3.67 L 13.82 1.70" />
      <path d="M 18.48 6.57 L 20.01 5.28" />
      {children}
    </svg>
  );
});

export default XoloRaccoon;
