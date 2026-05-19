import React from 'react';

export const iconData = {
  "id": "SyringoMoss",
  "name": "SyringoMoss",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 8.72 0 1 0 17.45 0 a 8.72 8.72 0 1 0 -17.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 12.00 a 6.86 6.86 0 1 1 13.72 0 a 6.86 6.86 0 1 1 -13.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.22 12.00 L 22.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 16.11 L 20.85 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 19.12 L 17.11 20.85"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.22 L 12.00 22.22"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 19.12 L 6.89 20.85"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 16.11 L 3.15 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 12.00 L 1.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 7.89 L 3.15 6.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 4.88 L 6.89 3.15"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.78 L 12.00 1.78"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 4.88 L 17.11 3.15"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 7.89 L 20.85 6.89"
      }
    ]
  ]
};

export const SyringoMoss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 12.00 a 8.72 8.72 0 1 0 17.45 0 a 8.72 8.72 0 1 0 -17.45 0" />
      <path d="M 5.14 12.00 a 6.86 6.86 0 1 1 13.72 0 a 6.86 6.86 0 1 1 -13.72 0" />
      <path d="M 20.22 12.00 L 22.22 12.00" />
      <path d="M 19.12 16.11 L 20.85 17.11" />
      <path d="M 16.11 19.12 L 17.11 20.85" />
      <path d="M 12.00 20.22 L 12.00 22.22" />
      <path d="M 7.89 19.12 L 6.89 20.85" />
      <path d="M 4.88 16.11 L 3.15 17.11" />
      <path d="M 3.78 12.00 L 1.78 12.00" />
      <path d="M 4.88 7.89 L 3.15 6.89" />
      <path d="M 7.89 4.88 L 6.89 3.15" />
      <path d="M 12.00 3.78 L 12.00 1.78" />
      <path d="M 16.11 4.88 L 17.11 3.15" />
      <path d="M 19.12 7.89 L 20.85 6.89" />
      {children}
    </svg>
  );
});

export default SyringoMoss;
