import React from 'react';

export const iconData = {
  "id": "PelvoRoot",
  "name": "PelvoRoot",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.58 8.62 L 10.83 6.49 L 20.14 4.67 L 17.36 13.74 L 14.28 22.72 L 7.81 15.77 Z"
      }
    ]
  ]
};

export const PelvoRoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.58 8.62 L 10.83 6.49 L 20.14 4.67 L 17.36 13.74 L 14.28 22.72 L 7.81 15.77 Z" />
      {children}
    </svg>
  );
});

export default PelvoRoot;
