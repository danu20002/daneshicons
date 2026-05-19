import React from 'react';

export const iconData = {
  "id": "ViaggioLife",
  "name": "ViaggioLife",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.20 5.14 L 20.80 5.14 L 20.80 18.86 L 3.20 18.86 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 5.14 L 7.54 0.80 L 25.14 0.80 L 20.80 5.14"
      }
    ],
    [
      "path",
      {
        "d": "M 20.80 5.14 L 25.14 0.80 L 25.14 14.52 L 20.80 18.86"
      }
    ]
  ]
};

export const ViaggioLife = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.20 5.14 L 20.80 5.14 L 20.80 18.86 L 3.20 18.86 Z" />
      <path d="M 3.20 5.14 L 7.54 0.80 L 25.14 0.80 L 20.80 5.14" />
      <path d="M 20.80 5.14 L 25.14 0.80 L 25.14 14.52 L 20.80 18.86" />
      {children}
    </svg>
  );
});

export default ViaggioLife;
