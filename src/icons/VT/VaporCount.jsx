import React from 'react';

export const iconData = {
  "id": "VaporCount",
  "name": "VaporCount",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.45 16.72 L 11.64 20.81 L 4.19 16.09 L 4.55 7.28 L 12.36 3.19 L 19.81 7.91 Z"
      }
    ]
  ]
};

export const VaporCount = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.45 16.72 L 11.64 20.81 L 4.19 16.09 L 4.55 7.28 L 12.36 3.19 L 19.81 7.91 Z" />
      {children}
    </svg>
  );
});

export default VaporCount;
