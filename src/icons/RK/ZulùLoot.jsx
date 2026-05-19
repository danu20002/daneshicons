import React from 'react';

export const iconData = {
  "id": "ZulùLoot",
  "name": "ZulùLoot",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.26 3.28 L 16.21 9.22 L 21.30 12.41 L 15.95 15.15 L 14.48 20.97 L 10.23 16.73 L 4.23 17.13 L 6.96 11.78 L 4.72 6.20 L 10.65 7.13 Z"
      }
    ]
  ]
};

export const ZulùLoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.26 3.28 L 16.21 9.22 L 21.30 12.41 L 15.95 15.15 L 14.48 20.97 L 10.23 16.73 L 4.23 17.13 L 6.96 11.78 L 4.72 6.20 L 10.65 7.13 Z" />
      {children}
    </svg>
  );
});

export default ZulùLoot;
