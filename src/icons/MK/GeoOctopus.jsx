import React from 'react';

export const iconData = {
  "id": "GeoOctopus",
  "name": "GeoOctopus",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 12.00 a 2.14 2.14 0 1 0 4.29 0 a 2.14 2.14 0 1 0 -4.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 12.00 a 4.99 4.99 0 1 0 9.98 0 a 4.99 4.99 0 1 0 -9.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 12.00 a 7.57 7.57 0 1 0 15.15 0 a 7.57 7.57 0 1 0 -15.15 0"
      }
    ]
  ]
};

export const GeoOctopus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 12.00 a 2.14 2.14 0 1 0 4.29 0 a 2.14 2.14 0 1 0 -4.29 0" />
      <path d="M 7.01 12.00 a 4.99 4.99 0 1 0 9.98 0 a 4.99 4.99 0 1 0 -9.98 0" />
      <path d="M 4.43 12.00 a 7.57 7.57 0 1 0 15.15 0 a 7.57 7.57 0 1 0 -15.15 0" />
      {children}
    </svg>
  );
});

export default GeoOctopus;
