import React from 'react';

export const iconData = {
  "id": "TernoGown",
  "name": "TernoGown",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 5.17 L 20.21 5.17 L 20.21 18.83 L 3.79 18.83 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 5.17 L 7.03 1.94 L 23.44 1.94 L 20.21 5.17"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 5.17 L 23.44 1.94 L 23.44 15.59 L 20.21 18.83"
      }
    ]
  ]
};

export const TernoGown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 5.17 L 20.21 5.17 L 20.21 18.83 L 3.79 18.83 Z" />
      <path d="M 3.79 5.17 L 7.03 1.94 L 23.44 1.94 L 20.21 5.17" />
      <path d="M 20.21 5.17 L 23.44 1.94 L 23.44 15.59 L 20.21 18.83" />
      {children}
    </svg>
  );
});

export default TernoGown;
