import React from 'react';

export const iconData = {
  "id": "UltraList",
  "name": "UltraList",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.75 20.62 L 7.84 14.19 L 2.49 10.62 L 8.64 8.72 L 10.38 2.53 L 14.08 7.79 L 20.50 7.53 L 16.65 12.68 L 18.88 18.71 L 12.79 16.63 Z"
      }
    ]
  ]
};

export const UltraList = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.75 20.62 L 7.84 14.19 L 2.49 10.62 L 8.64 8.72 L 10.38 2.53 L 14.08 7.79 L 20.50 7.53 L 16.65 12.68 L 18.88 18.71 L 12.79 16.63 Z" />
      {children}
    </svg>
  );
});

export default UltraList;
