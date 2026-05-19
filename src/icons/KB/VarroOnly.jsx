import React from 'react';

export const iconData = {
  "id": "VarroOnly",
  "name": "VarroOnly",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.26 20.55 L 8.97 21.06 L 3.45 16.26 L 2.94 8.97 L 7.74 3.45 L 15.03 2.94 L 20.55 7.74 L 21.06 15.03 Z"
      }
    ]
  ]
};

export const VarroOnly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.26 20.55 L 8.97 21.06 L 3.45 16.26 L 2.94 8.97 L 7.74 3.45 L 15.03 2.94 L 20.55 7.74 L 21.06 15.03 Z" />
      {children}
    </svg>
  );
});

export default VarroOnly;
