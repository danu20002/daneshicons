import React from 'react';

export const iconData = {
  "id": "UbiquiGraze",
  "name": "UbiquiGraze",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.24 13.09 L 6.94 18.59 L 8.82 4.32 Z"
      }
    ]
  ]
};

export const UbiquiGraze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.24 13.09 L 6.94 18.59 L 8.82 4.32 Z" />
      {children}
    </svg>
  );
});

export default UbiquiGraze;
