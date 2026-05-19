import React from 'react';

export const iconData = {
  "id": "VillicoSnug",
  "name": "VillicoSnug",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.49 2.67 L 12.42 6.31 L 17.83 3.43 L 17.14 9.52 L 22.34 12.76 L 16.72 15.21 L 16.51 21.33 L 11.58 17.69 L 6.17 20.57 L 6.86 14.48 L 1.66 11.24 L 7.28 8.79 Z"
      }
    ]
  ]
};

export const VillicoSnug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.49 2.67 L 12.42 6.31 L 17.83 3.43 L 17.14 9.52 L 22.34 12.76 L 16.72 15.21 L 16.51 21.33 L 11.58 17.69 L 6.17 20.57 L 6.86 14.48 L 1.66 11.24 L 7.28 8.79 Z" />
      {children}
    </svg>
  );
});

export default VillicoSnug;
