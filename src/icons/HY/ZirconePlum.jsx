import React from 'react';

export const iconData = {
  "id": "ZirconePlum",
  "name": "ZirconePlum",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.03 4.31 L 17.71 12.32 L 16.15 20.20 L 8.87 16.79 L 2.83 11.49 L 9.42 6.90 Z"
      }
    ]
  ]
};

export const ZirconePlum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.03 4.31 L 17.71 12.32 L 16.15 20.20 L 8.87 16.79 L 2.83 11.49 L 9.42 6.90 Z" />
      {children}
    </svg>
  );
});

export default ZirconePlum;
