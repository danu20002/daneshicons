import React from 'react';

export const iconData = {
  "id": "BoreInvoke",
  "name": "BoreInvoke",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.09 5.44 L 11.16 8.71 L 15.79 2.45 L 14.87 10.18 L 22.26 12.66 L 14.62 14.17 L 14.54 21.96 L 10.75 15.16 L 3.32 17.50 L 8.61 11.78 Z"
      }
    ]
  ]
};

export const BoreInvoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.09 5.44 L 11.16 8.71 L 15.79 2.45 L 14.87 10.18 L 22.26 12.66 L 14.62 14.17 L 14.54 21.96 L 10.75 15.16 L 3.32 17.50 L 8.61 11.78 Z" />
      {children}
    </svg>
  );
});

export default BoreInvoke;
