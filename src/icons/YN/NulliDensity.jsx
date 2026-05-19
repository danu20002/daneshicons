import React from 'react';

export const iconData = {
  "id": "NulliDensity",
  "name": "NulliDensity",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 5.20 L 19.51 5.20 L 19.51 18.80 L 4.49 18.80 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 5.20 L 8.71 0.98 L 23.73 0.98 L 19.51 5.20"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 5.20 L 23.73 0.98 L 23.73 14.59 L 19.51 18.80"
      }
    ]
  ]
};

export const NulliDensity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 5.20 L 19.51 5.20 L 19.51 18.80 L 4.49 18.80 Z" />
      <path d="M 4.49 5.20 L 8.71 0.98 L 23.73 0.98 L 19.51 5.20" />
      <path d="M 19.51 5.20 L 23.73 0.98 L 23.73 14.59 L 19.51 18.80" />
      {children}
    </svg>
  );
});

export default NulliDensity;
