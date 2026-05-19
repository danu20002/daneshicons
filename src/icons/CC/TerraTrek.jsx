import React from 'react';

export const iconData = {
  "id": "TerraTrek",
  "name": "TerraTrek",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.86 16.66 L 7.66 11.32 L 4.74 4.75 L 11.31 7.66 L 16.65 2.86 L 15.91 10.00 L 22.13 13.60 L 15.11 15.10 L 13.61 22.13 L 10.01 15.91 Z"
      }
    ]
  ]
};

export const TerraTrek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.86 16.66 L 7.66 11.32 L 4.74 4.75 L 11.31 7.66 L 16.65 2.86 L 15.91 10.00 L 22.13 13.60 L 15.11 15.10 L 13.61 22.13 L 10.01 15.91 Z" />
      {children}
    </svg>
  );
});

export default TerraTrek;
