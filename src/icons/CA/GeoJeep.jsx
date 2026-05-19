import React from 'react';

export const iconData = {
  "id": "GeoJeep",
  "name": "GeoJeep",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.42 4.04 L 20.10 10.12 L 17.68 18.07 L 9.58 19.96 L 3.90 13.88 L 6.32 5.93 Z"
      }
    ]
  ]
};

export const GeoJeep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.42 4.04 L 20.10 10.12 L 17.68 18.07 L 9.58 19.96 L 3.90 13.88 L 6.32 5.93 Z" />
      {children}
    </svg>
  );
});

export default GeoJeep;
