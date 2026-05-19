import React from 'react';

export const iconData = {
  "id": "GlucoTerritory",
  "name": "GlucoTerritory",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 8.62 L 9.29 9.37 L 8.35 3.57 L 11.94 8.22 L 15.38 3.46 L 14.63 9.29 L 20.43 8.35 L 15.78 11.94 L 20.54 15.38 L 14.71 14.63 L 15.65 20.43 L 12.06 15.78 L 8.62 20.54 L 9.37 14.71 L 3.57 15.65 L 8.22 12.06 Z"
      }
    ]
  ]
};

export const GlucoTerritory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 8.62 L 9.29 9.37 L 8.35 3.57 L 11.94 8.22 L 15.38 3.46 L 14.63 9.29 L 20.43 8.35 L 15.78 11.94 L 20.54 15.38 L 14.71 14.63 L 15.65 20.43 L 12.06 15.78 L 8.62 20.54 L 9.37 14.71 L 3.57 15.65 L 8.22 12.06 Z" />
      {children}
    </svg>
  );
});

export default GlucoTerritory;
