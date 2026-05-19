import React from 'react';

export const iconData = {
  "id": "StelloMattress",
  "name": "StelloMattress",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.36 12.74 L 16.64 19.00 L 9.42 19.99 L 4.14 14.96 L 4.79 7.70 L 10.86 3.68 L 17.79 5.92 Z"
      }
    ]
  ]
};

export const StelloMattress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.36 12.74 L 16.64 19.00 L 9.42 19.99 L 4.14 14.96 L 4.79 7.70 L 10.86 3.68 L 17.79 5.92 Z" />
      {children}
    </svg>
  );
});

export default StelloMattress;
