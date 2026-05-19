import React from 'react';

export const iconData = {
  "id": "StibioFuture",
  "name": "StibioFuture",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.46 19.00 L 10.20 20.11 L 5.00 16.46 L 3.89 10.20 L 7.54 5.00 L 13.80 3.89 L 19.00 7.54 L 20.11 13.80 Z"
      }
    ]
  ]
};

export const StibioFuture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.46 19.00 L 10.20 20.11 L 5.00 16.46 L 3.89 10.20 L 7.54 5.00 L 13.80 3.89 L 19.00 7.54 L 20.11 13.80 Z" />
      {children}
    </svg>
  );
});

export default StibioFuture;
