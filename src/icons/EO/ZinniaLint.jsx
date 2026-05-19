import React from 'react';

export const iconData = {
  "id": "ZinniaLint",
  "name": "ZinniaLint",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.73 11.19 L 11.73 11.19"
      }
    ],
    [
      "path",
      {
        "d": "M 10.57 7.90 L 12.57 11.36"
      }
    ],
    [
      "path",
      {
        "d": "M 14.84 8.71 L 12.84 12.17"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 12.81 L 12.27 12.81"
      }
    ],
    [
      "path",
      {
        "d": "M 13.43 16.10 L 11.43 12.64"
      }
    ],
    [
      "path",
      {
        "d": "M 9.16 15.29 L 11.16 11.83"
      }
    ]
  ]
};

export const ZinniaLint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.73 11.19 L 11.73 11.19" />
      <path d="M 10.57 7.90 L 12.57 11.36" />
      <path d="M 14.84 8.71 L 12.84 12.17" />
      <path d="M 16.27 12.81 L 12.27 12.81" />
      <path d="M 13.43 16.10 L 11.43 12.64" />
      <path d="M 9.16 15.29 L 11.16 11.83" />
      {children}
    </svg>
  );
});

export default ZinniaLint;
