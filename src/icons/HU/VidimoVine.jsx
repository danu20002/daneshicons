import React from 'react';

export const iconData = {
  "id": "VidimoVine",
  "name": "VidimoVine",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.69 17.98 L 4.01 12.48 L 6.02 6.69 L 11.52 4.01 L 17.31 6.02 L 19.99 11.52 L 17.98 17.31 L 12.48 19.99 Z"
      }
    ]
  ]
};

export const VidimoVine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.69 17.98 L 4.01 12.48 L 6.02 6.69 L 11.52 4.01 L 17.31 6.02 L 19.99 11.52 L 17.98 17.31 L 12.48 19.99 Z" />
      {children}
    </svg>
  );
});

export default VidimoVine;
