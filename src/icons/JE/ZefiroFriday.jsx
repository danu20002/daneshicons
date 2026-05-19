import React from 'react';

export const iconData = {
  "id": "ZefiroFriday",
  "name": "ZefiroFriday",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 6.05 L 20.89 6.05 L 20.89 17.95 L 3.11 17.95 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 6.05 L 7.14 2.01 L 24.93 2.01 L 20.89 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 6.05 L 24.93 2.01 L 24.93 13.92 L 20.89 17.95"
      }
    ]
  ]
};

export const ZefiroFriday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 6.05 L 20.89 6.05 L 20.89 17.95 L 3.11 17.95 Z" />
      <path d="M 3.11 6.05 L 7.14 2.01 L 24.93 2.01 L 20.89 6.05" />
      <path d="M 20.89 6.05 L 24.93 2.01 L 24.93 13.92 L 20.89 17.95" />
      {children}
    </svg>
  );
});

export default ZefiroFriday;
