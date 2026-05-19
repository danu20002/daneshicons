import React from 'react';

export const iconData = {
  "id": "SorboOptimize",
  "name": "SorboOptimize",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 3.54 L 18.12 5.67 L 20.54 14.13 L 14.42 20.46 L 5.88 18.33 L 3.46 9.87 Z"
      }
    ]
  ]
};

export const SorboOptimize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 3.54 L 18.12 5.67 L 20.54 14.13 L 14.42 20.46 L 5.88 18.33 L 3.46 9.87 Z" />
      {children}
    </svg>
  );
});

export default SorboOptimize;
