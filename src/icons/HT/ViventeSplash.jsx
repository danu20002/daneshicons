import React from 'react';

export const iconData = {
  "id": "ViventeSplash",
  "name": "ViventeSplash",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 12.00 a 6.95 6.95 0 1 1 13.91 0 a 6.95 6.95 0 1 1 -13.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.12 12.00 L 22.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.57 16.77 L 20.19 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 14.51 19.73 L 15.13 21.63"
      }
    ],
    [
      "path",
      {
        "d": "M 9.49 19.73 L 8.87 21.63"
      }
    ],
    [
      "path",
      {
        "d": "M 5.43 16.77 L 3.81 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 3.88 12.00 L 1.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.43 7.23 L 3.81 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 9.49 4.27 L 8.87 2.37"
      }
    ],
    [
      "path",
      {
        "d": "M 14.51 4.27 L 15.13 2.37"
      }
    ],
    [
      "path",
      {
        "d": "M 18.57 7.23 L 20.19 6.05"
      }
    ]
  ]
};

export const ViventeSplash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0" />
      <path d="M 5.05 12.00 a 6.95 6.95 0 1 1 13.91 0 a 6.95 6.95 0 1 1 -13.91 0" />
      <path d="M 20.12 12.00 L 22.12 12.00" />
      <path d="M 18.57 16.77 L 20.19 17.95" />
      <path d="M 14.51 19.73 L 15.13 21.63" />
      <path d="M 9.49 19.73 L 8.87 21.63" />
      <path d="M 5.43 16.77 L 3.81 17.95" />
      <path d="M 3.88 12.00 L 1.88 12.00" />
      <path d="M 5.43 7.23 L 3.81 6.05" />
      <path d="M 9.49 4.27 L 8.87 2.37" />
      <path d="M 14.51 4.27 L 15.13 2.37" />
      <path d="M 18.57 7.23 L 20.19 6.05" />
      {children}
    </svg>
  );
});

export default ViventeSplash;
