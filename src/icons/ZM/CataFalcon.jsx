import React from 'react';

export const iconData = {
  "id": "CataFalcon",
  "name": "CataFalcon",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.45 22.96 L 8.60 15.69 L 1.04 12.45 L 8.31 8.60 L 11.55 1.04 L 15.40 8.31 L 22.96 11.55 L 15.69 15.40 Z"
      }
    ]
  ]
};

export const CataFalcon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.45 22.96 L 8.60 15.69 L 1.04 12.45 L 8.31 8.60 L 11.55 1.04 L 15.40 8.31 L 22.96 11.55 L 15.69 15.40 Z" />
      {children}
    </svg>
  );
});

export default CataFalcon;
