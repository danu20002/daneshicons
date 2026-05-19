import React from 'react';

export const iconData = {
  "id": "VogaAxel",
  "name": "VogaAxel",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.08 12.00 a 7.92 7.92 0 1 0 15.83 0 a 7.92 7.92 0 1 0 -15.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 12.00 a 6.12 6.12 0 1 1 12.25 0 a 6.12 6.12 0 1 1 -12.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.42 12.00 L 21.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.00 16.36 L 19.62 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 19.05 L 14.91 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 9.71 19.05 L 9.09 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 16.36 L 4.38 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.58 12.00 L 2.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 7.64 L 4.38 6.47"
      }
    ],
    [
      "path",
      {
        "d": "M 9.71 4.95 L 9.09 3.05"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 4.95 L 14.91 3.05"
      }
    ],
    [
      "path",
      {
        "d": "M 18.00 7.64 L 19.62 6.47"
      }
    ]
  ]
};

export const VogaAxel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.08 12.00 a 7.92 7.92 0 1 0 15.83 0 a 7.92 7.92 0 1 0 -15.83 0" />
      <path d="M 5.88 12.00 a 6.12 6.12 0 1 1 12.25 0 a 6.12 6.12 0 1 1 -12.25 0" />
      <path d="M 19.42 12.00 L 21.42 12.00" />
      <path d="M 18.00 16.36 L 19.62 17.53" />
      <path d="M 14.29 19.05 L 14.91 20.95" />
      <path d="M 9.71 19.05 L 9.09 20.95" />
      <path d="M 6.00 16.36 L 4.38 17.53" />
      <path d="M 4.58 12.00 L 2.58 12.00" />
      <path d="M 6.00 7.64 L 4.38 6.47" />
      <path d="M 9.71 4.95 L 9.09 3.05" />
      <path d="M 14.29 4.95 L 14.91 3.05" />
      <path d="M 18.00 7.64 L 19.62 6.47" />
      {children}
    </svg>
  );
});

export default VogaAxel;
