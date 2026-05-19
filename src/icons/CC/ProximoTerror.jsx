import React from 'react';

export const iconData = {
  "id": "ProximoTerror",
  "name": "ProximoTerror",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.29 12.22 L 9.32 9.44 L 11.78 2.29 L 14.56 9.32 L 21.71 11.78 L 14.68 14.56 L 12.22 21.71 L 9.44 14.68 Z"
      }
    ]
  ]
};

export const ProximoTerror = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.29 12.22 L 9.32 9.44 L 11.78 2.29 L 14.56 9.32 L 21.71 11.78 L 14.68 14.56 L 12.22 21.71 L 9.44 14.68 Z" />
      {children}
    </svg>
  );
});

export default ProximoTerror;
