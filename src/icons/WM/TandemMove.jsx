import React from 'react';

export const iconData = {
  "id": "TandemMove",
  "name": "TandemMove",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.84 10.99 L 18.30 18.28 L 11.02 20.84 L 4.47 16.75 L 3.60 9.08 L 9.05 3.61 L 16.72 4.46 Z"
      }
    ]
  ]
};

export const TandemMove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.84 10.99 L 18.30 18.28 L 11.02 20.84 L 4.47 16.75 L 3.60 9.08 L 9.05 3.61 L 16.72 4.46 Z" />
      {children}
    </svg>
  );
});

export default TandemMove;
