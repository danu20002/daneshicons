import React from 'react';

export const iconData = {
  "id": "ParaShame",
  "name": "ParaShame",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.64 4.60 L 20.16 13.17 L 13.41 20.12 L 4.71 15.85 L 6.09 6.26 Z"
      }
    ]
  ]
};

export const ParaShame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.64 4.60 L 20.16 13.17 L 13.41 20.12 L 4.71 15.85 L 6.09 6.26 Z" />
      {children}
    </svg>
  );
});

export default ParaShame;
