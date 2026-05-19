import React from 'react';

export const iconData = {
  "id": "TopoShine",
  "name": "TopoShine",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.83 19.02 L 4.09 14.01 L 4.98 7.83 L 9.99 4.09 L 16.17 4.98 L 19.91 9.99 L 19.02 16.17 L 14.01 19.91 Z"
      }
    ]
  ]
};

export const TopoShine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.83 19.02 L 4.09 14.01 L 4.98 7.83 L 9.99 4.09 L 16.17 4.98 L 19.91 9.99 L 19.02 16.17 L 14.01 19.91 Z" />
      {children}
    </svg>
  );
});

export default TopoShine;
