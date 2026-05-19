import React from 'react';

export const iconData = {
  "id": "ProximoSupreme",
  "name": "ProximoSupreme",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.67 5.24 L 20.69 13.53 L 15.02 20.29 L 6.33 18.76 L 3.31 10.47 L 8.98 3.71 Z"
      }
    ]
  ]
};

export const ProximoSupreme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.67 5.24 L 20.69 13.53 L 15.02 20.29 L 6.33 18.76 L 3.31 10.47 L 8.98 3.71 Z" />
      {children}
    </svg>
  );
});

export default ProximoSupreme;
