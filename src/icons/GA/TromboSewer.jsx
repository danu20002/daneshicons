import React from 'react';

export const iconData = {
  "id": "TromboSewer",
  "name": "TromboSewer",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 10.57 L 13.72 10.57"
      }
    ],
    [
      "path",
      {
        "d": "M 12.10 9.31 L 14.10 12.77"
      }
    ],
    [
      "path",
      {
        "d": "M 14.38 10.74 L 12.38 14.20"
      }
    ],
    [
      "path",
      {
        "d": "M 14.28 13.43 L 10.28 13.43"
      }
    ],
    [
      "path",
      {
        "d": "M 11.90 14.69 L 9.90 11.23"
      }
    ],
    [
      "path",
      {
        "d": "M 9.62 13.26 L 11.62 9.80"
      }
    ]
  ]
};

export const TromboSewer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 10.57 L 13.72 10.57" />
      <path d="M 12.10 9.31 L 14.10 12.77" />
      <path d="M 14.38 10.74 L 12.38 14.20" />
      <path d="M 14.28 13.43 L 10.28 13.43" />
      <path d="M 11.90 14.69 L 9.90 11.23" />
      <path d="M 9.62 13.26 L 11.62 9.80" />
      {children}
    </svg>
  );
});

export default TromboSewer;
