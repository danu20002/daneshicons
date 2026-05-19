import React from 'react';

export const iconData = {
  "id": "VersoPrize",
  "name": "VersoPrize",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.53 2.11 L 14.66 9.52 L 22.20 8.21 L 15.63 12.13 L 21.89 16.53 L 14.48 14.66 L 15.79 22.20 L 11.87 15.63 L 7.47 21.89 L 9.34 14.48 L 1.80 15.79 L 8.37 11.87 L 2.11 7.47 L 9.52 9.34 L 8.21 1.80 L 12.13 8.37 Z"
      }
    ]
  ]
};

export const VersoPrize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.53 2.11 L 14.66 9.52 L 22.20 8.21 L 15.63 12.13 L 21.89 16.53 L 14.48 14.66 L 15.79 22.20 L 11.87 15.63 L 7.47 21.89 L 9.34 14.48 L 1.80 15.79 L 8.37 11.87 L 2.11 7.47 L 9.52 9.34 L 8.21 1.80 L 12.13 8.37 Z" />
      {children}
    </svg>
  );
});

export default VersoPrize;
