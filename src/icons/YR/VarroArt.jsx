import React from 'react';

export const iconData = {
  "id": "VarroArt",
  "name": "VarroArt",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.91 5.92 L 19.92 16.69 L 9.99 20.98 L 2.84 12.86 L 8.35 3.55 Z"
      }
    ]
  ]
};

export const VarroArt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.91 5.92 L 19.92 16.69 L 9.99 20.98 L 2.84 12.86 L 8.35 3.55 Z" />
      {children}
    </svg>
  );
});

export default VarroArt;
