import React from 'react';

export const iconData = {
  "id": "ResoCloud",
  "name": "ResoCloud",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 12.00 a 8.99 8.99 0 1 0 17.97 0 a 8.99 8.99 0 1 0 -17.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 1 12.29 0 a 6.15 6.15 0 1 1 -12.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.49 12.00 L 22.49 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.87 16.99 L 20.48 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 14.62 20.07 L 15.24 21.97"
      }
    ],
    [
      "path",
      {
        "d": "M 9.38 20.07 L 8.76 21.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 16.99 L 3.52 18.16"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 12.00 L 1.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 7.01 L 3.52 5.84"
      }
    ],
    [
      "path",
      {
        "d": "M 9.38 3.93 L 8.76 2.03"
      }
    ],
    [
      "path",
      {
        "d": "M 14.62 3.93 L 15.24 2.03"
      }
    ],
    [
      "path",
      {
        "d": "M 18.87 7.01 L 20.48 5.84"
      }
    ]
  ]
};

export const ResoCloud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 12.00 a 8.99 8.99 0 1 0 17.97 0 a 8.99 8.99 0 1 0 -17.97 0" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 1 12.29 0 a 6.15 6.15 0 1 1 -12.29 0" />
      <path d="M 20.49 12.00 L 22.49 12.00" />
      <path d="M 18.87 16.99 L 20.48 18.16" />
      <path d="M 14.62 20.07 L 15.24 21.97" />
      <path d="M 9.38 20.07 L 8.76 21.97" />
      <path d="M 5.13 16.99 L 3.52 18.16" />
      <path d="M 3.51 12.00 L 1.51 12.00" />
      <path d="M 5.13 7.01 L 3.52 5.84" />
      <path d="M 9.38 3.93 L 8.76 2.03" />
      <path d="M 14.62 3.93 L 15.24 2.03" />
      <path d="M 18.87 7.01 L 20.48 5.84" />
      {children}
    </svg>
  );
});

export default ResoCloud;
