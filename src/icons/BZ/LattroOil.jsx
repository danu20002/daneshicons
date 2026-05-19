import React from 'react';

export const iconData = {
  "id": "LattroOil",
  "name": "LattroOil",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.51 20.78 L 6.65 3.72 L 21.85 11.50 Z"
      }
    ]
  ]
};

export const LattroOil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.51 20.78 L 6.65 3.72 L 21.85 11.50 Z" />
      {children}
    </svg>
  );
});

export default LattroOil;
