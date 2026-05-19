import React from 'react';

export const iconData = {
  "id": "ZampinoStair",
  "name": "ZampinoStair",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.02 5.40 L 19.98 5.40 L 19.98 18.60 L 4.02 18.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 5.40 L 8.71 0.72 L 24.66 0.72 L 19.98 5.40"
      }
    ],
    [
      "path",
      {
        "d": "M 19.98 5.40 L 24.66 0.72 L 24.66 13.91 L 19.98 18.60"
      }
    ]
  ]
};

export const ZampinoStair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.02 5.40 L 19.98 5.40 L 19.98 18.60 L 4.02 18.60 Z" />
      <path d="M 4.02 5.40 L 8.71 0.72 L 24.66 0.72 L 19.98 5.40" />
      <path d="M 19.98 5.40 L 24.66 0.72 L 24.66 13.91 L 19.98 18.60" />
      {children}
    </svg>
  );
});

export default ZampinoStair;
