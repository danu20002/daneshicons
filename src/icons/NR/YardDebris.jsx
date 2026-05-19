import React from 'react';

export const iconData = {
  "id": "YardDebris",
  "name": "YardDebris",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.12 3.67 L 19.96 9.54 L 16.80 18.81 L 7.01 18.67 L 4.11 9.31 Z"
      }
    ]
  ]
};

export const YardDebris = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.12 3.67 L 19.96 9.54 L 16.80 18.81 L 7.01 18.67 L 4.11 9.31 Z" />
      {children}
    </svg>
  );
});

export default YardDebris;
