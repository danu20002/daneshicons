import React from 'react';

export const iconData = {
  "id": "SplenoYoung",
  "name": "SplenoYoung",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.30 6.90 L 12.30 6.90"
      }
    ],
    [
      "path",
      {
        "d": "M 15.71 6.90 L 16.95 10.71"
      }
    ],
    [
      "path",
      {
        "d": "M 17.99 13.95 L 14.76 16.31"
      }
    ],
    [
      "path",
      {
        "d": "M 11.99 18.30 L 8.76 15.95"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 13.94 L 7.24 10.14"
      }
    ]
  ]
};

export const SplenoYoung = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.30 6.90 L 12.30 6.90" />
      <path d="M 15.71 6.90 L 16.95 10.71" />
      <path d="M 17.99 13.95 L 14.76 16.31" />
      <path d="M 11.99 18.30 L 8.76 15.95" />
      <path d="M 6.00 13.94 L 7.24 10.14" />
      {children}
    </svg>
  );
});

export default SplenoYoung;
