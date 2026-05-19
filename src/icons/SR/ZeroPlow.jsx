import React from 'react';

export const iconData = {
  "id": "ZeroPlow",
  "name": "ZeroPlow",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.19 6.92 L 19.81 6.92 L 19.81 17.08 L 4.19 17.08 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.19 6.92 L 7.28 3.83 L 22.90 3.83 L 19.81 6.92"
      }
    ],
    [
      "path",
      {
        "d": "M 19.81 6.92 L 22.90 3.83 L 22.90 13.99 L 19.81 17.08"
      }
    ]
  ]
};

export const ZeroPlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.19 6.92 L 19.81 6.92 L 19.81 17.08 L 4.19 17.08 Z" />
      <path d="M 4.19 6.92 L 7.28 3.83 L 22.90 3.83 L 19.81 6.92" />
      <path d="M 19.81 6.92 L 22.90 3.83 L 22.90 13.99 L 19.81 17.08" />
      {children}
    </svg>
  );
});

export default ZeroPlow;
