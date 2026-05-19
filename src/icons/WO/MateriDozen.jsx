import React from 'react';

export const iconData = {
  "id": "MateriDozen",
  "name": "MateriDozen",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.33 1.88 L 16.32 9.11 L 21.10 16.48 L 12.34 17.19 L 3.57 17.64 L 7.33 9.70 Z"
      }
    ]
  ]
};

export const MateriDozen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.33 1.88 L 16.32 9.11 L 21.10 16.48 L 12.34 17.19 L 3.57 17.64 L 7.33 9.70 Z" />
      {children}
    </svg>
  );
});

export default MateriDozen;
