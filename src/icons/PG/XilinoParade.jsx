import React from 'react';

export const iconData = {
  "id": "XilinoParade",
  "name": "XilinoParade",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.13 3.09 L 16.85 9.02 L 20.91 14.13 L 14.98 16.85 L 9.87 20.91 L 7.15 14.98 L 3.09 9.87 L 9.02 7.15 Z"
      }
    ]
  ]
};

export const XilinoParade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.13 3.09 L 16.85 9.02 L 20.91 14.13 L 14.98 16.85 L 9.87 20.91 L 7.15 14.98 L 3.09 9.87 L 9.02 7.15 Z" />
      {children}
    </svg>
  );
});

export default XilinoParade;
