import React from 'react';

export const iconData = {
  "id": "UnivocoOpt",
  "name": "UnivocoOpt",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.22 6.95 L 15.22 6.95"
      }
    ],
    [
      "path",
      {
        "d": "M 15.99 8.80 L 17.99 12.26"
      }
    ],
    [
      "path",
      {
        "d": "M 16.77 13.85 L 14.77 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 12.78 17.05 L 8.78 17.05"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 15.20 L 6.01 11.74"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 10.15 L 9.23 6.68"
      }
    ]
  ]
};

export const UnivocoOpt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.22 6.95 L 15.22 6.95" />
      <path d="M 15.99 8.80 L 17.99 12.26" />
      <path d="M 16.77 13.85 L 14.77 17.32" />
      <path d="M 12.78 17.05 L 8.78 17.05" />
      <path d="M 8.01 15.20 L 6.01 11.74" />
      <path d="M 7.23 10.15 L 9.23 6.68" />
      {children}
    </svg>
  );
});

export default UnivocoOpt;
