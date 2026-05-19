import React from 'react';

export const iconData = {
  "id": "TerraSoda",
  "name": "TerraSoda",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.65 22.56 L 10.37 16.06 L 2.78 17.79 L 7.63 11.70 L 3.65 5.02 L 10.93 7.76 L 16.06 1.90 L 15.71 9.67 L 22.86 12.74 L 15.36 14.81 Z"
      }
    ]
  ]
};

export const TerraSoda = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.65 22.56 L 10.37 16.06 L 2.78 17.79 L 7.63 11.70 L 3.65 5.02 L 10.93 7.76 L 16.06 1.90 L 15.71 9.67 L 22.86 12.74 L 15.36 14.81 Z" />
      {children}
    </svg>
  );
});

export default TerraSoda;
