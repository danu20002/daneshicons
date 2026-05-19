import React from 'react';

export const iconData = {
  "id": "TritticoTower",
  "name": "TritticoTower",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.28 20.85 L 7.48 15.05 L 3.15 10.28 L 8.95 7.48 L 13.72 3.15 L 16.52 8.95 L 20.85 13.72 L 15.05 16.52 Z"
      }
    ]
  ]
};

export const TritticoTower = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.28 20.85 L 7.48 15.05 L 3.15 10.28 L 8.95 7.48 L 13.72 3.15 L 16.52 8.95 L 20.85 13.72 L 15.05 16.52 Z" />
      {children}
    </svg>
  );
});

export default TritticoTower;
