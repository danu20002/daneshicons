import React from 'react';

export const iconData = {
  "id": "PseudoWade",
  "name": "PseudoWade",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 12.00 a 8.96 8.96 0 1 0 17.92 0 a 8.96 8.96 0 1 0 -17.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 12.00 a 6.78 6.78 0 1 1 13.57 0 a 6.78 6.78 0 1 1 -13.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.46 12.00 L 22.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.85 16.97 L 20.46 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 14.61 20.05 L 15.23 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 9.39 20.05 L 8.77 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 5.15 16.97 L 3.54 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 L 1.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.15 7.03 L 3.54 5.85"
      }
    ],
    [
      "path",
      {
        "d": "M 9.39 3.95 L 8.77 2.05"
      }
    ],
    [
      "path",
      {
        "d": "M 14.61 3.95 L 15.23 2.05"
      }
    ],
    [
      "path",
      {
        "d": "M 18.85 7.03 L 20.46 5.85"
      }
    ]
  ]
};

export const PseudoWade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 12.00 a 8.96 8.96 0 1 0 17.92 0 a 8.96 8.96 0 1 0 -17.92 0" />
      <path d="M 5.22 12.00 a 6.78 6.78 0 1 1 13.57 0 a 6.78 6.78 0 1 1 -13.57 0" />
      <path d="M 20.46 12.00 L 22.46 12.00" />
      <path d="M 18.85 16.97 L 20.46 18.15" />
      <path d="M 14.61 20.05 L 15.23 21.95" />
      <path d="M 9.39 20.05 L 8.77 21.95" />
      <path d="M 5.15 16.97 L 3.54 18.15" />
      <path d="M 3.54 12.00 L 1.54 12.00" />
      <path d="M 5.15 7.03 L 3.54 5.85" />
      <path d="M 9.39 3.95 L 8.77 2.05" />
      <path d="M 14.61 3.95 L 15.23 2.05" />
      <path d="M 18.85 7.03 L 20.46 5.85" />
      {children}
    </svg>
  );
});

export default PseudoWade;
