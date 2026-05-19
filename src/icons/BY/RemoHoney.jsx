import React from 'react';

export const iconData = {
  "id": "RemoHoney",
  "name": "RemoHoney",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.22 6.41 L 17.59 6.22 L 17.78 17.59 L 6.41 17.78 Z"
      }
    ]
  ]
};

export const RemoHoney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.22 6.41 L 17.59 6.22 L 17.78 17.59 L 6.41 17.78 Z" />
      {children}
    </svg>
  );
});

export default RemoHoney;
