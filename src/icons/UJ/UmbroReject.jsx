import React from 'react';

export const iconData = {
  "id": "UmbroReject",
  "name": "UmbroReject",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.25 20.81 L 12.06 16.50 L 6.99 20.96 L 8.14 14.30 L 1.74 12.14 L 8.08 9.81 L 6.75 3.19 L 11.94 7.50 L 17.01 3.04 L 15.86 9.70 L 22.26 11.86 L 15.92 14.19 Z"
      }
    ]
  ]
};

export const UmbroReject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.25 20.81 L 12.06 16.50 L 6.99 20.96 L 8.14 14.30 L 1.74 12.14 L 8.08 9.81 L 6.75 3.19 L 11.94 7.50 L 17.01 3.04 L 15.86 9.70 L 22.26 11.86 L 15.92 14.19 Z" />
      {children}
    </svg>
  );
});

export default UmbroReject;
