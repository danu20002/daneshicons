import React from 'react';

export const iconData = {
  "id": "MitoTheater",
  "name": "MitoTheater",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.34 1.34 L 14.69 9.06 L 22.40 8.70 L 15.89 12.86 L 20.06 19.36 L 13.21 15.80 L 9.66 22.66 L 9.31 14.94 L 1.60 15.30 L 8.11 11.14 L 3.94 4.64 L 10.79 8.20 Z"
      }
    ]
  ]
};

export const MitoTheater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.34 1.34 L 14.69 9.06 L 22.40 8.70 L 15.89 12.86 L 20.06 19.36 L 13.21 15.80 L 9.66 22.66 L 9.31 14.94 L 1.60 15.30 L 8.11 11.14 L 3.94 4.64 L 10.79 8.20 Z" />
      {children}
    </svg>
  );
});

export default MitoTheater;
