import React from 'react';

export const iconData = {
  "id": "DimenLattice",
  "name": "DimenLattice",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.84 15.29 L 8.47 8.81 L 14.24 1.56 L 16.52 10.54 L 19.93 19.16 L 11.01 16.65 Z"
      }
    ]
  ]
};

export const DimenLattice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.84 15.29 L 8.47 8.81 L 14.24 1.56 L 16.52 10.54 L 19.93 19.16 L 11.01 16.65 Z" />
      {children}
    </svg>
  );
});

export default DimenLattice;
