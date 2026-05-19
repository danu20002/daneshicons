import React from 'react';

export const iconData = {
  "id": "GraphoPain",
  "name": "GraphoPain",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.07 9.28 L 7.61 3.77 L 14.72 3.07 L 20.23 7.61 L 20.93 14.72 L 16.39 20.23 L 9.28 20.93 L 3.77 16.39 Z"
      }
    ]
  ]
};

export const GraphoPain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.07 9.28 L 7.61 3.77 L 14.72 3.07 L 20.23 7.61 L 20.93 14.72 L 16.39 20.23 L 9.28 20.93 L 3.77 16.39 Z" />
      {children}
    </svg>
  );
});

export default GraphoPain;
