import React from 'react';

export const iconData = {
  "id": "ReactoSnow",
  "name": "ReactoSnow",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.76 7.78 L 10.52 8.02 L 16.22 2.76 L 15.98 10.52 L 21.24 16.22 L 13.48 15.98 L 7.78 21.24 L 8.02 13.48 Z"
      }
    ]
  ]
};

export const ReactoSnow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.76 7.78 L 10.52 8.02 L 16.22 2.76 L 15.98 10.52 L 21.24 16.22 L 13.48 15.98 L 7.78 21.24 L 8.02 13.48 Z" />
      {children}
    </svg>
  );
});

export default ReactoSnow;
