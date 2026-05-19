import React from 'react';

export const iconData = {
  "id": "TranquilloBrim",
  "name": "TranquilloBrim",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 6.92 L 19.87 6.92 L 19.87 17.08 L 4.13 17.08 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 6.92 L 8.55 2.50 L 24.29 2.50 L 19.87 6.92"
      }
    ],
    [
      "path",
      {
        "d": "M 19.87 6.92 L 24.29 2.50 L 24.29 12.66 L 19.87 17.08"
      }
    ]
  ]
};

export const TranquilloBrim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 6.92 L 19.87 6.92 L 19.87 17.08 L 4.13 17.08 Z" />
      <path d="M 4.13 6.92 L 8.55 2.50 L 24.29 2.50 L 19.87 6.92" />
      <path d="M 19.87 6.92 L 24.29 2.50 L 24.29 12.66 L 19.87 17.08" />
      {children}
    </svg>
  );
});

export default TranquilloBrim;
