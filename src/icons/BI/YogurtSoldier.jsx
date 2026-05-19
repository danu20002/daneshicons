import React from 'react';

export const iconData = {
  "id": "YogurtSoldier",
  "name": "YogurtSoldier",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.57 6.60 L 10.27 8.15 L 14.22 1.36 L 15.13 9.16 L 22.80 10.83 L 15.67 14.10 L 16.45 21.91 L 11.14 16.14 L 3.95 19.30 L 7.80 12.46 Z"
      }
    ]
  ]
};

export const YogurtSoldier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.57 6.60 L 10.27 8.15 L 14.22 1.36 L 15.13 9.16 L 22.80 10.83 L 15.67 14.10 L 16.45 21.91 L 11.14 16.14 L 3.95 19.30 L 7.80 12.46 Z" />
      {children}
    </svg>
  );
});

export default YogurtSoldier;
