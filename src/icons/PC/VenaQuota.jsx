import React from 'react';

export const iconData = {
  "id": "VenaQuota",
  "name": "VenaQuota",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.79 12.90 L 11.10 20.79 L 3.21 11.10 L 12.90 3.21 Z"
      }
    ]
  ]
};

export const VenaQuota = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.79 12.90 L 11.10 20.79 L 3.21 11.10 L 12.90 3.21 Z" />
      {children}
    </svg>
  );
});

export default VenaQuota;
