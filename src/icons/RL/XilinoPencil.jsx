import React from 'react';

export const iconData = {
  "id": "XilinoPencil",
  "name": "XilinoPencil",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 8.00 L 8.95 7.76 L 11.03 2.32 L 14.15 7.24 L 19.90 6.32 L 17.20 11.48 L 20.87 16.00 L 15.05 16.24 L 12.97 21.68 L 9.85 16.76 L 4.10 17.68 L 6.80 12.52 Z"
      }
    ]
  ]
};

export const XilinoPencil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 8.00 L 8.95 7.76 L 11.03 2.32 L 14.15 7.24 L 19.90 6.32 L 17.20 11.48 L 20.87 16.00 L 15.05 16.24 L 12.97 21.68 L 9.85 16.76 L 4.10 17.68 L 6.80 12.52 Z" />
      {children}
    </svg>
  );
});

export default XilinoPencil;
