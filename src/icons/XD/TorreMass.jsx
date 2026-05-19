import React from 'react';

export const iconData = {
  "id": "TorreMass",
  "name": "TorreMass",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.19 3.39 L 20.86 13.87 L 5.95 18.74 Z"
      }
    ]
  ]
};

export const TorreMass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.19 3.39 L 20.86 13.87 L 5.95 18.74 Z" />
      {children}
    </svg>
  );
});

export default TorreMass;
