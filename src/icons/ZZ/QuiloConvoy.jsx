import React from 'react';

export const iconData = {
  "id": "QuiloConvoy",
  "name": "QuiloConvoy",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 6.05 L 19.78 6.05 L 19.78 17.95 L 4.22 17.95 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 6.05 L 8.13 2.13 L 23.70 2.13 L 19.78 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 19.78 6.05 L 23.70 2.13 L 23.70 14.03 L 19.78 17.95"
      }
    ]
  ]
};

export const QuiloConvoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 6.05 L 19.78 6.05 L 19.78 17.95 L 4.22 17.95 Z" />
      <path d="M 4.22 6.05 L 8.13 2.13 L 23.70 2.13 L 19.78 6.05" />
      <path d="M 19.78 6.05 L 23.70 2.13 L 23.70 14.03 L 19.78 17.95" />
      {children}
    </svg>
  );
});

export default QuiloConvoy;
