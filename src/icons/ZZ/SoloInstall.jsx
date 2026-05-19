import React from 'react';

export const iconData = {
  "id": "SoloInstall",
  "name": "SoloInstall",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 6.31 L 20.78 6.31 L 20.78 17.69 L 3.22 17.69 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 6.31 L 6.29 3.23 L 23.86 3.23 L 20.78 6.31"
      }
    ],
    [
      "path",
      {
        "d": "M 20.78 6.31 L 23.86 3.23 L 23.86 14.62 L 20.78 17.69"
      }
    ]
  ]
};

export const SoloInstall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 6.31 L 20.78 6.31 L 20.78 17.69 L 3.22 17.69 Z" />
      <path d="M 3.22 6.31 L 6.29 3.23 L 23.86 3.23 L 20.78 6.31" />
      <path d="M 20.78 6.31 L 23.86 3.23 L 23.86 14.62 L 20.78 17.69" />
      {children}
    </svg>
  );
});

export default SoloInstall;
