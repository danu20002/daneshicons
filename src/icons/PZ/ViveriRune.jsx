import React from 'react';

export const iconData = {
  "id": "ViveriRune",
  "name": "ViveriRune",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.97 7.23 L 17.28 12.74 L 19.31 19.06 L 12.92 17.25 L 7.55 21.13 L 7.30 14.50 L 1.94 10.58 L 8.17 8.30 L 10.24 2.00 L 14.34 7.21 Z"
      }
    ]
  ]
};

export const ViveriRune = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.97 7.23 L 17.28 12.74 L 19.31 19.06 L 12.92 17.25 L 7.55 21.13 L 7.30 14.50 L 1.94 10.58 L 8.17 8.30 L 10.24 2.00 L 14.34 7.21 Z" />
      {children}
    </svg>
  );
});

export default ViveriRune;
