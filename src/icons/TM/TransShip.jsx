import React from 'react';

export const iconData = {
  "id": "TransShip",
  "name": "TransShip",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.03 2.76 L 21.10 10.13 L 16.59 20.08 L 5.74 18.87 L 3.54 8.17 Z"
      }
    ]
  ]
};

export const TransShip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.03 2.76 L 21.10 10.13 L 16.59 20.08 L 5.74 18.87 L 3.54 8.17 Z" />
      {children}
    </svg>
  );
});

export default TransShip;
