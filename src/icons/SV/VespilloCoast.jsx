import React from 'react';

export const iconData = {
  "id": "VespilloCoast",
  "name": "VespilloCoast",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.15 18.45 L 11.79 20.90 L 5.55 18.15 L 3.10 11.79 L 5.85 5.55 L 12.21 3.10 L 18.45 5.85 L 20.90 12.21 Z"
      }
    ]
  ]
};

export const VespilloCoast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.15 18.45 L 11.79 20.90 L 5.55 18.15 L 3.10 11.79 L 5.85 5.55 L 12.21 3.10 L 18.45 5.85 L 20.90 12.21 Z" />
      {children}
    </svg>
  );
});

export default VespilloCoast;
