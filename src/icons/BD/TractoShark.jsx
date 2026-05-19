import React from 'react';

export const iconData = {
  "id": "TractoShark",
  "name": "TractoShark",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.90 6.73 L 19.10 6.73 L 19.10 17.27 L 4.90 17.27 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 6.73 L 8.72 2.91 L 22.91 2.91 L 19.10 6.73"
      }
    ],
    [
      "path",
      {
        "d": "M 19.10 6.73 L 22.91 2.91 L 22.91 13.46 L 19.10 17.27"
      }
    ]
  ]
};

export const TractoShark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.90 6.73 L 19.10 6.73 L 19.10 17.27 L 4.90 17.27 Z" />
      <path d="M 4.90 6.73 L 8.72 2.91 L 22.91 2.91 L 19.10 6.73" />
      <path d="M 19.10 6.73 L 22.91 2.91 L 22.91 13.46 L 19.10 17.27" />
      {children}
    </svg>
  );
});

export default TractoShark;
