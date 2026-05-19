import React from 'react';

export const iconData = {
  "id": "TranquilloRush",
  "name": "TranquilloRush",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.24 4.96 L 21.31 10.62 L 20.02 16.92 L 14.98 20.93 L 8.54 20.75 L 3.73 16.48 L 2.78 10.12 L 6.15 4.63 L 12.25 2.59 Z"
      }
    ]
  ]
};

export const TranquilloRush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.24 4.96 L 21.31 10.62 L 20.02 16.92 L 14.98 20.93 L 8.54 20.75 L 3.73 16.48 L 2.78 10.12 L 6.15 4.63 L 12.25 2.59 Z" />
      {children}
    </svg>
  );
});

export default TranquilloRush;
