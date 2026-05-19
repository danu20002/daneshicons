import React from 'react';

export const iconData = {
  "id": "VittoreExtreme",
  "name": "VittoreExtreme",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.75 13.35 L 9.84 9.27 L 15.45 3.31 L 15.45 11.50 L 17.80 19.34 L 10.71 15.24 Z"
      }
    ]
  ]
};

export const VittoreExtreme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.75 13.35 L 9.84 9.27 L 15.45 3.31 L 15.45 11.50 L 17.80 19.34 L 10.71 15.24 Z" />
      {children}
    </svg>
  );
});

export default VittoreExtreme;
