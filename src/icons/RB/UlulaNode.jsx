import React from 'react';

export const iconData = {
  "id": "UlulaNode",
  "name": "UlulaNode",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.07 13.65 L 13.23 21.14 L 3.69 16.00 L 5.63 5.33 L 16.37 3.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.69 14.20 L 11.66 18.09 L 6.10 13.56 L 8.69 6.87 L 15.85 7.27 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.36 14.01 L 10.82 14.86 L 8.91 11.76 L 11.27 8.99 L 14.64 10.38 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.16 12.31 L 11.76 12.25 L 11.69 11.84 L 12.05 11.66 L 12.34 11.94 Z"
      }
    ]
  ]
};

export const UlulaNode = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.07 13.65 L 13.23 21.14 L 3.69 16.00 L 5.63 5.33 L 16.37 3.88 Z" />
      <path d="M 17.69 14.20 L 11.66 18.09 L 6.10 13.56 L 8.69 6.87 L 15.85 7.27 Z" />
      <path d="M 14.36 14.01 L 10.82 14.86 L 8.91 11.76 L 11.27 8.99 L 14.64 10.38 Z" />
      <path d="M 12.16 12.31 L 11.76 12.25 L 11.69 11.84 L 12.05 11.66 L 12.34 11.94 Z" />
      {children}
    </svg>
  );
});

export default UlulaNode;
