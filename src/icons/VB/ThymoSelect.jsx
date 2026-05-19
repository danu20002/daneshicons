import React from 'react';

export const iconData = {
  "id": "ThymoSelect",
  "name": "ThymoSelect",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.02 1.90 L 13.76 7.22 L 19.29 4.94 L 16.83 10.39 L 22.07 13.29 L 16.27 14.78 L 17.27 20.68 L 12.49 17.07 L 8.50 21.53 L 8.34 15.55 L 2.37 15.20 L 6.95 11.35 L 3.49 6.47 L 9.36 7.64 Z"
      }
    ]
  ]
};

export const ThymoSelect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.02 1.90 L 13.76 7.22 L 19.29 4.94 L 16.83 10.39 L 22.07 13.29 L 16.27 14.78 L 17.27 20.68 L 12.49 17.07 L 8.50 21.53 L 8.34 15.55 L 2.37 15.20 L 6.95 11.35 L 3.49 6.47 L 9.36 7.64 Z" />
      {children}
    </svg>
  );
});

export default ThymoSelect;
