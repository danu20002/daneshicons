import React from 'react';

export const iconData = {
  "id": "StannoPowder",
  "name": "StannoPowder",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.38 21.87 L 7.57 13.20 L 4.76 4.80 L 13.18 7.57 L 21.85 9.33 L 15.25 15.24 Z"
      }
    ]
  ]
};

export const StannoPowder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.38 21.87 L 7.57 13.20 L 4.76 4.80 L 13.18 7.57 L 21.85 9.33 L 15.25 15.24 Z" />
      {children}
    </svg>
  );
});

export default StannoPowder;
