import React from 'react';

export const iconData = {
  "id": "NucleoSmash",
  "name": "NucleoSmash",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 5.12 L 19.83 5.12 L 19.83 18.88 L 4.17 18.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 5.12 L 8.07 1.21 L 23.74 1.21 L 19.83 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 19.83 5.12 L 23.74 1.21 L 23.74 14.97 L 19.83 18.88"
      }
    ]
  ]
};

export const NucleoSmash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 5.12 L 19.83 5.12 L 19.83 18.88 L 4.17 18.88 Z" />
      <path d="M 4.17 5.12 L 8.07 1.21 L 23.74 1.21 L 19.83 5.12" />
      <path d="M 19.83 5.12 L 23.74 1.21 L 23.74 14.97 L 19.83 18.88" />
      {children}
    </svg>
  );
});

export default NucleoSmash;
