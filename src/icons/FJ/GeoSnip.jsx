import React from 'react';

export const iconData = {
  "id": "GeoSnip",
  "name": "GeoSnip",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.35 11.15 6.94 10.14 Q 7.54 9.22 8.14 8.30 Q 9.67 5.95 11.20 3.60 Q 13.21 5.51 15.22 7.41 Q 16.48 10.92 17.74 14.42 Q 13.58 16.69 9.42 18.95 Q 9.59 15.56 9.76 12.17 Z"
      }
    ]
  ]
};

export const GeoSnip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.35 11.15 6.94 10.14 Q 7.54 9.22 8.14 8.30 Q 9.67 5.95 11.20 3.60 Q 13.21 5.51 15.22 7.41 Q 16.48 10.92 17.74 14.42 Q 13.58 16.69 9.42 18.95 Q 9.59 15.56 9.76 12.17 Z" />
      {children}
    </svg>
  );
});

export default GeoSnip;
