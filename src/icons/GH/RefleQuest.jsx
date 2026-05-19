import React from 'react';

export const iconData = {
  "id": "RefleQuest",
  "name": "RefleQuest",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.91 12.00 a 8.09 8.09 0 1 0 16.19 0 a 8.09 8.09 0 1 0 -16.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 12.00 a 5.57 5.57 0 1 1 11.15 0 a 5.57 5.57 0 1 1 -11.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.59 12.00 L 21.59 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.14 16.46 L 19.76 17.64"
      }
    ],
    [
      "path",
      {
        "d": "M 14.35 19.22 L 14.96 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 9.65 19.22 L 9.04 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 16.46 L 4.24 17.64"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 12.00 L 2.41 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 7.54 L 4.24 6.36"
      }
    ],
    [
      "path",
      {
        "d": "M 9.65 4.78 L 9.04 2.88"
      }
    ],
    [
      "path",
      {
        "d": "M 14.35 4.78 L 14.96 2.88"
      }
    ],
    [
      "path",
      {
        "d": "M 18.14 7.54 L 19.76 6.36"
      }
    ]
  ]
};

export const RefleQuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.91 12.00 a 8.09 8.09 0 1 0 16.19 0 a 8.09 8.09 0 1 0 -16.19 0" />
      <path d="M 6.43 12.00 a 5.57 5.57 0 1 1 11.15 0 a 5.57 5.57 0 1 1 -11.15 0" />
      <path d="M 19.59 12.00 L 21.59 12.00" />
      <path d="M 18.14 16.46 L 19.76 17.64" />
      <path d="M 14.35 19.22 L 14.96 21.12" />
      <path d="M 9.65 19.22 L 9.04 21.12" />
      <path d="M 5.86 16.46 L 4.24 17.64" />
      <path d="M 4.41 12.00 L 2.41 12.00" />
      <path d="M 5.86 7.54 L 4.24 6.36" />
      <path d="M 9.65 4.78 L 9.04 2.88" />
      <path d="M 14.35 4.78 L 14.96 2.88" />
      <path d="M 18.14 7.54 L 19.76 6.36" />
      {children}
    </svg>
  );
});

export default RefleQuest;
