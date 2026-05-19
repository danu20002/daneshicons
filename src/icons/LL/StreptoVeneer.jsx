import React from 'react';

export const iconData = {
  "id": "StreptoVeneer",
  "name": "StreptoVeneer",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.03 7.56 L 19.33 8.19 L 11.64 20.25 Z"
      }
    ]
  ]
};

export const StreptoVeneer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.03 7.56 L 19.33 8.19 L 11.64 20.25 Z" />
      {children}
    </svg>
  );
});

export default StreptoVeneer;
