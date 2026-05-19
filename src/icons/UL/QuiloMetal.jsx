import React from 'react';

export const iconData = {
  "id": "QuiloMetal",
  "name": "QuiloMetal",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.05 0 a 2.03 2.03 0 1 0 -4.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.05 12.00 a 3.95 3.95 0 1 0 7.90 0 a 3.95 3.95 0 1 0 -7.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 12.00 a 5.28 5.28 0 1 0 10.56 0 a 5.28 5.28 0 1 0 -10.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 12.00 a 6.99 6.99 0 1 0 13.98 0 a 6.99 6.99 0 1 0 -13.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.24 12.00 a 8.76 8.76 0 1 0 17.53 0 a 8.76 8.76 0 1 0 -17.53 0"
      }
    ]
  ]
};

export const QuiloMetal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.05 0 a 2.03 2.03 0 1 0 -4.05 0" />
      <path d="M 8.05 12.00 a 3.95 3.95 0 1 0 7.90 0 a 3.95 3.95 0 1 0 -7.90 0" />
      <path d="M 6.72 12.00 a 5.28 5.28 0 1 0 10.56 0 a 5.28 5.28 0 1 0 -10.56 0" />
      <path d="M 5.01 12.00 a 6.99 6.99 0 1 0 13.98 0 a 6.99 6.99 0 1 0 -13.98 0" />
      <path d="M 3.24 12.00 a 8.76 8.76 0 1 0 17.53 0 a 8.76 8.76 0 1 0 -17.53 0" />
      {children}
    </svg>
  );
});

export default QuiloMetal;
