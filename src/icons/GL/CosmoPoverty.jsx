import React from 'react';

export const iconData = {
  "id": "CosmoPoverty",
  "name": "CosmoPoverty",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.17 17.24 L 13.94 14.50 L 14.78 22.19 L 11.60 15.14 L 6.76 21.17 L 9.50 13.94 L 1.81 14.78 L 8.86 11.60 L 2.83 6.76 L 10.06 9.50 L 9.22 1.81 L 12.40 8.86 L 17.24 2.83 L 14.50 10.06 L 22.19 9.22 L 15.14 12.40 Z"
      }
    ]
  ]
};

export const CosmoPoverty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.17 17.24 L 13.94 14.50 L 14.78 22.19 L 11.60 15.14 L 6.76 21.17 L 9.50 13.94 L 1.81 14.78 L 8.86 11.60 L 2.83 6.76 L 10.06 9.50 L 9.22 1.81 L 12.40 8.86 L 17.24 2.83 L 14.50 10.06 L 22.19 9.22 L 15.14 12.40 Z" />
      {children}
    </svg>
  );
});

export default CosmoPoverty;
