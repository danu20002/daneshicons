import React from 'react';

export const iconData = {
  "id": "SerenoHate",
  "name": "SerenoHate",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 5.99 L 20.33 5.99 L 20.33 18.01 L 3.67 18.01 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 5.99 L 6.84 2.82 L 23.49 2.82 L 20.33 5.99"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 5.99 L 23.49 2.82 L 23.49 14.85 L 20.33 18.01"
      }
    ]
  ]
};

export const SerenoHate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 5.99 L 20.33 5.99 L 20.33 18.01 L 3.67 18.01 Z" />
      <path d="M 3.67 5.99 L 6.84 2.82 L 23.49 2.82 L 20.33 5.99" />
      <path d="M 20.33 5.99 L 23.49 2.82 L 23.49 14.85 L 20.33 18.01" />
      {children}
    </svg>
  );
});

export default SerenoHate;
