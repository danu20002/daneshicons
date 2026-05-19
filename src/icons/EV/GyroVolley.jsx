import React from 'react';

export const iconData = {
  "id": "GyroVolley",
  "name": "GyroVolley",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 12.00 a 6.79 6.79 0 1 1 13.58 0 a 6.79 6.79 0 1 1 -13.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 12.00 L 21.95 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 18.22 L 18.20 19.78"
      }
    ],
    [
      "path",
      {
        "d": "M 10.23 19.75 L 9.79 21.70"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 15.45 L 3.03 16.32"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 8.55 L 3.03 7.68"
      }
    ],
    [
      "path",
      {
        "d": "M 10.23 4.25 L 9.79 2.30"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 5.78 L 18.20 4.22"
      }
    ]
  ]
};

export const GyroVolley = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0" />
      <path d="M 5.21 12.00 a 6.79 6.79 0 1 1 13.58 0 a 6.79 6.79 0 1 1 -13.58 0" />
      <path d="M 19.95 12.00 L 21.95 12.00" />
      <path d="M 16.96 18.22 L 18.20 19.78" />
      <path d="M 10.23 19.75 L 9.79 21.70" />
      <path d="M 4.84 15.45 L 3.03 16.32" />
      <path d="M 4.84 8.55 L 3.03 7.68" />
      <path d="M 10.23 4.25 L 9.79 2.30" />
      <path d="M 16.96 5.78 L 18.20 4.22" />
      {children}
    </svg>
  );
});

export default GyroVolley;
