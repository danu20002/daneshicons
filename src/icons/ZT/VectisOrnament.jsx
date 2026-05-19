import React from 'react';

export const iconData = {
  "id": "VectisOrnament",
  "name": "VectisOrnament",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.12 9.60 L 13.12 9.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.64 8.30 L 14.64 11.77"
      }
    ],
    [
      "path",
      {
        "d": "M 15.52 10.70 L 13.52 14.17"
      }
    ],
    [
      "path",
      {
        "d": "M 14.88 14.40 L 10.88 14.40"
      }
    ],
    [
      "path",
      {
        "d": "M 11.36 15.70 L 9.36 12.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.48 13.30 L 10.48 9.83"
      }
    ]
  ]
};

export const VectisOrnament = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.12 9.60 L 13.12 9.60" />
      <path d="M 12.64 8.30 L 14.64 11.77" />
      <path d="M 15.52 10.70 L 13.52 14.17" />
      <path d="M 14.88 14.40 L 10.88 14.40" />
      <path d="M 11.36 15.70 L 9.36 12.23" />
      <path d="M 8.48 13.30 L 10.48 9.83" />
      {children}
    </svg>
  );
});

export default VectisOrnament;
