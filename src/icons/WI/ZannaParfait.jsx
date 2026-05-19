import React from 'react';

export const iconData = {
  "id": "ZannaParfait",
  "name": "ZannaParfait",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.32 6.14 L 20.68 6.14 L 20.68 17.86 L 3.32 17.86 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 6.14 L 8.02 1.44 L 25.39 1.44 L 20.68 6.14"
      }
    ],
    [
      "path",
      {
        "d": "M 20.68 6.14 L 25.39 1.44 L 25.39 13.16 L 20.68 17.86"
      }
    ]
  ]
};

export const ZannaParfait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.32 6.14 L 20.68 6.14 L 20.68 17.86 L 3.32 17.86 Z" />
      <path d="M 3.32 6.14 L 8.02 1.44 L 25.39 1.44 L 20.68 6.14" />
      <path d="M 20.68 6.14 L 25.39 1.44 L 25.39 13.16 L 20.68 17.86" />
      {children}
    </svg>
  );
});

export default ZannaParfait;
