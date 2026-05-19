import React from 'react';

export const iconData = {
  "id": "TurgidoFarm",
  "name": "TurgidoFarm",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 7.94 L 10.17 8.60 L 13.26 2.76 L 14.67 9.21 L 21.18 10.34 L 15.48 13.68 L 16.41 20.22 L 11.48 15.83 L 5.55 18.74 L 8.20 12.69 Z"
      }
    ]
  ]
};

export const TurgidoFarm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 7.94 L 10.17 8.60 L 13.26 2.76 L 14.67 9.21 L 21.18 10.34 L 15.48 13.68 L 16.41 20.22 L 11.48 15.83 L 5.55 18.74 L 8.20 12.69 Z" />
      {children}
    </svg>
  );
});

export default TurgidoFarm;
