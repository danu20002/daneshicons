import React from 'react';

export const iconData = {
  "id": "XericoStrap",
  "name": "XericoStrap",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 6.40 L 20.74 6.40 L 20.74 17.60 L 3.26 17.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 6.40 L 6.73 2.94 L 24.20 2.94 L 20.74 6.40"
      }
    ],
    [
      "path",
      {
        "d": "M 20.74 6.40 L 24.20 2.94 L 24.20 14.13 L 20.74 17.60"
      }
    ]
  ]
};

export const XericoStrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 6.40 L 20.74 6.40 L 20.74 17.60 L 3.26 17.60 Z" />
      <path d="M 3.26 6.40 L 6.73 2.94 L 24.20 2.94 L 20.74 6.40" />
      <path d="M 20.74 6.40 L 24.20 2.94 L 24.20 14.13 L 20.74 17.60" />
      {children}
    </svg>
  );
});

export default XericoStrap;
