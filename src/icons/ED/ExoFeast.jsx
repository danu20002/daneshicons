import React from 'react';

export const iconData = {
  "id": "ExoFeast",
  "name": "ExoFeast",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.20 12.78 L 7.23 18.71 L 8.57 4.51 Z"
      }
    ]
  ]
};

export const ExoFeast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.20 12.78 L 7.23 18.71 L 8.57 4.51 Z" />
      {children}
    </svg>
  );
});

export default ExoFeast;
