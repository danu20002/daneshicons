import React from 'react';

export const iconData = {
  "id": "UndatoHeap",
  "name": "UndatoHeap",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 12.00 a 2.12 2.12 0 1 0 4.25 0 a 2.12 2.12 0 1 0 -4.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 12.00 a 4.80 4.80 0 1 0 9.61 0 a 4.80 4.80 0 1 0 -9.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.57 12.00 a 7.43 7.43 0 1 0 14.86 0 a 7.43 7.43 0 1 0 -14.86 0",
        "stroke-dasharray": "4 3"
      }
    ]
  ]
};

export const UndatoHeap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 12.00 a 2.12 2.12 0 1 0 4.25 0 a 2.12 2.12 0 1 0 -4.25 0" />
      <path d="M 7.20 12.00 a 4.80 4.80 0 1 0 9.61 0 a 4.80 4.80 0 1 0 -9.61 0" />
      <path d="M 4.57 12.00 a 7.43 7.43 0 1 0 14.86 0 a 7.43 7.43 0 1 0 -14.86 0" stroke-dasharray="4 3" />
      {children}
    </svg>
  );
});

export default UndatoHeap;
