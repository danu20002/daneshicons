import React from 'react';

export const iconData = {
  "id": "GalvoEndure",
  "name": "GalvoEndure",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.90 20.99 L 3.01 7.90 L 16.10 3.01 L 20.99 16.10 Z"
      }
    ]
  ]
};

export const GalvoEndure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.90 20.99 L 3.01 7.90 L 16.10 3.01 L 20.99 16.10 Z" />
      {children}
    </svg>
  );
});

export default GalvoEndure;
