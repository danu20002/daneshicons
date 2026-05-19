import React from 'react';

export const iconData = {
  "id": "FiberSmoke",
  "name": "FiberSmoke",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.96 6.41 C 15.55 15.58, 10.01 8.88, 19.43 18.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 3.82 C 16.08 17.52, 18.78 7.59, 16.19 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 8.71 C 6.42 14.41, 8.30 11.82, 20.66 15.67"
      }
    ]
  ]
};

export const FiberSmoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.96 6.41 C 15.55 15.58, 10.01 8.88, 19.43 18.77" />
      <path d="M 7.48 3.82 C 16.08 17.52, 18.78 7.59, 16.19 20.31" />
      <path d="M 6.24 8.71 C 6.42 14.41, 8.30 11.82, 20.66 15.67" />
      {children}
    </svg>
  );
});

export default FiberSmoke;
