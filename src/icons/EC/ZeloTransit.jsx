import React from 'react';

export const iconData = {
  "id": "ZeloTransit",
  "name": "ZeloTransit",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.71 12.00 a 8.29 8.29 0 1 0 16.59 0 a 8.29 8.29 0 1 0 -16.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 12.00 a 6.13 6.13 0 1 1 12.26 0 a 6.13 6.13 0 1 1 -12.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.79 12.00 L 21.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.86 18.09 L 18.11 19.66"
      }
    ],
    [
      "path",
      {
        "d": "M 10.27 19.60 L 9.82 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 15.38 L 3.18 16.25"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 8.62 L 3.18 7.75"
      }
    ],
    [
      "path",
      {
        "d": "M 10.27 4.40 L 9.82 2.45"
      }
    ],
    [
      "path",
      {
        "d": "M 16.86 5.91 L 18.11 4.34"
      }
    ]
  ]
};

export const ZeloTransit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.71 12.00 a 8.29 8.29 0 1 0 16.59 0 a 8.29 8.29 0 1 0 -16.59 0" />
      <path d="M 5.87 12.00 a 6.13 6.13 0 1 1 12.26 0 a 6.13 6.13 0 1 1 -12.26 0" />
      <path d="M 19.79 12.00 L 21.79 12.00" />
      <path d="M 16.86 18.09 L 18.11 19.66" />
      <path d="M 10.27 19.60 L 9.82 21.55" />
      <path d="M 4.98 15.38 L 3.18 16.25" />
      <path d="M 4.98 8.62 L 3.18 7.75" />
      <path d="M 10.27 4.40 L 9.82 2.45" />
      <path d="M 16.86 5.91 L 18.11 4.34" />
      {children}
    </svg>
  );
});

export default ZeloTransit;
