import React from 'react';

export const iconData = {
  "id": "SoroMeal",
  "name": "SoroMeal",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.27 19.10 L 8.08 13.51 L 2.99 10.59 L 8.73 9.36 L 8.72 3.49 L 12.65 7.85 L 17.73 4.90 L 15.92 10.49 L 21.01 13.41 L 15.27 14.64 L 15.28 20.51 L 11.35 16.15 Z"
      }
    ]
  ]
};

export const SoroMeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.27 19.10 L 8.08 13.51 L 2.99 10.59 L 8.73 9.36 L 8.72 3.49 L 12.65 7.85 L 17.73 4.90 L 15.92 10.49 L 21.01 13.41 L 15.27 14.64 L 15.28 20.51 L 11.35 16.15 Z" />
      {children}
    </svg>
  );
});

export default SoroMeal;
