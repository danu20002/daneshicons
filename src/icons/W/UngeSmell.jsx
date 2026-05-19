import React from 'react';

export const iconData = {
  "id": "UngeSmell",
  "name": "UngeSmell",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 7.27 L 16.74 11.82 L 21.27 16.03 L 15.10 15.60 L 14.62 21.76 L 11.12 16.66 L 6.01 20.14 L 7.81 14.22 L 1.90 12.39 L 7.65 10.11 L 5.40 4.34 L 10.77 7.42 L 13.87 2.07 L 14.82 8.18 Z"
      }
    ]
  ]
};

export const UngeSmell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 7.27 L 16.74 11.82 L 21.27 16.03 L 15.10 15.60 L 14.62 21.76 L 11.12 16.66 L 6.01 20.14 L 7.81 14.22 L 1.90 12.39 L 7.65 10.11 L 5.40 4.34 L 10.77 7.42 L 13.87 2.07 L 14.82 8.18 Z" />
      {children}
    </svg>
  );
});

export default UngeSmell;
