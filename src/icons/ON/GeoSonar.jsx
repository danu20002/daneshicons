import React from 'react';

export const iconData = {
  "id": "GeoSonar",
  "name": "GeoSonar",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.00 2.50 L 15.12 10.61 L 19.72 17.61 L 11.64 15.39 L 3.28 15.88 L 9.24 9.99 Z"
      }
    ]
  ]
};

export const GeoSonar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.00 2.50 L 15.12 10.61 L 19.72 17.61 L 11.64 15.39 L 3.28 15.88 L 9.24 9.99 Z" />
      {children}
    </svg>
  );
});

export default GeoSonar;
