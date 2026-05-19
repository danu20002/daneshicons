import React from 'react';

export const iconData = {
  "id": "SerenoOutput",
  "name": "SerenoOutput",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.90 19.23 L 13.50 15.74 L 11.27 22.69 L 10.01 15.50 L 3.19 18.09 L 8.02 12.63 L 1.74 8.91 L 9.03 9.28 L 8.02 2.06 L 12.27 7.98 L 17.29 2.69 L 15.31 9.71 L 22.58 10.33 L 15.86 13.16 Z"
      }
    ]
  ]
};

export const SerenoOutput = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.90 19.23 L 13.50 15.74 L 11.27 22.69 L 10.01 15.50 L 3.19 18.09 L 8.02 12.63 L 1.74 8.91 L 9.03 9.28 L 8.02 2.06 L 12.27 7.98 L 17.29 2.69 L 15.31 9.71 L 22.58 10.33 L 15.86 13.16 Z" />
      {children}
    </svg>
  );
});

export default SerenoOutput;
