import React from 'react';

export const iconData = {
  "id": "PolyMagnify",
  "name": "PolyMagnify",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.29 13.29 L 10.71 21.29 L 2.71 10.71 L 13.29 2.71 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.95 13.86 L 10.14 17.95 L 6.05 10.14 L 13.86 6.05 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 13.96 L 10.04 14.57 L 9.43 10.04 L 13.96 9.43 Z"
      }
    ]
  ]
};

export const PolyMagnify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.29 13.29 L 10.71 21.29 L 2.71 10.71 L 13.29 2.71 Z" />
      <path d="M 17.95 13.86 L 10.14 17.95 L 6.05 10.14 L 13.86 6.05 Z" />
      <path d="M 14.57 13.96 L 10.04 14.57 L 9.43 10.04 L 13.96 9.43 Z" />
      {children}
    </svg>
  );
});

export default PolyMagnify;
