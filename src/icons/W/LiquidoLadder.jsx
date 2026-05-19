import React from 'react';

export const iconData = {
  "id": "LiquidoLadder",
  "name": "LiquidoLadder",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.75 1.65 L 14.18 9.41 L 22.08 9.51 L 15.14 13.28 L 17.48 20.82 L 11.76 15.38 L 5.31 19.94 L 8.71 12.81 L 2.38 8.09 L 10.21 9.12 Z"
      }
    ]
  ]
};

export const LiquidoLadder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.75 1.65 L 14.18 9.41 L 22.08 9.51 L 15.14 13.28 L 17.48 20.82 L 11.76 15.38 L 5.31 19.94 L 8.71 12.81 L 2.38 8.09 L 10.21 9.12 Z" />
      {children}
    </svg>
  );
});

export default LiquidoLadder;
