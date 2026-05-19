import React from 'react';

export const iconData = {
  "id": "PaliJunction",
  "name": "PaliJunction",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.43 8.21 A 4.27 6.61 21 0 1 9.77 12.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.35 21.71 Q 21.77 2.32 4.09 12.27"
      }
    ],
    [
      "path",
      {
        "d": "M 8.58 10.17 Q 16.00 12.19 13.00 7.49"
      }
    ]
  ]
};

export const PaliJunction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.43 8.21 A 4.27 6.61 21 0 1 9.77 12.77" />
      <path d="M 7.35 21.71 Q 21.77 2.32 4.09 12.27" />
      <path d="M 8.58 10.17 Q 16.00 12.19 13.00 7.49" />
      {children}
    </svg>
  );
});

export default PaliJunction;
