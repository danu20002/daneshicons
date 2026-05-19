import React from 'react';

export const iconData = {
  "id": "ExoSource",
  "name": "ExoSource",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 5.57 L 19.26 5.57 L 19.26 18.43 L 4.74 18.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 5.57 L 9.21 1.10 L 23.73 1.10 L 19.26 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 5.57 L 23.73 1.10 L 23.73 13.96 L 19.26 18.43"
      }
    ]
  ]
};

export const ExoSource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 5.57 L 19.26 5.57 L 19.26 18.43 L 4.74 18.43 Z" />
      <path d="M 4.74 5.57 L 9.21 1.10 L 23.73 1.10 L 19.26 5.57" />
      <path d="M 19.26 5.57 L 23.73 1.10 L 23.73 13.96 L 19.26 18.43" />
      {children}
    </svg>
  );
});

export default ExoSource;
