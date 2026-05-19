import React from 'react';

export const iconData = {
  "id": "VersoHeart",
  "name": "VersoHeart",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 11.17 L 13.80 11.17"
      }
    ],
    [
      "path",
      {
        "d": "M 11.62 9.68 L 13.62 13.14"
      }
    ],
    [
      "path",
      {
        "d": "M 13.82 10.51 L 11.82 13.97"
      }
    ],
    [
      "path",
      {
        "d": "M 14.20 12.83 L 10.20 12.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.38 14.32 L 10.38 10.86"
      }
    ],
    [
      "path",
      {
        "d": "M 10.18 13.49 L 12.18 10.03"
      }
    ]
  ]
};

export const VersoHeart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 11.17 L 13.80 11.17" />
      <path d="M 11.62 9.68 L 13.62 13.14" />
      <path d="M 13.82 10.51 L 11.82 13.97" />
      <path d="M 14.20 12.83 L 10.20 12.83" />
      <path d="M 12.38 14.32 L 10.38 10.86" />
      <path d="M 10.18 13.49 L 12.18 10.03" />
      {children}
    </svg>
  );
});

export default VersoHeart;
