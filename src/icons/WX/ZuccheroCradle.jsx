import React from 'react';

export const iconData = {
  "id": "ZuccheroCradle",
  "name": "ZuccheroCradle",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.16 13.67 6.08 8.50 Q 8.50 9.83 10.91 11.15 Q 8.26 8.02 5.61 4.89 Q 12.11 4.59 18.61 4.29 Q 17.48 6.70 16.35 9.11 Q 17.67 10.81 18.99 12.50 Q 18.51 15.34 18.04 18.19 Q 15.14 18.51 12.24 18.84 Z"
      }
    ]
  ]
};

export const ZuccheroCradle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.16 13.67 6.08 8.50 Q 8.50 9.83 10.91 11.15 Q 8.26 8.02 5.61 4.89 Q 12.11 4.59 18.61 4.29 Q 17.48 6.70 16.35 9.11 Q 17.67 10.81 18.99 12.50 Q 18.51 15.34 18.04 18.19 Q 15.14 18.51 12.24 18.84 Z" />
      {children}
    </svg>
  );
});

export default ZuccheroCradle;
