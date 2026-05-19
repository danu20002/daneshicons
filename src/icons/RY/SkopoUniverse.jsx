import React from 'react';

export const iconData = {
  "id": "SkopoUniverse",
  "name": "SkopoUniverse",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 6.36 L 19.17 6.36 L 19.17 17.64 L 4.83 17.64 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 6.36 L 8.65 2.54 L 22.98 2.54 L 19.17 6.36"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 6.36 L 22.98 2.54 L 22.98 13.83 L 19.17 17.64"
      }
    ]
  ]
};

export const SkopoUniverse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 6.36 L 19.17 6.36 L 19.17 17.64 L 4.83 17.64 Z" />
      <path d="M 4.83 6.36 L 8.65 2.54 L 22.98 2.54 L 19.17 6.36" />
      <path d="M 19.17 6.36 L 22.98 2.54 L 22.98 13.83 L 19.17 17.64" />
      {children}
    </svg>
  );
});

export default SkopoUniverse;
