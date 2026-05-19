import React from 'react';

export const iconData = {
  "id": "VistosoThicket",
  "name": "VistosoThicket",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.13 16.79 L 15.08 16.87 L 12.42 22.30 L 9.32 17.10 L 3.29 17.51 L 6.25 12.23 L 2.87 7.21 L 8.92 7.13 L 11.58 1.70 L 14.68 6.90 L 20.71 6.49 L 17.75 11.77 Z"
      }
    ]
  ]
};

export const VistosoThicket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.13 16.79 L 15.08 16.87 L 12.42 22.30 L 9.32 17.10 L 3.29 17.51 L 6.25 12.23 L 2.87 7.21 L 8.92 7.13 L 11.58 1.70 L 14.68 6.90 L 20.71 6.49 L 17.75 11.77 Z" />
      {children}
    </svg>
  );
});

export default VistosoThicket;
