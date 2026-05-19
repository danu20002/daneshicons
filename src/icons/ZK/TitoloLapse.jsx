import React from 'react';

export const iconData = {
  "id": "TitoloLapse",
  "name": "TitoloLapse",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.61 12.78 L 15.63 19.85 L 7.02 19.07 L 3.39 11.22 L 8.37 4.15 L 16.98 4.93 Z"
      }
    ]
  ]
};

export const TitoloLapse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.61 12.78 L 15.63 19.85 L 7.02 19.07 L 3.39 11.22 L 8.37 4.15 L 16.98 4.93 Z" />
      {children}
    </svg>
  );
});

export default TitoloLapse;
