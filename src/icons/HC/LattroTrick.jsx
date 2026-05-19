import React from 'react';

export const iconData = {
  "id": "LattroTrick",
  "name": "LattroTrick",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.52 10.94 L 7.54 4.71 L 14.92 3.97 L 20.10 9.28 L 19.18 16.63 L 12.85 20.50 L 5.88 17.97 Z"
      }
    ]
  ]
};

export const LattroTrick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.52 10.94 L 7.54 4.71 L 14.92 3.97 L 20.10 9.28 L 19.18 16.63 L 12.85 20.50 L 5.88 17.97 Z" />
      {children}
    </svg>
  );
});

export default LattroTrick;
