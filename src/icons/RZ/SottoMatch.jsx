import React from 'react';

export const iconData = {
  "id": "SottoMatch",
  "name": "SottoMatch",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 12.00 a 7.26 7.26 0 1 0 14.53 0 a 7.26 7.26 0 1 0 -14.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 12.00 a 4.94 4.94 0 1 1 9.89 0 a 4.94 4.94 0 1 1 -9.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.76 12.00 L 20.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.47 15.98 L 19.09 17.15"
      }
    ],
    [
      "path",
      {
        "d": "M 14.09 18.43 L 14.71 20.33"
      }
    ],
    [
      "path",
      {
        "d": "M 9.91 18.43 L 9.29 20.33"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 15.98 L 4.91 17.15"
      }
    ],
    [
      "path",
      {
        "d": "M 5.24 12.00 L 3.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 8.02 L 4.91 6.85"
      }
    ],
    [
      "path",
      {
        "d": "M 9.91 5.57 L 9.29 3.67"
      }
    ],
    [
      "path",
      {
        "d": "M 14.09 5.57 L 14.71 3.67"
      }
    ],
    [
      "path",
      {
        "d": "M 17.47 8.02 L 19.09 6.85"
      }
    ]
  ]
};

export const SottoMatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 12.00 a 7.26 7.26 0 1 0 14.53 0 a 7.26 7.26 0 1 0 -14.53 0" />
      <path d="M 7.06 12.00 a 4.94 4.94 0 1 1 9.89 0 a 4.94 4.94 0 1 1 -9.89 0" />
      <path d="M 18.76 12.00 L 20.76 12.00" />
      <path d="M 17.47 15.98 L 19.09 17.15" />
      <path d="M 14.09 18.43 L 14.71 20.33" />
      <path d="M 9.91 18.43 L 9.29 20.33" />
      <path d="M 6.53 15.98 L 4.91 17.15" />
      <path d="M 5.24 12.00 L 3.24 12.00" />
      <path d="M 6.53 8.02 L 4.91 6.85" />
      <path d="M 9.91 5.57 L 9.29 3.67" />
      <path d="M 14.09 5.57 L 14.71 3.67" />
      <path d="M 17.47 8.02 L 19.09 6.85" />
      {children}
    </svg>
  );
});

export default SottoMatch;
