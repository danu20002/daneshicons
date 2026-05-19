import React from 'react';

export const iconData = {
  "id": "ZanellaTerrain",
  "name": "ZanellaTerrain",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 5.82 L 10.25 8.75 L 11.52 1.49 L 13.45 8.60 L 19.92 5.07 L 15.56 11.01 L 22.35 13.87 L 14.99 14.17 L 16.99 21.26 L 12.17 15.69 L 7.87 21.67 L 9.22 14.43 L 1.86 14.80 L 8.36 11.34 Z"
      }
    ]
  ]
};

export const ZanellaTerrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 5.82 L 10.25 8.75 L 11.52 1.49 L 13.45 8.60 L 19.92 5.07 L 15.56 11.01 L 22.35 13.87 L 14.99 14.17 L 16.99 21.26 L 12.17 15.69 L 7.87 21.67 L 9.22 14.43 L 1.86 14.80 L 8.36 11.34 Z" />
      {children}
    </svg>
  );
});

export default ZanellaTerrain;
