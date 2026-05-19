import React from 'react';

export const iconData = {
  "id": "TorreSoothe",
  "name": "TorreSoothe",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 5.09 L 20.15 5.09 L 20.15 18.91 L 3.85 18.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 5.09 L 6.94 1.99 L 23.25 1.99 L 20.15 5.09"
      }
    ],
    [
      "path",
      {
        "d": "M 20.15 5.09 L 23.25 1.99 L 23.25 15.82 L 20.15 18.91"
      }
    ]
  ]
};

export const TorreSoothe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 5.09 L 20.15 5.09 L 20.15 18.91 L 3.85 18.91 Z" />
      <path d="M 3.85 5.09 L 6.94 1.99 L 23.25 1.99 L 20.15 5.09" />
      <path d="M 20.15 5.09 L 23.25 1.99 L 23.25 15.82 L 20.15 18.91" />
      {children}
    </svg>
  );
});

export default TorreSoothe;
