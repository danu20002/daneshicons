import React from 'react';

export const iconData = {
  "id": "TrocleaSling",
  "name": "TrocleaSling",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.59 6.99 L 20.41 6.99 L 20.41 17.01 L 3.59 17.01 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 6.99 L 7.16 3.42 L 23.98 3.42 L 20.41 6.99"
      }
    ],
    [
      "path",
      {
        "d": "M 20.41 6.99 L 23.98 3.42 L 23.98 13.44 L 20.41 17.01"
      }
    ]
  ]
};

export const TrocleaSling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.59 6.99 L 20.41 6.99 L 20.41 17.01 L 3.59 17.01 Z" />
      <path d="M 3.59 6.99 L 7.16 3.42 L 23.98 3.42 L 20.41 6.99" />
      <path d="M 20.41 6.99 L 23.98 3.42 L 23.98 13.44 L 20.41 17.01" />
      {children}
    </svg>
  );
});

export default TrocleaSling;
