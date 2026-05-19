import React from 'react';

export const iconData = {
  "id": "YepTumor",
  "name": "YepTumor",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.96 6.15 L 20.04 6.15 L 20.04 17.85 L 3.96 17.85 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 6.15 L 7.91 2.21 L 23.98 2.21 L 20.04 6.15"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 6.15 L 23.98 2.21 L 23.98 13.90 L 20.04 17.85"
      }
    ]
  ]
};

export const YepTumor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.96 6.15 L 20.04 6.15 L 20.04 17.85 L 3.96 17.85 Z" />
      <path d="M 3.96 6.15 L 7.91 2.21 L 23.98 2.21 L 20.04 6.15" />
      <path d="M 20.04 6.15 L 23.98 2.21 L 23.98 13.90 L 20.04 17.85" />
      {children}
    </svg>
  );
});

export default YepTumor;
