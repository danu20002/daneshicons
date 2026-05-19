import React from 'react';

export const iconData = {
  "id": "HaptoThank",
  "name": "HaptoThank",
  "category": "UX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 12.00 a 8.39 8.39 0 1 0 16.78 0 a 8.39 8.39 0 1 0 -16.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 12.00 a 6.14 6.14 0 1 1 12.28 0 a 6.14 6.14 0 1 1 -12.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.89 12.00 L 21.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.38 16.64 L 20.00 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 19.50 L 15.06 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 19.50 L 8.94 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 16.64 L 4.00 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 12.00 L 2.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 7.36 L 4.00 6.19"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 4.50 L 8.94 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 4.50 L 15.06 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 18.38 7.36 L 20.00 6.19"
      }
    ]
  ]
};

export const HaptoThank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 12.00 a 8.39 8.39 0 1 0 16.78 0 a 8.39 8.39 0 1 0 -16.78 0" />
      <path d="M 5.86 12.00 a 6.14 6.14 0 1 1 12.28 0 a 6.14 6.14 0 1 1 -12.28 0" />
      <path d="M 19.89 12.00 L 21.89 12.00" />
      <path d="M 18.38 16.64 L 20.00 17.81" />
      <path d="M 14.44 19.50 L 15.06 21.40" />
      <path d="M 9.56 19.50 L 8.94 21.40" />
      <path d="M 5.62 16.64 L 4.00 17.81" />
      <path d="M 4.11 12.00 L 2.11 12.00" />
      <path d="M 5.62 7.36 L 4.00 6.19" />
      <path d="M 9.56 4.50 L 8.94 2.60" />
      <path d="M 14.44 4.50 L 15.06 2.60" />
      <path d="M 18.38 7.36 L 20.00 6.19" />
      {children}
    </svg>
  );
});

export default HaptoThank;
