import React from 'react';

export const iconData = {
  "id": "TigroCustard",
  "name": "TigroCustard",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.34 9.11 L 19.94 15.85 L 14.89 20.34 L 8.15 19.94 L 3.66 14.89 L 4.06 8.15 L 9.11 3.66 L 15.85 4.06 Z"
      }
    ]
  ]
};

export const TigroCustard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.34 9.11 L 19.94 15.85 L 14.89 20.34 L 8.15 19.94 L 3.66 14.89 L 4.06 8.15 L 9.11 3.66 L 15.85 4.06 Z" />
      {children}
    </svg>
  );
});

export default TigroCustard;
