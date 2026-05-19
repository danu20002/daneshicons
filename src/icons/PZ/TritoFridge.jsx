import React from 'react';

export const iconData = {
  "id": "TritoFridge",
  "name": "TritoFridge",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.13 16.04 L 13.83 14.50 L 13.07 21.92 L 10.75 14.84 L 3.94 17.89 L 8.92 12.33 L 2.87 7.96 L 10.17 9.50 L 10.93 2.08 L 13.25 9.16 L 20.06 6.11 L 15.08 11.67 Z"
      }
    ]
  ]
};

export const TritoFridge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.13 16.04 L 13.83 14.50 L 13.07 21.92 L 10.75 14.84 L 3.94 17.89 L 8.92 12.33 L 2.87 7.96 L 10.17 9.50 L 10.93 2.08 L 13.25 9.16 L 20.06 6.11 L 15.08 11.67 Z" />
      {children}
    </svg>
  );
});

export default TritoFridge;
