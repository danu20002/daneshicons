import React from 'react';

export const iconData = {
  "id": "SucroSuit",
  "name": "SucroSuit",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.42 19.79 L 3.46 12.79 L 7.05 5.00 L 15.58 4.21 L 20.54 11.21 L 16.95 19.00 Z"
      }
    ]
  ]
};

export const SucroSuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.42 19.79 L 3.46 12.79 L 7.05 5.00 L 15.58 4.21 L 20.54 11.21 L 16.95 19.00 Z" />
      {children}
    </svg>
  );
});

export default SucroSuit;
