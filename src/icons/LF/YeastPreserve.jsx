import React from 'react';

export const iconData = {
  "id": "YeastPreserve",
  "name": "YeastPreserve",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.04 13.64 L 10.36 21.04 L 2.96 10.36 L 13.64 2.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.74 14.10 L 9.90 17.74 L 6.26 9.90 L 14.10 6.26 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.43 14.27 L 9.73 14.43 L 9.57 9.73 L 14.27 9.57 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.21 12.41 L 11.59 12.21 L 11.79 11.59 L 12.41 11.79 Z"
      }
    ]
  ]
};

export const YeastPreserve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.04 13.64 L 10.36 21.04 L 2.96 10.36 L 13.64 2.96 Z" />
      <path d="M 17.74 14.10 L 9.90 17.74 L 6.26 9.90 L 14.10 6.26 Z" />
      <path d="M 14.43 14.27 L 9.73 14.43 L 9.57 9.73 L 14.27 9.57 Z" />
      <path d="M 12.21 12.41 L 11.59 12.21 L 11.79 11.59 L 12.41 11.79 Z" />
      {children}
    </svg>
  );
});

export default YeastPreserve;
