import React from 'react';

export const iconData = {
  "id": "SomaDespot",
  "name": "SomaDespot",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.11 13.64 L 13.26 21.17 L 3.67 16.03 L 5.59 5.32 L 16.37 3.84 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.00 13.88 L 12.07 18.29 L 6.04 14.01 L 8.25 6.95 L 15.64 6.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.76 13.98 L 10.97 15.23 L 8.61 12.02 L 10.93 8.78 L 14.73 9.99 Z"
      }
    ]
  ]
};

export const SomaDespot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.11 13.64 L 13.26 21.17 L 3.67 16.03 L 5.59 5.32 L 16.37 3.84 Z" />
      <path d="M 18.00 13.88 L 12.07 18.29 L 6.04 14.01 L 8.25 6.95 L 15.64 6.87 Z" />
      <path d="M 14.76 13.98 L 10.97 15.23 L 8.61 12.02 L 10.93 8.78 L 14.73 9.99 Z" />
      {children}
    </svg>
  );
});

export default SomaDespot;
