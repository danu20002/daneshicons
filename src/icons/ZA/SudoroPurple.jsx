import React from 'react';

export const iconData = {
  "id": "SudoroPurple",
  "name": "SudoroPurple",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.64 7.27 L 11.64 7.27"
      }
    ],
    [
      "path",
      {
        "d": "M 13.92 5.86 L 15.92 9.32"
      }
    ],
    [
      "path",
      {
        "d": "M 18.28 10.59 L 16.28 14.05"
      }
    ],
    [
      "path",
      {
        "d": "M 16.36 16.73 L 12.36 16.73"
      }
    ],
    [
      "path",
      {
        "d": "M 10.08 18.14 L 8.08 14.68"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 13.41 L 7.72 9.95"
      }
    ]
  ]
};

export const SudoroPurple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.64 7.27 L 11.64 7.27" />
      <path d="M 13.92 5.86 L 15.92 9.32" />
      <path d="M 18.28 10.59 L 16.28 14.05" />
      <path d="M 16.36 16.73 L 12.36 16.73" />
      <path d="M 10.08 18.14 L 8.08 14.68" />
      <path d="M 5.72 13.41 L 7.72 9.95" />
      {children}
    </svg>
  );
});

export default SudoroPurple;
