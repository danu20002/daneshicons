import React from 'react';

export const iconData = {
  "id": "VindiceMonarch",
  "name": "VindiceMonarch",
  "category": "N",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.37 13.44 L 6.07 19.39 L 8.56 3.17 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.57 14.47 L 7.08 15.59 L 11.35 5.95 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 14.26 L 8.82 12.98 L 12.74 8.76 Z"
      }
    ]
  ]
};

export const VindiceMonarch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.37 13.44 L 6.07 19.39 L 8.56 3.17 Z" />
      <path d="M 17.57 14.47 L 7.08 15.59 L 11.35 5.95 Z" />
      <path d="M 14.44 14.26 L 8.82 12.98 L 12.74 8.76 Z" />
      {children}
    </svg>
  );
});

export default VindiceMonarch;
