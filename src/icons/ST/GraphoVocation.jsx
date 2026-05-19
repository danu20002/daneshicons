import React from 'react';

export const iconData = {
  "id": "GraphoVocation",
  "name": "GraphoVocation",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 3.68 L 20.32 9.67 L 14.33 20.32 L 3.68 14.33 Z"
      }
    ]
  ]
};

export const GraphoVocation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 3.68 L 20.32 9.67 L 14.33 20.32 L 3.68 14.33 Z" />
      {children}
    </svg>
  );
});

export default GraphoVocation;
