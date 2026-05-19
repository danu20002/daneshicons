import React from 'react';

export const iconData = {
  "id": "ScleroMind",
  "name": "ScleroMind",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 8.75 0 1 0 17.51 0 a 8.75 8.75 0 1 0 -17.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 12.00 a 5.98 5.98 0 1 1 11.96 0 a 5.98 5.98 0 1 1 -11.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.25 12.00 L 22.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 16.85 L 20.30 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 14.55 19.85 L 15.17 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 9.45 19.85 L 8.83 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 16.85 L 3.70 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 12.00 L 1.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 7.15 L 3.70 5.97"
      }
    ],
    [
      "path",
      {
        "d": "M 9.45 4.15 L 8.83 2.25"
      }
    ],
    [
      "path",
      {
        "d": "M 14.55 4.15 L 15.17 2.25"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 7.15 L 20.30 5.97"
      }
    ]
  ]
};

export const ScleroMind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.25 12.00 a 8.75 8.75 0 1 0 17.51 0 a 8.75 8.75 0 1 0 -17.51 0" />
      <path d="M 6.02 12.00 a 5.98 5.98 0 1 1 11.96 0 a 5.98 5.98 0 1 1 -11.96 0" />
      <path d="M 20.25 12.00 L 22.25 12.00" />
      <path d="M 18.68 16.85 L 20.30 18.03" />
      <path d="M 14.55 19.85 L 15.17 21.75" />
      <path d="M 9.45 19.85 L 8.83 21.75" />
      <path d="M 5.32 16.85 L 3.70 18.03" />
      <path d="M 3.75 12.00 L 1.75 12.00" />
      <path d="M 5.32 7.15 L 3.70 5.97" />
      <path d="M 9.45 4.15 L 8.83 2.25" />
      <path d="M 14.55 4.15 L 15.17 2.25" />
      <path d="M 18.68 7.15 L 20.30 5.97" />
      {children}
    </svg>
  );
});

export default ScleroMind;
