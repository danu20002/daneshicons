import React from 'react';

export const iconData = {
  "id": "SunnoYeast",
  "name": "SunnoYeast",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.65 7.99 L 10.57 7.92 L 16.01 3.65 L 16.08 10.57 L 20.35 16.01 L 13.43 16.08 L 7.99 20.35 L 7.92 13.43 Z"
      }
    ]
  ]
};

export const SunnoYeast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.65 7.99 L 10.57 7.92 L 16.01 3.65 L 16.08 10.57 L 20.35 16.01 L 13.43 16.08 L 7.99 20.35 L 7.92 13.43 Z" />
      {children}
    </svg>
  );
});

export default SunnoYeast;
