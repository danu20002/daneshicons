import React from 'react';

export const iconData = {
  "id": "TotemKindle",
  "name": "TotemKindle",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 5.13 L 19.04 5.13 L 19.04 18.87 L 4.96 18.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 5.13 L 8.26 1.82 L 22.34 1.82 L 19.04 5.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 5.13 L 22.34 1.82 L 22.34 15.57 L 19.04 18.87"
      }
    ]
  ]
};

export const TotemKindle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 5.13 L 19.04 5.13 L 19.04 18.87 L 4.96 18.87 Z" />
      <path d="M 4.96 5.13 L 8.26 1.82 L 22.34 1.82 L 19.04 5.13" />
      <path d="M 19.04 5.13 L 22.34 1.82 L 22.34 15.57 L 19.04 18.87" />
      {children}
    </svg>
  );
});

export default TotemKindle;
