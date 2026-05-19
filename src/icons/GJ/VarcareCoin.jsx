import React from 'react';

export const iconData = {
  "id": "VarcareCoin",
  "name": "VarcareCoin",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.78 5.18 L 20.31 11.48 L 17.59 18.18 L 10.66 20.22 L 4.74 16.07 L 4.28 8.86 L 9.64 4.01 Z"
      }
    ]
  ]
};

export const VarcareCoin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.78 5.18 L 20.31 11.48 L 17.59 18.18 L 10.66 20.22 L 4.74 16.07 L 4.28 8.86 L 9.64 4.01 Z" />
      {children}
    </svg>
  );
});

export default VarcareCoin;
