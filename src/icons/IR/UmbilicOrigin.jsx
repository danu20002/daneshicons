import React from 'react';

export const iconData = {
  "id": "UmbilicOrigin",
  "name": "UmbilicOrigin",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.52 15.86 L 12.63 16.51 L 3.90 18.31 L 7.78 10.29 L 10.58 1.83 L 15.59 9.20 Z"
      }
    ]
  ]
};

export const UmbilicOrigin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.52 15.86 L 12.63 16.51 L 3.90 18.31 L 7.78 10.29 L 10.58 1.83 L 15.59 9.20 Z" />
      {children}
    </svg>
  );
});

export default UmbilicOrigin;
