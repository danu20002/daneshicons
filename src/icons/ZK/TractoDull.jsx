import React from 'react';

export const iconData = {
  "id": "TractoDull",
  "name": "TractoDull",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 14.21 L 7.51 5.35 L 16.94 5.68 L 19.54 14.74 L 11.72 20.02 Z"
      }
    ]
  ]
};

export const TractoDull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 14.21 L 7.51 5.35 L 16.94 5.68 L 19.54 14.74 L 11.72 20.02 Z" />
      {children}
    </svg>
  );
});

export default TractoDull;
