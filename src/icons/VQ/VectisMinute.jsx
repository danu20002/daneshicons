import React from 'react';

export const iconData = {
  "id": "VectisMinute",
  "name": "VectisMinute",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 12.00 a 8.97 8.97 0 1 0 17.94 0 a 8.97 8.97 0 1 0 -17.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 12.00 a 7.32 7.32 0 1 1 14.63 0 a 7.32 7.32 0 1 1 -14.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.47 12.00 L 22.47 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.85 16.98 L 20.47 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 14.62 20.06 L 15.24 21.96"
      }
    ],
    [
      "path",
      {
        "d": "M 9.38 20.06 L 8.76 21.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.15 16.98 L 3.53 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 12.00 L 1.53 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.15 7.02 L 3.53 5.85"
      }
    ],
    [
      "path",
      {
        "d": "M 9.38 3.94 L 8.76 2.04"
      }
    ],
    [
      "path",
      {
        "d": "M 14.62 3.94 L 15.24 2.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.85 7.02 L 20.47 5.85"
      }
    ]
  ]
};

export const VectisMinute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 12.00 a 8.97 8.97 0 1 0 17.94 0 a 8.97 8.97 0 1 0 -17.94 0" />
      <path d="M 4.68 12.00 a 7.32 7.32 0 1 1 14.63 0 a 7.32 7.32 0 1 1 -14.63 0" />
      <path d="M 20.47 12.00 L 22.47 12.00" />
      <path d="M 18.85 16.98 L 20.47 18.15" />
      <path d="M 14.62 20.06 L 15.24 21.96" />
      <path d="M 9.38 20.06 L 8.76 21.96" />
      <path d="M 5.15 16.98 L 3.53 18.15" />
      <path d="M 3.53 12.00 L 1.53 12.00" />
      <path d="M 5.15 7.02 L 3.53 5.85" />
      <path d="M 9.38 3.94 L 8.76 2.04" />
      <path d="M 14.62 3.94 L 15.24 2.04" />
      <path d="M 18.85 7.02 L 20.47 5.85" />
      {children}
    </svg>
  );
});

export default VectisMinute;
