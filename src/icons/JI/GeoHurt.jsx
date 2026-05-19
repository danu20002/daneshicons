import React from 'react';

export const iconData = {
  "id": "GeoHurt",
  "name": "GeoHurt",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.56 3.85 L 20.28 8.75 L 20.15 15.56 L 15.25 20.28 L 8.44 20.15 L 3.72 15.25 L 3.85 8.44 L 8.75 3.72 Z"
      }
    ]
  ]
};

export const GeoHurt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.56 3.85 L 20.28 8.75 L 20.15 15.56 L 15.25 20.28 L 8.44 20.15 L 3.72 15.25 L 3.85 8.44 L 8.75 3.72 Z" />
      {children}
    </svg>
  );
});

export default GeoHurt;
