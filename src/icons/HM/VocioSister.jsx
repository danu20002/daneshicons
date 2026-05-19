import React from 'react';

export const iconData = {
  "id": "VocioSister",
  "name": "VocioSister",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.38 9.17 L 14.38 9.17"
      }
    ],
    [
      "path",
      {
        "d": "M 13.64 9.18 L 15.64 12.65"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 12.01 L 13.26 15.48"
      }
    ],
    [
      "path",
      {
        "d": "M 13.62 14.83 L 9.62 14.83"
      }
    ],
    [
      "path",
      {
        "d": "M 10.36 14.82 L 8.36 11.35"
      }
    ],
    [
      "path",
      {
        "d": "M 8.74 11.99 L 10.74 8.52"
      }
    ]
  ]
};

export const VocioSister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.38 9.17 L 14.38 9.17" />
      <path d="M 13.64 9.18 L 15.64 12.65" />
      <path d="M 15.26 12.01 L 13.26 15.48" />
      <path d="M 13.62 14.83 L 9.62 14.83" />
      <path d="M 10.36 14.82 L 8.36 11.35" />
      <path d="M 8.74 11.99 L 10.74 8.52" />
      {children}
    </svg>
  );
});

export default VocioSister;
