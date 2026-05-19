import React from 'react';

export const iconData = {
  "id": "VespilloEnemy",
  "name": "VespilloEnemy",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.46 3.59 L 17.51 4.73 L 21.05 13.14 L 15.54 20.41 L 6.49 19.27 L 2.95 10.86 Z"
      }
    ]
  ]
};

export const VespilloEnemy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.46 3.59 L 17.51 4.73 L 21.05 13.14 L 15.54 20.41 L 6.49 19.27 L 2.95 10.86 Z" />
      {children}
    </svg>
  );
});

export default VespilloEnemy;
