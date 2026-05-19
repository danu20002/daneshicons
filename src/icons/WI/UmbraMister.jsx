import React from 'react';

export const iconData = {
  "id": "UmbraMister",
  "name": "UmbraMister",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 6.10 L 20.73 6.10 L 20.73 17.90 L 3.27 17.90 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 6.10 L 6.50 2.87 L 23.96 2.87 L 20.73 6.10"
      }
    ],
    [
      "path",
      {
        "d": "M 20.73 6.10 L 23.96 2.87 L 23.96 14.67 L 20.73 17.90"
      }
    ]
  ]
};

export const UmbraMister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 6.10 L 20.73 6.10 L 20.73 17.90 L 3.27 17.90 Z" />
      <path d="M 3.27 6.10 L 6.50 2.87 L 23.96 2.87 L 20.73 6.10" />
      <path d="M 20.73 6.10 L 23.96 2.87 L 23.96 14.67 L 20.73 17.90" />
      {children}
    </svg>
  );
});

export default UmbraMister;
