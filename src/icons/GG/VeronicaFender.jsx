import React from 'react';

export const iconData = {
  "id": "VeronicaFender",
  "name": "VeronicaFender",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 6.59 L 20.39 6.59 L 20.39 17.41 L 3.61 17.41 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 6.59 L 7.71 2.49 L 24.49 2.49 L 20.39 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 20.39 6.59 L 24.49 2.49 L 24.49 13.31 L 20.39 17.41"
      }
    ]
  ]
};

export const VeronicaFender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 6.59 L 20.39 6.59 L 20.39 17.41 L 3.61 17.41 Z" />
      <path d="M 3.61 6.59 L 7.71 2.49 L 24.49 2.49 L 20.39 6.59" />
      <path d="M 20.39 6.59 L 24.49 2.49 L 24.49 13.31 L 20.39 17.41" />
      {children}
    </svg>
  );
});

export default VeronicaFender;
