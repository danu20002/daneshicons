import React from 'react';

export const iconData = {
  "id": "VaranoKettle",
  "name": "VaranoKettle",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.60 20.12 L 2.66 11.92 L 16.73 3.95 Z"
      }
    ]
  ]
};

export const VaranoKettle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.60 20.12 L 2.66 11.92 L 16.73 3.95 Z" />
      {children}
    </svg>
  );
});

export default VaranoKettle;
