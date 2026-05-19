import React from 'react';

export const iconData = {
  "id": "ValchiriaPending",
  "name": "ValchiriaPending",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.41 5.35 L 19.59 5.35 L 19.59 18.65 L 4.41 18.65 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 5.35 L 8.18 1.58 L 23.36 1.58 L 19.59 5.35"
      }
    ],
    [
      "path",
      {
        "d": "M 19.59 5.35 L 23.36 1.58 L 23.36 14.88 L 19.59 18.65"
      }
    ]
  ]
};

export const ValchiriaPending = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.41 5.35 L 19.59 5.35 L 19.59 18.65 L 4.41 18.65 Z" />
      <path d="M 4.41 5.35 L 8.18 1.58 L 23.36 1.58 L 19.59 5.35" />
      <path d="M 19.59 5.35 L 23.36 1.58 L 23.36 14.88 L 19.59 18.65" />
      {children}
    </svg>
  );
});

export default ValchiriaPending;
