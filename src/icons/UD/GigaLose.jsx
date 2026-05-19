import React from 'react';

export const iconData = {
  "id": "GigaLose",
  "name": "GigaLose",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.47 6.86 L 20.53 6.86 L 20.53 17.14 L 3.47 17.14 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 6.86 L 8.17 2.16 L 25.23 2.16 L 20.53 6.86"
      }
    ],
    [
      "path",
      {
        "d": "M 20.53 6.86 L 25.23 2.16 L 25.23 12.44 L 20.53 17.14"
      }
    ]
  ]
};

export const GigaLose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.47 6.86 L 20.53 6.86 L 20.53 17.14 L 3.47 17.14 Z" />
      <path d="M 3.47 6.86 L 8.17 2.16 L 25.23 2.16 L 20.53 6.86" />
      <path d="M 20.53 6.86 L 25.23 2.16 L 25.23 12.44 L 20.53 17.14" />
      {children}
    </svg>
  );
});

export default GigaLose;
