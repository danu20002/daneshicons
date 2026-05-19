import React from 'react';

export const iconData = {
  "id": "VillicoFiber",
  "name": "VillicoFiber",
  "category": "YJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.36 13.55 L 5.97 19.33 L 8.66 3.11 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.87 14.50 L 6.90 15.84 L 11.23 5.66 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 13.89 L 9.08 13.28 L 12.36 8.83 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.04 12.08 L 11.91 12.00 L 12.05 11.92 Z"
      }
    ]
  ]
};

export const VillicoFiber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.36 13.55 L 5.97 19.33 L 8.66 3.11 Z" />
      <path d="M 17.87 14.50 L 6.90 15.84 L 11.23 5.66 Z" />
      <path d="M 14.57 13.89 L 9.08 13.28 L 12.36 8.83 Z" />
      <path d="M 12.04 12.08 L 11.91 12.00 L 12.05 11.92 Z" />
      {children}
    </svg>
  );
});

export default VillicoFiber;
