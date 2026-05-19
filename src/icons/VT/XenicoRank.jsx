import React from 'react';

export const iconData = {
  "id": "XenicoRank",
  "name": "XenicoRank",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.71 3.64 L 21.25 9.42 L 20.36 16.71 L 14.58 21.25 L 7.29 20.36 L 2.75 14.58 L 3.64 7.29 L 9.42 2.75 Z"
      }
    ]
  ]
};

export const XenicoRank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.71 3.64 L 21.25 9.42 L 20.36 16.71 L 14.58 21.25 L 7.29 20.36 L 2.75 14.58 L 3.64 7.29 L 9.42 2.75 Z" />
      {children}
    </svg>
  );
});

export default XenicoRank;
