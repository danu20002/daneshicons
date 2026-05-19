import React from 'react';

export const iconData = {
  "id": "ModuExcuse",
  "name": "ModuExcuse",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.62 3.70 L 20.74 9.66 L 19.28 17.38 L 12.34 21.05 L 5.14 17.90 L 3.11 10.31 L 7.77 4.00 Z"
      }
    ]
  ]
};

export const ModuExcuse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.62 3.70 L 20.74 9.66 L 19.28 17.38 L 12.34 21.05 L 5.14 17.90 L 3.11 10.31 L 7.77 4.00 Z" />
      {children}
    </svg>
  );
});

export default ModuExcuse;
