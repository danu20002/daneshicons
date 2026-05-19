import React from 'react';

export const iconData = {
  "id": "GraphoLeap",
  "name": "GraphoLeap",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.71 5.76 L 17.38 13.65 L 14.05 20.93 L 7.88 15.83 L 3.24 9.31 L 10.74 6.51 Z"
      }
    ]
  ]
};

export const GraphoLeap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.71 5.76 L 17.38 13.65 L 14.05 20.93 L 7.88 15.83 L 3.24 9.31 L 10.74 6.51 Z" />
      {children}
    </svg>
  );
});

export default GraphoLeap;
