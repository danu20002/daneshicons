import React from 'react';

export const iconData = {
  "id": "RadiciSonar",
  "name": "RadiciSonar",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.21 15.68 L 15.20 20.41 L 8.32 20.21 L 3.59 15.20 L 3.79 8.32 L 8.80 3.59 L 15.68 3.79 L 20.41 8.80 Z"
      }
    ]
  ]
};

export const RadiciSonar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.21 15.68 L 15.20 20.41 L 8.32 20.21 L 3.59 15.20 L 3.79 8.32 L 8.80 3.59 L 15.68 3.79 L 20.41 8.80 Z" />
      {children}
    </svg>
  );
});

export default RadiciSonar;
