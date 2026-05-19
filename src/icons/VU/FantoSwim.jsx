import React from 'react';

export const iconData = {
  "id": "FantoSwim",
  "name": "FantoSwim",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.41 15.69 L 15.88 16.18 L 14.98 21.66 L 11.15 17.64 L 6.31 20.35 L 7.06 14.85 L 1.92 12.76 L 6.69 9.92 L 5.13 4.59 L 10.32 6.55 L 13.51 2.01 L 15.21 7.29 L 20.75 6.95 L 17.69 11.57 Z"
      }
    ]
  ]
};

export const FantoSwim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.41 15.69 L 15.88 16.18 L 14.98 21.66 L 11.15 17.64 L 6.31 20.35 L 7.06 14.85 L 1.92 12.76 L 6.69 9.92 L 5.13 4.59 L 10.32 6.55 L 13.51 2.01 L 15.21 7.29 L 20.75 6.95 L 17.69 11.57 Z" />
      {children}
    </svg>
  );
});

export default FantoSwim;
