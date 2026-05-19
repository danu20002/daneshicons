import React from 'react';

export const iconData = {
  "id": "ZampinoPattern",
  "name": "ZampinoPattern",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 5.39 L 19.26 5.39 L 19.26 18.61 L 4.74 18.61 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 5.39 L 8.84 1.29 L 23.37 1.29 L 19.26 5.39"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 5.39 L 23.37 1.29 L 23.37 14.50 L 19.26 18.61"
      }
    ]
  ]
};

export const ZampinoPattern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 5.39 L 19.26 5.39 L 19.26 18.61 L 4.74 18.61 Z" />
      <path d="M 4.74 5.39 L 8.84 1.29 L 23.37 1.29 L 19.26 5.39" />
      <path d="M 19.26 5.39 L 23.37 1.29 L 23.37 14.50 L 19.26 18.61" />
      {children}
    </svg>
  );
});

export default ZampinoPattern;
