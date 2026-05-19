import React from 'react';

export const iconData = {
  "id": "SurgeRoach",
  "name": "SurgeRoach",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.37 14.39 L 12.31 20.70 L 3.82 14.99 L 6.63 5.15 L 16.86 4.78 Z"
      }
    ]
  ]
};

export const SurgeRoach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.37 14.39 L 12.31 20.70 L 3.82 14.99 L 6.63 5.15 L 16.86 4.78 Z" />
      {children}
    </svg>
  );
});

export default SurgeRoach;
