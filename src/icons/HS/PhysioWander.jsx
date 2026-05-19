import React from 'react';

export const iconData = {
  "id": "PhysioWander",
  "name": "PhysioWander",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.78 6.18 L 19.22 6.18 L 19.22 17.82 L 4.78 17.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 6.18 L 8.23 2.73 L 22.67 2.73 L 19.22 6.18"
      }
    ],
    [
      "path",
      {
        "d": "M 19.22 6.18 L 22.67 2.73 L 22.67 14.37 L 19.22 17.82"
      }
    ]
  ]
};

export const PhysioWander = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.78 6.18 L 19.22 6.18 L 19.22 17.82 L 4.78 17.82 Z" />
      <path d="M 4.78 6.18 L 8.23 2.73 L 22.67 2.73 L 19.22 6.18" />
      <path d="M 19.22 6.18 L 22.67 2.73 L 22.67 14.37 L 19.22 17.82" />
      {children}
    </svg>
  );
});

export default PhysioWander;
