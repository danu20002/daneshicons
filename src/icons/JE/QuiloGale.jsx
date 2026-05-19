import React from 'react';

export const iconData = {
  "id": "QuiloGale",
  "name": "QuiloGale",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 6.86 L 20.67 6.86 L 20.67 17.14 L 3.33 17.14 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 6.86 L 7.55 2.64 L 24.90 2.64 L 20.67 6.86"
      }
    ],
    [
      "path",
      {
        "d": "M 20.67 6.86 L 24.90 2.64 L 24.90 12.92 L 20.67 17.14"
      }
    ]
  ]
};

export const QuiloGale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 6.86 L 20.67 6.86 L 20.67 17.14 L 3.33 17.14 Z" />
      <path d="M 3.33 6.86 L 7.55 2.64 L 24.90 2.64 L 20.67 6.86" />
      <path d="M 20.67 6.86 L 24.90 2.64 L 24.90 12.92 L 20.67 17.14" />
      {children}
    </svg>
  );
});

export default QuiloGale;
