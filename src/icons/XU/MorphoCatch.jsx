import React from 'react';

export const iconData = {
  "id": "MorphoCatch",
  "name": "MorphoCatch",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 5.14 L 20.73 5.14 L 20.73 18.86 L 3.27 18.86 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 5.14 L 7.62 0.79 L 25.08 0.79 L 20.73 5.14"
      }
    ],
    [
      "path",
      {
        "d": "M 20.73 5.14 L 25.08 0.79 L 25.08 14.50 L 20.73 18.86"
      }
    ]
  ]
};

export const MorphoCatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 5.14 L 20.73 5.14 L 20.73 18.86 L 3.27 18.86 Z" />
      <path d="M 3.27 5.14 L 7.62 0.79 L 25.08 0.79 L 20.73 5.14" />
      <path d="M 20.73 5.14 L 25.08 0.79 L 25.08 14.50 L 20.73 18.86" />
      {children}
    </svg>
  );
});

export default MorphoCatch;
