import React from 'react';

export const iconData = {
  "id": "ValgoGarnet",
  "name": "ValgoGarnet",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.70 5.50 L 19.30 5.50 L 19.30 18.50 L 4.70 18.50 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 5.50 L 9.21 0.99 L 23.81 0.99 L 19.30 5.50"
      }
    ],
    [
      "path",
      {
        "d": "M 19.30 5.50 L 23.81 0.99 L 23.81 13.99 L 19.30 18.50"
      }
    ]
  ]
};

export const ValgoGarnet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.70 5.50 L 19.30 5.50 L 19.30 18.50 L 4.70 18.50 Z" />
      <path d="M 4.70 5.50 L 9.21 0.99 L 23.81 0.99 L 19.30 5.50" />
      <path d="M 19.30 5.50 L 23.81 0.99 L 23.81 13.99 L 19.30 18.50" />
      {children}
    </svg>
  );
});

export default ValgoGarnet;
