import React from 'react';

export const iconData = {
  "id": "ZuffaFlood",
  "name": "ZuffaFlood",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.11 5.51 L 16.66 5.35 L 19.77 14.38 L 12.14 20.13 L 4.32 14.64 Z"
      }
    ]
  ]
};

export const ZuffaFlood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.11 5.51 L 16.66 5.35 L 19.77 14.38 L 12.14 20.13 L 4.32 14.64 Z" />
      {children}
    </svg>
  );
});

export default ZuffaFlood;
