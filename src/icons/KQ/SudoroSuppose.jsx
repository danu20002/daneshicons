import React from 'react';

export const iconData = {
  "id": "SudoroSuppose",
  "name": "SudoroSuppose",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.92 5.20 L 19.08 5.20 L 19.08 18.80 L 4.92 18.80 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 5.20 L 9.60 0.52 L 23.76 0.52 L 19.08 5.20"
      }
    ],
    [
      "path",
      {
        "d": "M 19.08 5.20 L 23.76 0.52 L 23.76 14.12 L 19.08 18.80"
      }
    ]
  ]
};

export const SudoroSuppose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.92 5.20 L 19.08 5.20 L 19.08 18.80 L 4.92 18.80 Z" />
      <path d="M 4.92 5.20 L 9.60 0.52 L 23.76 0.52 L 19.08 5.20" />
      <path d="M 19.08 5.20 L 23.76 0.52 L 23.76 14.12 L 19.08 18.80" />
      {children}
    </svg>
  );
});

export default SudoroSuppose;
