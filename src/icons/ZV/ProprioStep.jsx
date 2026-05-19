import React from 'react';

export const iconData = {
  "id": "ProprioStep",
  "name": "ProprioStep",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.09 12.96 L 6.62 19.39 L 8.29 3.64 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 14.09 L 7.28 15.99 L 10.90 5.92 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.49 14.24 L 8.81 13.04 L 12.69 8.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.13 12.18 L 11.78 12.02 L 12.09 11.79 Z"
      }
    ]
  ]
};

export const ProprioStep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.09 12.96 L 6.62 19.39 L 8.29 3.64 Z" />
      <path d="M 17.82 14.09 L 7.28 15.99 L 10.90 5.92 Z" />
      <path d="M 14.49 14.24 L 8.81 13.04 L 12.69 8.72 Z" />
      <path d="M 12.13 12.18 L 11.78 12.02 L 12.09 11.79 Z" />
      {children}
    </svg>
  );
});

export default ProprioStep;
