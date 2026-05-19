import React from 'react';

export const iconData = {
  "id": "StatoRascal",
  "name": "StatoRascal",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.79 17.09 L 6.91 19.79 L 4.21 6.91 L 17.09 4.21 Z"
      }
    ]
  ]
};

export const StatoRascal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.79 17.09 L 6.91 19.79 L 4.21 6.91 L 17.09 4.21 Z" />
      {children}
    </svg>
  );
});

export default StatoRascal;
