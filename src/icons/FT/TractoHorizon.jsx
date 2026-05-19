import React from 'react';

export const iconData = {
  "id": "TractoHorizon",
  "name": "TractoHorizon",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.16 21.67 L 11.33 15.18 L 5.20 19.57 L 8.91 13.01 L 2.05 9.90 L 9.58 9.83 L 8.84 2.33 L 12.67 8.82 L 18.80 4.43 L 15.09 10.99 L 21.95 14.10 L 14.42 14.17 Z"
      }
    ]
  ]
};

export const TractoHorizon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.16 21.67 L 11.33 15.18 L 5.20 19.57 L 8.91 13.01 L 2.05 9.90 L 9.58 9.83 L 8.84 2.33 L 12.67 8.82 L 18.80 4.43 L 15.09 10.99 L 21.95 14.10 L 14.42 14.17 Z" />
      {children}
    </svg>
  );
});

export default TractoHorizon;
