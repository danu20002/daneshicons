import React from 'react';

export const iconData = {
  "id": "RadiciCouch",
  "name": "RadiciCouch",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.68 6.28 L 19.32 6.28 L 19.32 17.72 L 4.68 17.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 6.28 L 7.83 3.13 L 22.46 3.13 L 19.32 6.28"
      }
    ],
    [
      "path",
      {
        "d": "M 19.32 6.28 L 22.46 3.13 L 22.46 14.58 L 19.32 17.72"
      }
    ]
  ]
};

export const RadiciCouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.68 6.28 L 19.32 6.28 L 19.32 17.72 L 4.68 17.72 Z" />
      <path d="M 4.68 6.28 L 7.83 3.13 L 22.46 3.13 L 19.32 6.28" />
      <path d="M 19.32 6.28 L 22.46 3.13 L 22.46 14.58 L 19.32 17.72" />
      {children}
    </svg>
  );
});

export default RadiciCouch;
