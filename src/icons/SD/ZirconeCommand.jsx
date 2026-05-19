import React from 'react';

export const iconData = {
  "id": "ZirconeCommand",
  "name": "ZirconeCommand",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.15 18.38 L 12.26 16.55 L 5.62 19.15 L 7.45 12.26 L 4.85 5.62 L 11.74 7.45 L 18.38 4.85 L 16.55 11.74 Z"
      }
    ]
  ]
};

export const ZirconeCommand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.15 18.38 L 12.26 16.55 L 5.62 19.15 L 7.45 12.26 L 4.85 5.62 L 11.74 7.45 L 18.38 4.85 L 16.55 11.74 Z" />
      {children}
    </svg>
  );
});

export default ZirconeCommand;
