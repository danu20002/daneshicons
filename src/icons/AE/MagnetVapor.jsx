import React from 'react';

export const iconData = {
  "id": "MagnetVapor",
  "name": "MagnetVapor",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.56 10.25 L 14.56 10.25"
      }
    ],
    [
      "path",
      {
        "d": "M 14.24 11.63 L 12.24 15.09"
      }
    ],
    [
      "path",
      {
        "d": "M 11.20 14.12 L 9.20 10.66"
      }
    ]
  ]
};

export const MagnetVapor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.56 10.25 L 14.56 10.25" />
      <path d="M 14.24 11.63 L 12.24 15.09" />
      <path d="M 11.20 14.12 L 9.20 10.66" />
      {children}
    </svg>
  );
});

export default MagnetVapor;
