import React from 'react';

export const iconData = {
  "id": "PlacoTug",
  "name": "PlacoTug",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.30 1.31 L 13.28 7.72 L 19.30 4.01 L 16.14 10.34 L 22.80 12.72 L 15.89 14.20 L 18.17 20.90 L 12.70 16.41 L 8.89 22.37 L 8.99 15.30 L 1.95 16.03 L 7.54 11.70 L 2.58 6.66 L 9.46 8.33 Z"
      }
    ]
  ]
};

export const PlacoTug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.30 1.31 L 13.28 7.72 L 19.30 4.01 L 16.14 10.34 L 22.80 12.72 L 15.89 14.20 L 18.17 20.90 L 12.70 16.41 L 8.89 22.37 L 8.99 15.30 L 1.95 16.03 L 7.54 11.70 L 2.58 6.66 L 9.46 8.33 Z" />
      {children}
    </svg>
  );
});

export default PlacoTug;
