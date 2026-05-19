import React from 'react';

export const iconData = {
  "id": "TensoHybrid",
  "name": "TensoHybrid",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.92 20.73 L 2.94 15.29 L 3.27 7.92 L 8.71 2.94 L 16.08 3.27 L 21.06 8.71 L 20.73 16.08 L 15.29 21.06 Z"
      }
    ]
  ]
};

export const TensoHybrid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.92 20.73 L 2.94 15.29 L 3.27 7.92 L 8.71 2.94 L 16.08 3.27 L 21.06 8.71 L 20.73 16.08 L 15.29 21.06 Z" />
      {children}
    </svg>
  );
});

export default TensoHybrid;
