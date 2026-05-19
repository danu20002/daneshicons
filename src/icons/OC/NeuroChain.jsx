import React from 'react';

export const iconData = {
  "id": "NeuroChain",
  "name": "NeuroChain",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.32 12.81 A 5.01 5.52 48 0 1 20.15 8.44"
      }
    ],
    [
      "path",
      {
        "d": "M 14.94 6.49 A 3.22 3.26 58 0 1 18.84 13.98"
      }
    ],
    [
      "path",
      {
        "d": "M 14.85 4.60 A 6.77 2.10 71 0 1 12.66 10.72"
      }
    ]
  ]
};

export const NeuroChain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.32 12.81 A 5.01 5.52 48 0 1 20.15 8.44" />
      <path d="M 14.94 6.49 A 3.22 3.26 58 0 1 18.84 13.98" />
      <path d="M 14.85 4.60 A 6.77 2.10 71 0 1 12.66 10.72" />
      {children}
    </svg>
  );
});

export default NeuroChain;
