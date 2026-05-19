import React from 'react';

export const iconData = {
  "id": "QuiesExist",
  "name": "QuiesExist",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.45 5.32 L 19.55 5.32 L 19.55 18.68 L 4.45 18.68 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 5.32 L 9.17 0.60 L 24.28 0.60 L 19.55 5.32"
      }
    ],
    [
      "path",
      {
        "d": "M 19.55 5.32 L 24.28 0.60 L 24.28 13.96 L 19.55 18.68"
      }
    ]
  ]
};

export const QuiesExist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.45 5.32 L 19.55 5.32 L 19.55 18.68 L 4.45 18.68 Z" />
      <path d="M 4.45 5.32 L 9.17 0.60 L 24.28 0.60 L 19.55 5.32" />
      <path d="M 19.55 5.32 L 24.28 0.60 L 24.28 13.96 L 19.55 18.68" />
      {children}
    </svg>
  );
});

export default QuiesExist;
