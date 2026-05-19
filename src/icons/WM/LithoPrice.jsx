import React from 'react';

export const iconData = {
  "id": "LithoPrice",
  "name": "LithoPrice",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.32 8.04 L 20.68 15.08 L 15.96 20.32 L 8.92 20.68 L 3.68 15.96 L 3.32 8.92 L 8.04 3.68 L 15.08 3.32 Z"
      }
    ]
  ]
};

export const LithoPrice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.32 8.04 L 20.68 15.08 L 15.96 20.32 L 8.92 20.68 L 3.68 15.96 L 3.32 8.92 L 8.04 3.68 L 15.08 3.32 Z" />
      {children}
    </svg>
  );
});

export default LithoPrice;
