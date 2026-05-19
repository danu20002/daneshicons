import React from 'react';

export const iconData = {
  "id": "UmidoJob",
  "name": "UmidoJob",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 12.00 a 8.10 8.10 0 1 0 16.19 0 a 8.10 8.10 0 1 0 -16.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 7.95 a 7.01 2.103554681482617 0 1 0 14.02 0 a 7.01 2.103554681482617 0 1 0 -14.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 12.00 a 8.10 2.428975723218173 0 1 0 16.19 0 a 8.10 2.428975723218173 0 1 0 -16.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 16.05 a 7.01 2.103554681482617 0 1 0 14.02 0 a 7.01 2.103554681482617 0 1 0 -14.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.90 A 2 2 0 0 0 12.00 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.90 A 2 2 0 0 1 12.00 20.10"
      }
    ]
  ]
};

export const UmidoJob = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 12.00 a 8.10 8.10 0 1 0 16.19 0 a 8.10 8.10 0 1 0 -16.19 0" />
      <path d="M 4.99 7.95 a 7.01 2.103554681482617 0 1 0 14.02 0 a 7.01 2.103554681482617 0 1 0 -14.02 0" />
      <path d="M 3.90 12.00 a 8.10 2.428975723218173 0 1 0 16.19 0 a 8.10 2.428975723218173 0 1 0 -16.19 0" />
      <path d="M 4.99 16.05 a 7.01 2.103554681482617 0 1 0 14.02 0 a 7.01 2.103554681482617 0 1 0 -14.02 0" />
      <path d="M 12.00 3.90 A 2 2 0 0 0 12.00 20.10" />
      <path d="M 12.00 3.90 A 2 2 0 0 1 12.00 20.10" />
      {children}
    </svg>
  );
});

export default UmidoJob;
