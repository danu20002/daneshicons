import React from 'react';

export const iconData = {
  "id": "FractoDeer",
  "name": "FractoDeer",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.12 20.77 L 5.85 18.34 L 3.20 11.14 L 7.18 4.59 L 14.79 3.61 L 20.30 8.95 L 19.55 16.59 Z"
      }
    ]
  ]
};

export const FractoDeer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.12 20.77 L 5.85 18.34 L 3.20 11.14 L 7.18 4.59 L 14.79 3.61 L 20.30 8.95 L 19.55 16.59 Z" />
      {children}
    </svg>
  );
});

export default FractoDeer;
