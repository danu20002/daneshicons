import React from 'react';

export const iconData = {
  "id": "VerticeShark",
  "name": "VerticeShark",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.42 3.25 L 11.55 8.33 L 16.29 1.92 L 14.95 9.78 L 22.87 10.67 L 15.40 13.45 L 18.58 20.75 L 12.45 15.67 L 7.71 22.08 L 9.05 14.22 L 1.13 13.33 L 8.60 10.55 Z"
      }
    ]
  ]
};

export const VerticeShark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.42 3.25 L 11.55 8.33 L 16.29 1.92 L 14.95 9.78 L 22.87 10.67 L 15.40 13.45 L 18.58 20.75 L 12.45 15.67 L 7.71 22.08 L 9.05 14.22 L 1.13 13.33 L 8.60 10.55 Z" />
      {children}
    </svg>
  );
});

export default VerticeShark;
