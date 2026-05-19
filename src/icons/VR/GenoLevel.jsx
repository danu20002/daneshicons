import React from 'react';

export const iconData = {
  "id": "GenoLevel",
  "name": "GenoLevel",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.72 6.27 L 13.10 21.55 L 3.18 8.18 Z"
      }
    ]
  ]
};

export const GenoLevel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.72 6.27 L 13.10 21.55 L 3.18 8.18 Z" />
      {children}
    </svg>
  );
});

export default GenoLevel;
