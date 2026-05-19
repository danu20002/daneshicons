import React from 'react';

export const iconData = {
  "id": "YogaEnact",
  "name": "YogaEnact",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 5.34 L 20.05 5.34 L 20.05 18.66 L 3.95 18.66 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 5.34 L 7.45 1.84 L 23.55 1.84 L 20.05 5.34"
      }
    ],
    [
      "path",
      {
        "d": "M 20.05 5.34 L 23.55 1.84 L 23.55 15.16 L 20.05 18.66"
      }
    ]
  ]
};

export const YogaEnact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 5.34 L 20.05 5.34 L 20.05 18.66 L 3.95 18.66 Z" />
      <path d="M 3.95 5.34 L 7.45 1.84 L 23.55 1.84 L 20.05 5.34" />
      <path d="M 20.05 5.34 L 23.55 1.84 L 23.55 15.16 L 20.05 18.66" />
      {children}
    </svg>
  );
});

export default YogaEnact;
