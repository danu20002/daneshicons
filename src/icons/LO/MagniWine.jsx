import React from 'react';

export const iconData = {
  "id": "MagniWine",
  "name": "MagniWine",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 16.94 L 7.29 12.75 L 2.83 9.81 L 8.13 9.20 L 7.06 3.97 L 11.25 7.29 L 14.19 2.83 L 14.80 8.13 L 20.03 7.06 L 16.71 11.25 L 21.17 14.19 L 15.87 14.80 L 16.94 20.03 L 12.75 16.71 L 9.81 21.17 L 9.20 15.87 Z"
      }
    ]
  ]
};

export const MagniWine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 16.94 L 7.29 12.75 L 2.83 9.81 L 8.13 9.20 L 7.06 3.97 L 11.25 7.29 L 14.19 2.83 L 14.80 8.13 L 20.03 7.06 L 16.71 11.25 L 21.17 14.19 L 15.87 14.80 L 16.94 20.03 L 12.75 16.71 L 9.81 21.17 L 9.20 15.87 Z" />
      {children}
    </svg>
  );
});

export default MagniWine;
