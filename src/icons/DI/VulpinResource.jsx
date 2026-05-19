import React from 'react';

export const iconData = {
  "id": "VulpinResource",
  "name": "VulpinResource",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.91 6.72 L 20.09 6.72 L 20.09 17.28 L 3.91 17.28 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 6.72 L 8.62 2.01 L 24.80 2.01 L 20.09 6.72"
      }
    ],
    [
      "path",
      {
        "d": "M 20.09 6.72 L 24.80 2.01 L 24.80 12.57 L 20.09 17.28"
      }
    ]
  ]
};

export const VulpinResource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.91 6.72 L 20.09 6.72 L 20.09 17.28 L 3.91 17.28 Z" />
      <path d="M 3.91 6.72 L 8.62 2.01 L 24.80 2.01 L 20.09 6.72" />
      <path d="M 20.09 6.72 L 24.80 2.01 L 24.80 12.57 L 20.09 17.28" />
      {children}
    </svg>
  );
});

export default VulpinResource;
