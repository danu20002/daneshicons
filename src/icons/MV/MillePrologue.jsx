import React from 'react';

export const iconData = {
  "id": "MillePrologue",
  "name": "MillePrologue",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 5.36 L 19.29 5.36 L 19.29 18.64 L 4.71 18.64 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 5.36 L 8.39 1.68 L 22.97 1.68 L 19.29 5.36"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 5.36 L 22.97 1.68 L 22.97 14.96 L 19.29 18.64"
      }
    ]
  ]
};

export const MillePrologue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 5.36 L 19.29 5.36 L 19.29 18.64 L 4.71 18.64 Z" />
      <path d="M 4.71 5.36 L 8.39 1.68 L 22.97 1.68 L 19.29 5.36" />
      <path d="M 19.29 5.36 L 22.97 1.68 L 22.97 14.96 L 19.29 18.64" />
      {children}
    </svg>
  );
});

export default MillePrologue;
