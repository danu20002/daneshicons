import React from 'react';

export const iconData = {
  "id": "ScurroReflect",
  "name": "ScurroReflect",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.68 10.72 L 10.68 10.72"
      }
    ],
    [
      "path",
      {
        "d": "M 13.28 6.68 L 13.28 10.68"
      }
    ],
    [
      "path",
      {
        "d": "M 17.32 13.28 L 13.32 13.28"
      }
    ],
    [
      "path",
      {
        "d": "M 10.72 17.32 L 10.72 13.32"
      }
    ]
  ]
};

export const ScurroReflect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.68 10.72 L 10.68 10.72" />
      <path d="M 13.28 6.68 L 13.28 10.68" />
      <path d="M 17.32 13.28 L 13.32 13.28" />
      <path d="M 10.72 17.32 L 10.72 13.32" />
      {children}
    </svg>
  );
});

export default ScurroReflect;
