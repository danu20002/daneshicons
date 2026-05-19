import React from 'react';

export const iconData = {
  "id": "SelenoPlea",
  "name": "SelenoPlea",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.08 6.72 L 19.92 6.72 L 19.92 17.28 L 4.08 17.28 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 6.72 L 8.85 1.95 L 24.69 1.95 L 19.92 6.72"
      }
    ],
    [
      "path",
      {
        "d": "M 19.92 6.72 L 24.69 1.95 L 24.69 12.52 L 19.92 17.28"
      }
    ]
  ]
};

export const SelenoPlea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.08 6.72 L 19.92 6.72 L 19.92 17.28 L 4.08 17.28 Z" />
      <path d="M 4.08 6.72 L 8.85 1.95 L 24.69 1.95 L 19.92 6.72" />
      <path d="M 19.92 6.72 L 24.69 1.95 L 24.69 12.52 L 19.92 17.28" />
      {children}
    </svg>
  );
});

export default SelenoPlea;
