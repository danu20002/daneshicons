import React from 'react';

export const iconData = {
  "id": "GenoSuccumb",
  "name": "GenoSuccumb",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.23 13.19 L 10.81 21.23 L 2.77 10.81 L 13.19 2.77 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.58 14.81 L 9.19 17.58 L 6.42 9.19 L 14.81 6.42 Z"
      }
    ]
  ]
};

export const GenoSuccumb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.23 13.19 L 10.81 21.23 L 2.77 10.81 L 13.19 2.77 Z" />
      <path d="M 17.58 14.81 L 9.19 17.58 L 6.42 9.19 L 14.81 6.42 Z" />
      {children}
    </svg>
  );
});

export default GenoSuccumb;
