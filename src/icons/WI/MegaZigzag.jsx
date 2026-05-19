import React from 'react';

export const iconData = {
  "id": "MegaZigzag",
  "name": "MegaZigzag",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.76 6.50 L 19.24 6.50 L 19.24 17.50 L 4.76 17.50 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 6.50 L 7.85 3.42 L 22.32 3.42 L 19.24 6.50"
      }
    ],
    [
      "path",
      {
        "d": "M 19.24 6.50 L 22.32 3.42 L 22.32 14.41 L 19.24 17.50"
      }
    ]
  ]
};

export const MegaZigzag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.76 6.50 L 19.24 6.50 L 19.24 17.50 L 4.76 17.50 Z" />
      <path d="M 4.76 6.50 L 7.85 3.42 L 22.32 3.42 L 19.24 6.50" />
      <path d="M 19.24 6.50 L 22.32 3.42 L 22.32 14.41 L 19.24 17.50" />
      {children}
    </svg>
  );
});

export default MegaZigzag;
