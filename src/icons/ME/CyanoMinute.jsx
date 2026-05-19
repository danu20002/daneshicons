import React from 'react';

export const iconData = {
  "id": "CyanoMinute",
  "name": "CyanoMinute",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 14.78 L 13.74 3.44 L 18.55 17.78 Z"
      }
    ]
  ]
};

export const CyanoMinute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 14.78 L 13.74 3.44 L 18.55 17.78 Z" />
      {children}
    </svg>
  );
});

export default CyanoMinute;
