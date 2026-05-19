import React from 'react';

export const iconData = {
  "id": "CymoVan",
  "name": "CymoVan",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.98 9.89 L 16.13 13.84 L 17.09 20.84 L 11.52 16.49 L 5.17 19.58 L 7.58 12.94 L 2.68 7.84 L 9.74 8.08 L 13.08 1.85 L 15.03 8.64 Z"
      }
    ]
  ]
};

export const CymoVan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.98 9.89 L 16.13 13.84 L 17.09 20.84 L 11.52 16.49 L 5.17 19.58 L 7.58 12.94 L 2.68 7.84 L 9.74 8.08 L 13.08 1.85 L 15.03 8.64 Z" />
      {children}
    </svg>
  );
});

export default CymoVan;
