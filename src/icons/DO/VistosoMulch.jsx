import React from 'react';

export const iconData = {
  "id": "VistosoMulch",
  "name": "VistosoMulch",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.09 17.50 L 13.34 15.71 L 9.27 21.39 L 8.89 14.42 L 2.23 12.31 L 8.74 9.78 L 8.69 2.80 L 13.10 8.21 L 19.73 6.01 L 15.94 11.88 Z"
      }
    ]
  ]
};

export const VistosoMulch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.09 17.50 L 13.34 15.71 L 9.27 21.39 L 8.89 14.42 L 2.23 12.31 L 8.74 9.78 L 8.69 2.80 L 13.10 8.21 L 19.73 6.01 L 15.94 11.88 Z" />
      {children}
    </svg>
  );
});

export default VistosoMulch;
