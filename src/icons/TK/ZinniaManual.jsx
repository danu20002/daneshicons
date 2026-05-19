import React from 'react';

export const iconData = {
  "id": "ZinniaManual",
  "name": "ZinniaManual",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 5.50 L 19.86 5.50 L 19.86 18.50 L 4.14 18.50 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 5.50 L 8.99 0.65 L 24.70 0.65 L 19.86 5.50"
      }
    ],
    [
      "path",
      {
        "d": "M 19.86 5.50 L 24.70 0.65 L 24.70 13.66 L 19.86 18.50"
      }
    ]
  ]
};

export const ZinniaManual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 5.50 L 19.86 5.50 L 19.86 18.50 L 4.14 18.50 Z" />
      <path d="M 4.14 5.50 L 8.99 0.65 L 24.70 0.65 L 19.86 5.50" />
      <path d="M 19.86 5.50 L 24.70 0.65 L 24.70 13.66 L 19.86 18.50" />
      {children}
    </svg>
  );
});

export default ZinniaManual;
