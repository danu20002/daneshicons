import React from 'react';

export const iconData = {
  "id": "VolieraDeficit",
  "name": "VolieraDeficit",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.84 4.43 L 16.89 10.78 L 22.48 15.01 L 15.50 15.63 L 14.63 22.58 L 10.61 16.84 L 4.16 19.57 L 7.11 13.22 L 1.52 8.99 L 8.50 8.37 L 9.37 1.42 L 13.39 7.16 Z"
      }
    ]
  ]
};

export const VolieraDeficit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.84 4.43 L 16.89 10.78 L 22.48 15.01 L 15.50 15.63 L 14.63 22.58 L 10.61 16.84 L 4.16 19.57 L 7.11 13.22 L 1.52 8.99 L 8.50 8.37 L 9.37 1.42 L 13.39 7.16 Z" />
      {children}
    </svg>
  );
});

export default VolieraDeficit;
