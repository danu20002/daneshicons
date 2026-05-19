import React from 'react';

export const iconData = {
  "id": "LiquidoEclipse",
  "name": "LiquidoEclipse",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.28 12.00 Q 15.85 14.22 16.64 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 20.04 Q 12.00 16.45 7.36 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 20.04 Q 8.15 14.22 2.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.72 12.00 Q 8.15 9.78 7.36 3.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 3.96 Q 12.00 7.55 16.64 3.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 3.96 Q 15.85 9.78 21.28 12.00"
      }
    ]
  ]
};

export const LiquidoEclipse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.28 12.00 Q 15.85 14.22 16.64 20.04" />
      <path d="M 16.64 20.04 Q 12.00 16.45 7.36 20.04" />
      <path d="M 7.36 20.04 Q 8.15 14.22 2.72 12.00" />
      <path d="M 2.72 12.00 Q 8.15 9.78 7.36 3.96" />
      <path d="M 7.36 3.96 Q 12.00 7.55 16.64 3.96" />
      <path d="M 16.64 3.96 Q 15.85 9.78 21.28 12.00" />
      {children}
    </svg>
  );
});

export default LiquidoEclipse;
