import React from 'react';

export const iconData = {
  "id": "StomatoLesson",
  "name": "StomatoLesson",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 6.85 L 20.03 6.85 L 20.03 17.15 L 3.97 17.15 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 6.85 L 8.05 2.78 L 24.10 2.78 L 20.03 6.85"
      }
    ],
    [
      "path",
      {
        "d": "M 20.03 6.85 L 24.10 2.78 L 24.10 13.07 L 20.03 17.15"
      }
    ]
  ]
};

export const StomatoLesson = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 6.85 L 20.03 6.85 L 20.03 17.15 L 3.97 17.15 Z" />
      <path d="M 3.97 6.85 L 8.05 2.78 L 24.10 2.78 L 20.03 6.85" />
      <path d="M 20.03 6.85 L 24.10 2.78 L 24.10 13.07 L 20.03 17.15" />
      {children}
    </svg>
  );
});

export default StomatoLesson;
