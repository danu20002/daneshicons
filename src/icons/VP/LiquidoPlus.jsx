import React from 'react';

export const iconData = {
  "id": "LiquidoPlus",
  "name": "LiquidoPlus",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.51 5.78 L 20.49 5.78 L 20.49 18.22 L 3.51 18.22 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 5.78 L 8.36 0.92 L 25.35 0.92 L 20.49 5.78"
      }
    ],
    [
      "path",
      {
        "d": "M 20.49 5.78 L 25.35 0.92 L 25.35 13.36 L 20.49 18.22"
      }
    ]
  ]
};

export const LiquidoPlus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.51 5.78 L 20.49 5.78 L 20.49 18.22 L 3.51 18.22 Z" />
      <path d="M 3.51 5.78 L 8.36 0.92 L 25.35 0.92 L 20.49 5.78" />
      <path d="M 20.49 5.78 L 25.35 0.92 L 25.35 13.36 L 20.49 18.22" />
      {children}
    </svg>
  );
});

export default LiquidoPlus;
