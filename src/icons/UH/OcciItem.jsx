import React from 'react';

export const iconData = {
  "id": "OcciItem",
  "name": "OcciItem",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.92 12.40 L 16.11 19.92 L 7.19 19.52 L 3.08 11.60 L 7.89 4.08 L 16.81 4.48 Z"
      }
    ]
  ]
};

export const OcciItem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.92 12.40 L 16.11 19.92 L 7.19 19.52 L 3.08 11.60 L 7.89 4.08 L 16.81 4.48 Z" />
      {children}
    </svg>
  );
});

export default OcciItem;
