import React from 'react';

export const iconData = {
  "id": "LiquidoTiny",
  "name": "LiquidoTiny",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.46 5.20 L 19.54 5.20 L 19.54 18.80 L 4.46 18.80 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 5.20 L 8.65 1.01 L 23.74 1.01 L 19.54 5.20"
      }
    ],
    [
      "path",
      {
        "d": "M 19.54 5.20 L 23.74 1.01 L 23.74 14.60 L 19.54 18.80"
      }
    ]
  ]
};

export const LiquidoTiny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.46 5.20 L 19.54 5.20 L 19.54 18.80 L 4.46 18.80 Z" />
      <path d="M 4.46 5.20 L 8.65 1.01 L 23.74 1.01 L 19.54 5.20" />
      <path d="M 19.54 5.20 L 23.74 1.01 L 23.74 14.60 L 19.54 18.80" />
      {children}
    </svg>
  );
});

export default LiquidoTiny;
