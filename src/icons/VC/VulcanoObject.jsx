import React from 'react';

export const iconData = {
  "id": "VulcanoObject",
  "name": "VulcanoObject",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.34 2.06 L 16.41 9.81 L 21.94 15.34 L 14.19 16.41 L 8.66 21.94 L 7.59 14.19 L 2.06 8.66 L 9.81 7.59 Z"
      }
    ]
  ]
};

export const VulcanoObject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.34 2.06 L 16.41 9.81 L 21.94 15.34 L 14.19 16.41 L 8.66 21.94 L 7.59 14.19 L 2.06 8.66 L 9.81 7.59 Z" />
      {children}
    </svg>
  );
});

export default VulcanoObject;
