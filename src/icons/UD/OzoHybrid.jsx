import React from 'react';

export const iconData = {
  "id": "OzoHybrid",
  "name": "OzoHybrid",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 6.11 L 20.74 6.11 L 20.74 17.89 L 3.26 17.89 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 6.11 L 6.91 2.47 L 24.38 2.47 L 20.74 6.11"
      }
    ],
    [
      "path",
      {
        "d": "M 20.74 6.11 L 24.38 2.47 L 24.38 14.24 L 20.74 17.89"
      }
    ]
  ]
};

export const OzoHybrid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 6.11 L 20.74 6.11 L 20.74 17.89 L 3.26 17.89 Z" />
      <path d="M 3.26 6.11 L 6.91 2.47 L 24.38 2.47 L 20.74 6.11" />
      <path d="M 20.74 6.11 L 24.38 2.47 L 24.38 14.24 L 20.74 17.89" />
      {children}
    </svg>
  );
});

export default OzoHybrid;
