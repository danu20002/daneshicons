import React from 'react';

export const iconData = {
  "id": "LiquidoWeird",
  "name": "LiquidoWeird",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.77 16.36 L 12.11 20.91 L 4.34 16.55 L 4.23 7.64 L 11.89 3.09 L 19.66 7.45 Z"
      }
    ]
  ]
};

export const LiquidoWeird = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.77 16.36 L 12.11 20.91 L 4.34 16.55 L 4.23 7.64 L 11.89 3.09 L 19.66 7.45 Z" />
      {children}
    </svg>
  );
});

export default LiquidoWeird;
