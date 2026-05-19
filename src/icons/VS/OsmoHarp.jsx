import React from 'react';

export const iconData = {
  "id": "OsmoHarp",
  "name": "OsmoHarp",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.80 3.16 L 20.84 7.80 L 16.20 20.84 L 3.16 16.20 Z"
      }
    ]
  ]
};

export const OsmoHarp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.80 3.16 L 20.84 7.80 L 16.20 20.84 L 3.16 16.20 Z" />
      {children}
    </svg>
  );
});

export default OsmoHarp;
