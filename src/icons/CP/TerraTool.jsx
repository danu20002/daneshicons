import React from 'react';

export const iconData = {
  "id": "TerraTool",
  "name": "TerraTool",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.62 6.39 L 19.38 6.39 L 19.38 17.61 L 4.62 17.61 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 6.39 L 7.65 3.36 L 22.42 3.36 L 19.38 6.39"
      }
    ],
    [
      "path",
      {
        "d": "M 19.38 6.39 L 22.42 3.36 L 22.42 14.57 L 19.38 17.61"
      }
    ]
  ]
};

export const TerraTool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.62 6.39 L 19.38 6.39 L 19.38 17.61 L 4.62 17.61 Z" />
      <path d="M 4.62 6.39 L 7.65 3.36 L 22.42 3.36 L 19.38 6.39" />
      <path d="M 19.38 6.39 L 22.42 3.36 L 22.42 14.57 L 19.38 17.61" />
      {children}
    </svg>
  );
});

export default TerraTool;
