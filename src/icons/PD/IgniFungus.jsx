import React from 'react';

export const iconData = {
  "id": "IgniFungus",
  "name": "IgniFungus",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.99 18.60 L 3.78 10.96 L 8.79 4.36 L 17.01 5.40 L 20.22 13.04 L 15.21 19.64 Z"
      }
    ]
  ]
};

export const IgniFungus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.99 18.60 L 3.78 10.96 L 8.79 4.36 L 17.01 5.40 L 20.22 13.04 L 15.21 19.64 Z" />
      {children}
    </svg>
  );
});

export default IgniFungus;
