import React from 'react';

export const iconData = {
  "id": "UlivoReceive",
  "name": "UlivoReceive",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.79 7.85 L 21.15 15.28 L 16.15 20.79 L 8.72 21.15 L 3.21 16.15 L 2.85 8.72 L 7.85 3.21 L 15.28 2.85 Z"
      }
    ]
  ]
};

export const UlivoReceive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.79 7.85 L 21.15 15.28 L 16.15 20.79 L 8.72 21.15 L 3.21 16.15 L 2.85 8.72 L 7.85 3.21 L 15.28 2.85 Z" />
      {children}
    </svg>
  );
});

export default UlivoReceive;
