import React from 'react';

export const iconData = {
  "id": "SideroMattress",
  "name": "SideroMattress",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 5.09 L 20.13 5.09 L 20.13 18.91 L 3.87 18.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 5.09 L 7.60 1.36 L 23.87 1.36 L 20.13 5.09"
      }
    ],
    [
      "path",
      {
        "d": "M 20.13 5.09 L 23.87 1.36 L 23.87 15.17 L 20.13 18.91"
      }
    ]
  ]
};

export const SideroMattress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 5.09 L 20.13 5.09 L 20.13 18.91 L 3.87 18.91 Z" />
      <path d="M 3.87 5.09 L 7.60 1.36 L 23.87 1.36 L 20.13 5.09" />
      <path d="M 20.13 5.09 L 23.87 1.36 L 23.87 15.17 L 20.13 18.91" />
      {children}
    </svg>
  );
});

export default SideroMattress;
