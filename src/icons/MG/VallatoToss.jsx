import React from 'react';

export const iconData = {
  "id": "VallatoToss",
  "name": "VallatoToss",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.72 16.31 L 10.29 20.67 L 3.22 13.05 L 8.29 3.98 L 18.48 5.99 Z"
      }
    ]
  ]
};

export const VallatoToss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.72 16.31 L 10.29 20.67 L 3.22 13.05 L 8.29 3.98 L 18.48 5.99 Z" />
      {children}
    </svg>
  );
});

export default VallatoToss;
