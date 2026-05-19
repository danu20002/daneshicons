import React from 'react';

export const iconData = {
  "id": "VileGlitch",
  "name": "VileGlitch",
  "category": "N",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.10 13.38 L 10.62 21.10 L 2.90 10.62 L 13.38 2.90 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.63 14.55 L 9.45 17.63 L 6.37 9.45 L 14.55 6.37 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.52 14.42 L 9.58 14.52 L 9.48 9.58 L 14.42 9.48 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.11 12.15 L 11.85 12.11 L 11.89 11.85 L 12.15 11.89 Z"
      }
    ]
  ]
};

export const VileGlitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.10 13.38 L 10.62 21.10 L 2.90 10.62 L 13.38 2.90 Z" />
      <path d="M 17.63 14.55 L 9.45 17.63 L 6.37 9.45 L 14.55 6.37 Z" />
      <path d="M 14.52 14.42 L 9.58 14.52 L 9.48 9.58 L 14.42 9.48 Z" />
      <path d="M 12.11 12.15 L 11.85 12.11 L 11.89 11.85 L 12.15 11.89 Z" />
      {children}
    </svg>
  );
});

export default VileGlitch;
