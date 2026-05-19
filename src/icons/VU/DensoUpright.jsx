import React from 'react';

export const iconData = {
  "id": "DensoUpright",
  "name": "DensoUpright",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.14 15.21 L 6.29 11.74 L 3.46 8.01 L 8.15 7.78 L 8.79 3.14 L 12.26 6.29 L 15.99 3.46 L 16.22 8.15 L 20.86 8.79 L 17.71 12.26 L 20.54 15.99 L 15.85 16.22 L 15.21 20.86 L 11.74 17.71 L 8.01 20.54 L 7.78 15.85 Z"
      }
    ]
  ]
};

export const DensoUpright = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.14 15.21 L 6.29 11.74 L 3.46 8.01 L 8.15 7.78 L 8.79 3.14 L 12.26 6.29 L 15.99 3.46 L 16.22 8.15 L 20.86 8.79 L 17.71 12.26 L 20.54 15.99 L 15.85 16.22 L 15.21 20.86 L 11.74 17.71 L 8.01 20.54 L 7.78 15.85 Z" />
      {children}
    </svg>
  );
});

export default DensoUpright;
