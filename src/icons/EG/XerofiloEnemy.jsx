import React from 'react';

export const iconData = {
  "id": "XerofiloEnemy",
  "name": "XerofiloEnemy",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.41 3.41 L 11.70 6.34 L 16.64 2.87 L 16.75 8.91 L 22.23 11.46 L 17.05 14.57 L 17.59 20.59 L 12.30 17.66 L 7.36 21.13 L 7.25 15.09 L 1.77 12.54 L 6.95 9.43 Z"
      }
    ]
  ]
};

export const XerofiloEnemy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.41 3.41 L 11.70 6.34 L 16.64 2.87 L 16.75 8.91 L 22.23 11.46 L 17.05 14.57 L 17.59 20.59 L 12.30 17.66 L 7.36 21.13 L 7.25 15.09 L 1.77 12.54 L 6.95 9.43 Z" />
      {children}
    </svg>
  );
});

export default XerofiloEnemy;
