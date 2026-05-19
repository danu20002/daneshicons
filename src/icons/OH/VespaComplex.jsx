import React from 'react';

export const iconData = {
  "id": "VespaComplex",
  "name": "VespaComplex",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 5.46 L 19.05 5.46 L 19.05 18.54 L 4.95 18.54 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 5.46 L 8.82 1.59 L 22.92 1.59 L 19.05 5.46"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 5.46 L 22.92 1.59 L 22.92 14.67 L 19.05 18.54"
      }
    ]
  ]
};

export const VespaComplex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 5.46 L 19.05 5.46 L 19.05 18.54 L 4.95 18.54 Z" />
      <path d="M 4.95 5.46 L 8.82 1.59 L 22.92 1.59 L 19.05 5.46" />
      <path d="M 19.05 5.46 L 22.92 1.59 L 22.92 14.67 L 19.05 18.54" />
      {children}
    </svg>
  );
});

export default VespaComplex;
