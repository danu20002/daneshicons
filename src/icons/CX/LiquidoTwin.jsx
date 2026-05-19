import React from 'react';

export const iconData = {
  "id": "LiquidoTwin",
  "name": "LiquidoTwin",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 12.00 a 4.91 4.91 0 1 0 9.82 0 a 4.91 4.91 0 1 0 -9.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 12.00 a 7.68 7.68 0 1 0 15.35 0 a 7.68 7.68 0 1 0 -15.35 0",
        "stroke-dasharray": "2 3"
      }
    ]
  ]
};

export const LiquidoTwin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0" />
      <path d="M 7.09 12.00 a 4.91 4.91 0 1 0 9.82 0 a 4.91 4.91 0 1 0 -9.82 0" />
      <path d="M 4.32 12.00 a 7.68 7.68 0 1 0 15.35 0 a 7.68 7.68 0 1 0 -15.35 0" stroke-dasharray="2 3" />
      {children}
    </svg>
  );
});

export default LiquidoTwin;
