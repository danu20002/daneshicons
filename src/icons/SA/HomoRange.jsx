import React from 'react';

export const iconData = {
  "id": "HomoRange",
  "name": "HomoRange",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.05 19.82 L 7.25 19.42 L 3.20 11.59 L 7.95 4.18 L 16.75 4.58 L 20.80 12.41 Z"
      }
    ]
  ]
};

export const HomoRange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.05 19.82 L 7.25 19.42 L 3.20 11.59 L 7.95 4.18 L 16.75 4.58 L 20.80 12.41 Z" />
      {children}
    </svg>
  );
});

export default HomoRange;
