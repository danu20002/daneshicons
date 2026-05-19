import React from 'react';

export const iconData = {
  "id": "SpicoBolt",
  "name": "SpicoBolt",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.37 12.00 a 7.63 7.63 0 1 0 15.27 0 a 7.63 7.63 0 1 0 -15.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 12.00 a 4.95 4.95 0 1 1 9.90 0 a 4.95 4.95 0 1 1 -9.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.13 12.00 L 21.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.45 17.58 L 17.69 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 18.95 L 9.97 20.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 15.10 L 3.77 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 8.90 L 3.77 8.04"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 5.05 L 9.97 3.10"
      }
    ],
    [
      "path",
      {
        "d": "M 16.45 6.42 L 17.69 4.86"
      }
    ]
  ]
};

export const SpicoBolt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.37 12.00 a 7.63 7.63 0 1 0 15.27 0 a 7.63 7.63 0 1 0 -15.27 0" />
      <path d="M 7.05 12.00 a 4.95 4.95 0 1 1 9.90 0 a 4.95 4.95 0 1 1 -9.90 0" />
      <path d="M 19.13 12.00 L 21.13 12.00" />
      <path d="M 16.45 17.58 L 17.69 19.14" />
      <path d="M 10.41 18.95 L 9.97 20.90" />
      <path d="M 5.57 15.10 L 3.77 15.96" />
      <path d="M 5.57 8.90 L 3.77 8.04" />
      <path d="M 10.41 5.05 L 9.97 3.10" />
      <path d="M 16.45 6.42 L 17.69 4.86" />
      {children}
    </svg>
  );
});

export default SpicoBolt;
