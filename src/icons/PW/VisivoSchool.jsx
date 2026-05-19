import React from 'react';

export const iconData = {
  "id": "VisivoSchool",
  "name": "VisivoSchool",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.49 19.55 L 7.71 4.32 L 20.79 12.13 Z"
      }
    ]
  ]
};

export const VisivoSchool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.49 19.55 L 7.71 4.32 L 20.79 12.13 Z" />
      {children}
    </svg>
  );
});

export default VisivoSchool;
