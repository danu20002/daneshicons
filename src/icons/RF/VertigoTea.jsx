import React from 'react';

export const iconData = {
  "id": "VertigoTea",
  "name": "VertigoTea",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 6.05 L 19.17 6.05 L 19.17 17.95 L 4.83 17.95 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 6.05 L 8.97 1.91 L 23.31 1.91 L 19.17 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 6.05 L 23.31 1.91 L 23.31 13.81 L 19.17 17.95"
      }
    ]
  ]
};

export const VertigoTea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 6.05 L 19.17 6.05 L 19.17 17.95 L 4.83 17.95 Z" />
      <path d="M 4.83 6.05 L 8.97 1.91 L 23.31 1.91 L 19.17 6.05" />
      <path d="M 19.17 6.05 L 23.31 1.91 L 23.31 13.81 L 19.17 17.95" />
      {children}
    </svg>
  );
});

export default VertigoTea;
