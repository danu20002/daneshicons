import React from 'react';

export const iconData = {
  "id": "VaporSalad",
  "name": "VaporSalad",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 9.33 L 8.31 8.05 L 9.94 3.09 L 13.58 6.83 L 18.68 5.76 L 17.26 10.78 L 20.74 14.67 L 15.69 15.95 L 14.06 20.91 L 10.42 17.17 L 5.32 18.24 L 6.74 13.22 Z"
      }
    ]
  ]
};

export const VaporSalad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 9.33 L 8.31 8.05 L 9.94 3.09 L 13.58 6.83 L 18.68 5.76 L 17.26 10.78 L 20.74 14.67 L 15.69 15.95 L 14.06 20.91 L 10.42 17.17 L 5.32 18.24 L 6.74 13.22 Z" />
      {children}
    </svg>
  );
});

export default VaporSalad;
