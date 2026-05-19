import React from 'react';

export const iconData = {
  "id": "DuctoEditor",
  "name": "DuctoEditor",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.32 6.98 L 19.68 6.98 L 19.68 17.02 L 4.32 17.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 6.98 L 9.07 2.24 L 24.42 2.24 L 19.68 6.98"
      }
    ],
    [
      "path",
      {
        "d": "M 19.68 6.98 L 24.42 2.24 L 24.42 12.28 L 19.68 17.02"
      }
    ]
  ]
};

export const DuctoEditor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.32 6.98 L 19.68 6.98 L 19.68 17.02 L 4.32 17.02 Z" />
      <path d="M 4.32 6.98 L 9.07 2.24 L 24.42 2.24 L 19.68 6.98" />
      <path d="M 19.68 6.98 L 24.42 2.24 L 24.42 12.28 L 19.68 17.02" />
      {children}
    </svg>
  );
});

export default DuctoEditor;
