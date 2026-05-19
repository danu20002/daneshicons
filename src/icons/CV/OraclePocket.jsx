import React from 'react';

export const iconData = {
  "id": "OraclePocket",
  "name": "OraclePocket",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.36 1.99 L 15.99 11.55 L 18.49 20.78 L 10.40 15.68 L 1.15 13.23 L 9.62 8.77 Z"
      }
    ]
  ]
};

export const OraclePocket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.36 1.99 L 15.99 11.55 L 18.49 20.78 L 10.40 15.68 L 1.15 13.23 L 9.62 8.77 Z" />
      {children}
    </svg>
  );
});

export default OraclePocket;
