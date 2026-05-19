import React from 'react';

export const iconData = {
  "id": "VolaticoPlatter",
  "name": "VolaticoPlatter",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 5.90 L 19.36 5.90 L 19.36 18.10 L 4.64 18.10 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 5.90 L 8.08 2.46 L 22.81 2.46 L 19.36 5.90"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 5.90 L 22.81 2.46 L 22.81 14.65 L 19.36 18.10"
      }
    ]
  ]
};

export const VolaticoPlatter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 5.90 L 19.36 5.90 L 19.36 18.10 L 4.64 18.10 Z" />
      <path d="M 4.64 5.90 L 8.08 2.46 L 22.81 2.46 L 19.36 5.90" />
      <path d="M 19.36 5.90 L 22.81 2.46 L 22.81 14.65 L 19.36 18.10" />
      {children}
    </svg>
  );
});

export default VolaticoPlatter;
