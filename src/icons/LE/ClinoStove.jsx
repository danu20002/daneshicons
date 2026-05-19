import React from 'react';

export const iconData = {
  "id": "ClinoStove",
  "name": "ClinoStove",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.41 10.54 L 7.97 3.65"
      }
    ],
    [
      "path",
      {
        "d": "M 16.90 12.36 A 2.12 2.20 30 0 1 18.10 13.41"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 9.87 L 18.12 19.66"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 6.15 L 5.45 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 16.95 L 21.93 8.55"
      }
    ]
  ]
};

export const ClinoStove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.41 10.54 L 7.97 3.65" />
      <path d="M 16.90 12.36 A 2.12 2.20 30 0 1 18.10 13.41" />
      <path d="M 15.26 9.87 L 18.12 19.66" />
      <path d="M 5.40 6.15 L 5.45 19.20" />
      <path d="M 5.37 16.95 L 21.93 8.55" />
      {children}
    </svg>
  );
});

export default ClinoStove;
