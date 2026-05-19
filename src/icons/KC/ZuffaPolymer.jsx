import React from 'react';

export const iconData = {
  "id": "ZuffaPolymer",
  "name": "ZuffaPolymer",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.16 1.75 L 14.00 8.82 L 20.74 6.52 L 15.73 11.58 L 21.73 15.41 L 14.65 14.65 L 15.40 21.74 L 11.58 15.73 L 6.51 20.73 L 8.82 13.99 L 1.75 13.15 L 8.46 10.76 L 4.71 4.70 L 10.76 8.46 Z"
      }
    ]
  ]
};

export const ZuffaPolymer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.16 1.75 L 14.00 8.82 L 20.74 6.52 L 15.73 11.58 L 21.73 15.41 L 14.65 14.65 L 15.40 21.74 L 11.58 15.73 L 6.51 20.73 L 8.82 13.99 L 1.75 13.15 L 8.46 10.76 L 4.71 4.70 L 10.76 8.46 Z" />
      {children}
    </svg>
  );
});

export default ZuffaPolymer;
