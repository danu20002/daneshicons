import React from 'react';

export const iconData = {
  "id": "LiquidoPlague",
  "name": "LiquidoPlague",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.73 6.23 L 20.36 14.95 L 13.63 20.72 L 5.27 17.77 L 3.64 9.05 L 10.37 3.28 Z"
      }
    ]
  ]
};

export const LiquidoPlague = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.73 6.23 L 20.36 14.95 L 13.63 20.72 L 5.27 17.77 L 3.64 9.05 L 10.37 3.28 Z" />
      {children}
    </svg>
  );
});

export default LiquidoPlague;
