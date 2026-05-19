import React from 'react';

export const iconData = {
  "id": "PhotoEnemy",
  "name": "PhotoEnemy",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.26 12.75 L 11.25 21.26 L 2.74 11.25 L 12.75 2.74 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.67 14.23 L 9.77 17.67 L 6.33 9.77 L 14.23 6.33 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 14.15 L 9.85 14.57 L 9.43 9.85 L 14.15 9.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.02 12.02 L 11.98 12.02 L 11.98 11.98 L 12.02 11.98 Z"
      }
    ]
  ]
};

export const PhotoEnemy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.26 12.75 L 11.25 21.26 L 2.74 11.25 L 12.75 2.74 Z" />
      <path d="M 17.67 14.23 L 9.77 17.67 L 6.33 9.77 L 14.23 6.33 Z" />
      <path d="M 14.57 14.15 L 9.85 14.57 L 9.43 9.85 L 14.15 9.43 Z" />
      <path d="M 12.02 12.02 L 11.98 12.02 L 11.98 11.98 L 12.02 11.98 Z" />
      {children}
    </svg>
  );
});

export default PhotoEnemy;
