import React from 'react';

export const iconData = {
  "id": "GeoStump",
  "name": "GeoStump",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.57 3.29 L 19.33 7.28 L 19.75 15.98 L 12.43 20.71 L 4.67 16.72 L 4.25 8.02 Z"
      }
    ]
  ]
};

export const GeoStump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.57 3.29 L 19.33 7.28 L 19.75 15.98 L 12.43 20.71 L 4.67 16.72 L 4.25 8.02 Z" />
      {children}
    </svg>
  );
});

export default GeoStump;
