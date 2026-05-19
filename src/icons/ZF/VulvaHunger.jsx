import React from 'react';

export const iconData = {
  "id": "VulvaHunger",
  "name": "VulvaHunger",
  "category": "ZF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.90 12.00 a 9.10 9.10 0 1 0 18.19 0 a 9.10 9.10 0 1 0 -18.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 8.97 a 8.58 2.5730740007654345 0 1 0 17.15 0 a 8.58 2.5730740007654345 0 1 0 -17.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 15.03 a 8.58 2.5730740007654345 0 1 0 17.15 0 a 8.58 2.5730740007654345 0 1 0 -17.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.55 4.12 A 2 2 0 0 0 16.55 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 16.55 4.12 A 2 2 0 0 1 16.55 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 4.12 A 2 2 0 0 0 7.45 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 4.12 A 2 2 0 0 1 7.45 19.88"
      }
    ]
  ]
};

export const VulvaHunger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.90 12.00 a 9.10 9.10 0 1 0 18.19 0 a 9.10 9.10 0 1 0 -18.19 0" />
      <path d="M 3.42 8.97 a 8.58 2.5730740007654345 0 1 0 17.15 0 a 8.58 2.5730740007654345 0 1 0 -17.15 0" />
      <path d="M 3.42 15.03 a 8.58 2.5730740007654345 0 1 0 17.15 0 a 8.58 2.5730740007654345 0 1 0 -17.15 0" />
      <path d="M 16.55 4.12 A 2 2 0 0 0 16.55 19.88" />
      <path d="M 16.55 4.12 A 2 2 0 0 1 16.55 19.88" />
      <path d="M 7.45 4.12 A 2 2 0 0 0 7.45 19.88" />
      <path d="M 7.45 4.12 A 2 2 0 0 1 7.45 19.88" />
      {children}
    </svg>
  );
});

export default VulvaHunger;
