import React from 'react';

export const iconData = {
  "id": "DuctoSibling",
  "name": "DuctoSibling",
  "category": "PP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.13 13.32 L 13.56 21.10 L 3.83 16.30 L 5.39 5.56 L 16.08 3.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 14.57 L 11.23 17.98 L 6.08 13.12 L 9.11 6.72 L 16.13 7.61 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.38 14.00 L 10.83 14.88 L 8.90 11.78 L 11.25 8.99 L 14.63 10.36 Z"
      }
    ]
  ]
};

export const DuctoSibling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.13 13.32 L 13.56 21.10 L 3.83 16.30 L 5.39 5.56 L 16.08 3.72 Z" />
      <path d="M 17.45 14.57 L 11.23 17.98 L 6.08 13.12 L 9.11 6.72 L 16.13 7.61 Z" />
      <path d="M 14.38 14.00 L 10.83 14.88 L 8.90 11.78 L 11.25 8.99 L 14.63 10.36 Z" />
      {children}
    </svg>
  );
});

export default DuctoSibling;
