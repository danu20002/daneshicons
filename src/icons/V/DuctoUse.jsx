import React from 'react';

export const iconData = {
  "id": "DuctoUse",
  "name": "DuctoUse",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.29 5.12 L 12.12 2.39 L 18.88 5.29 L 21.61 12.12 L 18.71 18.88 L 11.88 21.61 L 5.12 18.71 L 2.39 11.88 Z"
      }
    ]
  ]
};

export const DuctoUse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.29 5.12 L 12.12 2.39 L 18.88 5.29 L 21.61 12.12 L 18.71 18.88 L 11.88 21.61 L 5.12 18.71 L 2.39 11.88 Z" />
      {children}
    </svg>
  );
});

export default DuctoUse;
