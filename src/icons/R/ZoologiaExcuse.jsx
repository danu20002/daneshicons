import React from 'react';

export const iconData = {
  "id": "ZoologiaExcuse",
  "name": "ZoologiaExcuse",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 6.80 L 20.46 6.80 L 20.46 17.20 L 3.54 17.20 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 6.80 L 7.52 2.82 L 24.45 2.82 L 20.46 6.80"
      }
    ],
    [
      "path",
      {
        "d": "M 20.46 6.80 L 24.45 2.82 L 24.45 13.21 L 20.46 17.20"
      }
    ]
  ]
};

export const ZoologiaExcuse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 6.80 L 20.46 6.80 L 20.46 17.20 L 3.54 17.20 Z" />
      <path d="M 3.54 6.80 L 7.52 2.82 L 24.45 2.82 L 20.46 6.80" />
      <path d="M 20.46 6.80 L 24.45 2.82 L 24.45 13.21 L 20.46 17.20" />
      {children}
    </svg>
  );
});

export default ZoologiaExcuse;
