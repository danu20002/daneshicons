import React from 'react';

export const iconData = {
  "id": "GraphoPond",
  "name": "GraphoPond",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.79 11.68 L 5.14 5.84 L 10.71 2.87 L 16.88 4.18 L 20.77 9.15 L 20.55 15.45 L 16.33 20.14 L 10.09 21.02 L 4.74 17.68 Z"
      }
    ]
  ]
};

export const GraphoPond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.79 11.68 L 5.14 5.84 L 10.71 2.87 L 16.88 4.18 L 20.77 9.15 L 20.55 15.45 L 16.33 20.14 L 10.09 21.02 L 4.74 17.68 Z" />
      {children}
    </svg>
  );
});

export default GraphoPond;
