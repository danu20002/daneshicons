import React from 'react';

export const iconData = {
  "id": "XilograMutation",
  "name": "XilograMutation",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.65 6.17 L 20.35 6.17 L 20.35 17.83 L 3.65 17.83 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 6.17 L 8.20 1.62 L 24.90 1.62 L 20.35 6.17"
      }
    ],
    [
      "path",
      {
        "d": "M 20.35 6.17 L 24.90 1.62 L 24.90 13.28 L 20.35 17.83"
      }
    ]
  ]
};

export const XilograMutation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.65 6.17 L 20.35 6.17 L 20.35 17.83 L 3.65 17.83 Z" />
      <path d="M 3.65 6.17 L 8.20 1.62 L 24.90 1.62 L 20.35 6.17" />
      <path d="M 20.35 6.17 L 24.90 1.62 L 24.90 13.28 L 20.35 17.83" />
      {children}
    </svg>
  );
});

export default XilograMutation;
