import React from 'react';

export const iconData = {
  "id": "ExtraRemove",
  "name": "ExtraRemove",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.66 2.74 L 13.81 8.59 L 19.85 7.08 L 15.86 11.86 L 20.19 16.34 L 14.05 15.27 L 12.34 21.26 L 10.19 15.41 L 4.15 16.92 L 8.14 12.14 L 3.81 7.66 L 9.95 8.73 Z"
      }
    ]
  ]
};

export const ExtraRemove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.66 2.74 L 13.81 8.59 L 19.85 7.08 L 15.86 11.86 L 20.19 16.34 L 14.05 15.27 L 12.34 21.26 L 10.19 15.41 L 4.15 16.92 L 8.14 12.14 L 3.81 7.66 L 9.95 8.73 Z" />
      {children}
    </svg>
  );
});

export default ExtraRemove;
