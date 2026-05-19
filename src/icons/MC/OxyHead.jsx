import React from 'react';

export const iconData = {
  "id": "OxyHead",
  "name": "OxyHead",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.78 6.12 L 19.22 6.12 L 19.22 17.88 L 4.78 17.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 6.12 L 9.05 1.85 L 23.50 1.85 L 19.22 6.12"
      }
    ],
    [
      "path",
      {
        "d": "M 19.22 6.12 L 23.50 1.85 L 23.50 13.60 L 19.22 17.88"
      }
    ]
  ]
};

export const OxyHead = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.78 6.12 L 19.22 6.12 L 19.22 17.88 L 4.78 17.88 Z" />
      <path d="M 4.78 6.12 L 9.05 1.85 L 23.50 1.85 L 19.22 6.12" />
      <path d="M 19.22 6.12 L 23.50 1.85 L 23.50 13.60 L 19.22 17.88" />
      {children}
    </svg>
  );
});

export default OxyHead;
