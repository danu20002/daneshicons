import React from 'react';

export const iconData = {
  "id": "NanoCarpet",
  "name": "NanoCarpet",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.24 12.17 L 11.83 21.24 L 2.76 11.83 L 12.17 2.76 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 13.83 L 10.17 17.90 L 6.10 10.17 L 13.83 6.10 Z"
      }
    ]
  ]
};

export const NanoCarpet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.24 12.17 L 11.83 21.24 L 2.76 11.83 L 12.17 2.76 Z" />
      <path d="M 17.90 13.83 L 10.17 17.90 L 6.10 10.17 L 13.83 6.10 Z" />
      {children}
    </svg>
  );
});

export default NanoCarpet;
