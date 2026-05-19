import React from 'react';

export const iconData = {
  "id": "LattroWait",
  "name": "LattroWait",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.59 18.99 L 8.74 20.34 L 3.15 13.35 L 6.41 5.01 L 15.26 3.66 L 20.85 10.65 Z"
      }
    ]
  ]
};

export const LattroWait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.59 18.99 L 8.74 20.34 L 3.15 13.35 L 6.41 5.01 L 15.26 3.66 L 20.85 10.65 Z" />
      {children}
    </svg>
  );
});

export default LattroWait;
