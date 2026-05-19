import React from 'react';

export const iconData = {
  "id": "CarnoStale",
  "name": "CarnoStale",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.39 11.35 L 16.51 14.86 L 15.83 21.68 L 10.67 17.18 L 3.98 18.64 L 6.67 12.34 L 3.21 6.42 L 10.03 7.03 L 14.59 1.92 L 16.12 8.59 Z"
      }
    ]
  ]
};

export const CarnoStale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.39 11.35 L 16.51 14.86 L 15.83 21.68 L 10.67 17.18 L 3.98 18.64 L 6.67 12.34 L 3.21 6.42 L 10.03 7.03 L 14.59 1.92 L 16.12 8.59 Z" />
      {children}
    </svg>
  );
});

export default CarnoStale;
