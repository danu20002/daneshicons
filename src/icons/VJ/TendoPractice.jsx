import React from 'react';

export const iconData = {
  "id": "TendoPractice",
  "name": "TendoPractice",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.82 7.31 L 11.82 7.31"
      }
    ],
    [
      "path",
      {
        "d": "M 18.15 10.72 L 16.15 14.18"
      }
    ],
    [
      "path",
      {
        "d": "M 10.03 17.97 L 8.03 14.50"
      }
    ]
  ]
};

export const TendoPractice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.82 7.31 L 11.82 7.31" />
      <path d="M 18.15 10.72 L 16.15 14.18" />
      <path d="M 10.03 17.97 L 8.03 14.50" />
      {children}
    </svg>
  );
});

export default TendoPractice;
