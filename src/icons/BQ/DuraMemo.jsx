import React from 'react';

export const iconData = {
  "id": "DuraMemo",
  "name": "DuraMemo",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.42 11.96 L 12.42 11.96"
      }
    ],
    [
      "path",
      {
        "d": "M 13.82 8.92 L 11.82 12.38"
      }
    ],
    [
      "path",
      {
        "d": "M 13.76 15.12 L 11.76 11.66"
      }
    ]
  ]
};

export const DuraMemo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.42 11.96 L 12.42 11.96" />
      <path d="M 13.82 8.92 L 11.82 12.38" />
      <path d="M 13.76 15.12 L 11.76 11.66" />
      {children}
    </svg>
  );
});

export default DuraMemo;
