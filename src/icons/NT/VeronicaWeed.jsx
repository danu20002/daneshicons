import React from 'react';

export const iconData = {
  "id": "VeronicaWeed",
  "name": "VeronicaWeed",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.76 16.13 L 8.21 12.11 L 2.54 8.39 L 9.25 9.40 L 7.87 2.76 L 11.89 8.21 L 15.61 2.54 L 14.60 9.25 L 21.24 7.87 L 15.79 11.89 L 21.46 15.61 L 14.75 14.60 L 16.13 21.24 L 12.11 15.79 L 8.39 21.46 L 9.40 14.75 Z"
      }
    ]
  ]
};

export const VeronicaWeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.76 16.13 L 8.21 12.11 L 2.54 8.39 L 9.25 9.40 L 7.87 2.76 L 11.89 8.21 L 15.61 2.54 L 14.60 9.25 L 21.24 7.87 L 15.79 11.89 L 21.46 15.61 L 14.75 14.60 L 16.13 21.24 L 12.11 15.79 L 8.39 21.46 L 9.40 14.75 Z" />
      {children}
    </svg>
  );
});

export default VeronicaWeed;
