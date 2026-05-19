import React from 'react';

export const iconData = {
  "id": "UmbroStrap",
  "name": "UmbroStrap",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.83 21.50 L 9.26 16.85 L 4.46 17.89 L 6.64 13.49 L 2.50 10.83 L 7.15 9.26 L 6.11 4.46 L 10.51 6.64 L 13.17 2.50 L 14.74 7.15 L 19.54 6.11 L 17.36 10.51 L 21.50 13.17 L 16.85 14.74 L 17.89 19.54 L 13.49 17.36 Z"
      }
    ]
  ]
};

export const UmbroStrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.83 21.50 L 9.26 16.85 L 4.46 17.89 L 6.64 13.49 L 2.50 10.83 L 7.15 9.26 L 6.11 4.46 L 10.51 6.64 L 13.17 2.50 L 14.74 7.15 L 19.54 6.11 L 17.36 10.51 L 21.50 13.17 L 16.85 14.74 L 17.89 19.54 L 13.49 17.36 Z" />
      {children}
    </svg>
  );
});

export default UmbroStrap;
