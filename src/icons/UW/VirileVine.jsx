import React from 'react';

export const iconData = {
  "id": "VirileVine",
  "name": "VirileVine",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 5.98 L 20.43 5.98 L 20.43 18.02 L 3.57 18.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 5.98 L 8.08 1.46 L 24.95 1.46 L 20.43 5.98"
      }
    ],
    [
      "path",
      {
        "d": "M 20.43 5.98 L 24.95 1.46 L 24.95 13.51 L 20.43 18.02"
      }
    ]
  ]
};

export const VirileVine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 5.98 L 20.43 5.98 L 20.43 18.02 L 3.57 18.02 Z" />
      <path d="M 3.57 5.98 L 8.08 1.46 L 24.95 1.46 L 20.43 5.98" />
      <path d="M 20.43 5.98 L 24.95 1.46 L 24.95 13.51 L 20.43 18.02" />
      {children}
    </svg>
  );
});

export default VirileVine;
