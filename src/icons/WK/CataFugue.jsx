import React from 'react';

export const iconData = {
  "id": "CataFugue",
  "name": "CataFugue",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.15 18.29 L 3.63 10.08 L 9.47 3.79 L 17.85 5.71 L 20.37 13.92 L 14.53 20.21 Z"
      }
    ]
  ]
};

export const CataFugue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.15 18.29 L 3.63 10.08 L 9.47 3.79 L 17.85 5.71 L 20.37 13.92 L 14.53 20.21 Z" />
      {children}
    </svg>
  );
});

export default CataFugue;
