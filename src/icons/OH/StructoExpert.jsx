import React from 'react';

export const iconData = {
  "id": "StructoExpert",
  "name": "StructoExpert",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.41 6.41 L 19.59 6.41 L 19.59 17.59 L 4.41 17.59 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 6.41 L 8.34 2.49 L 23.51 2.49 L 19.59 6.41"
      }
    ],
    [
      "path",
      {
        "d": "M 19.59 6.41 L 23.51 2.49 L 23.51 13.66 L 19.59 17.59"
      }
    ]
  ]
};

export const StructoExpert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.41 6.41 L 19.59 6.41 L 19.59 17.59 L 4.41 17.59 Z" />
      <path d="M 4.41 6.41 L 8.34 2.49 L 23.51 2.49 L 19.59 6.41" />
      <path d="M 19.59 6.41 L 23.51 2.49 L 23.51 13.66 L 19.59 17.59" />
      {children}
    </svg>
  );
});

export default StructoExpert;
