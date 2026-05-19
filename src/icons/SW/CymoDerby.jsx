import React from 'react';

export const iconData = {
  "id": "CymoDerby",
  "name": "CymoDerby",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.59 16.12 L 8.42 11.21 L 5.18 4.33 L 11.64 8.35 L 17.19 3.14 L 15.36 10.53 L 22.03 14.20 L 14.44 14.74 L 13.01 22.22 L 10.15 15.16 Z"
      }
    ]
  ]
};

export const CymoDerby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.59 16.12 L 8.42 11.21 L 5.18 4.33 L 11.64 8.35 L 17.19 3.14 L 15.36 10.53 L 22.03 14.20 L 14.44 14.74 L 13.01 22.22 L 10.15 15.16 Z" />
      {children}
    </svg>
  );
});

export default CymoDerby;
