import React from 'react';

export const iconData = {
  "id": "TitilloCheckout",
  "name": "TitilloCheckout",
  "category": "LI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.09 12.00 a 8.91 8.91 0 1 0 17.82 0 a 8.91 8.91 0 1 0 -17.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 9.03 a 8.40 2.5202547102841635 0 1 0 16.80 0 a 8.40 2.5202547102841635 0 1 0 -16.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 14.97 a 8.40 2.5202547102841635 0 1 0 16.80 0 a 8.40 2.5202547102841635 0 1 0 -16.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.30 5.70 A 2 2 0 0 0 18.30 18.30"
      }
    ],
    [
      "path",
      {
        "d": "M 18.30 5.70 A 2 2 0 0 1 18.30 18.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.09 A 2 2 0 0 0 12.00 20.91"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.09 A 2 2 0 0 1 12.00 20.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 5.70 A 2 2 0 0 0 5.70 18.30"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 5.70 A 2 2 0 0 1 5.70 18.30"
      }
    ]
  ]
};

export const TitilloCheckout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.09 12.00 a 8.91 8.91 0 1 0 17.82 0 a 8.91 8.91 0 1 0 -17.82 0" />
      <path d="M 3.60 9.03 a 8.40 2.5202547102841635 0 1 0 16.80 0 a 8.40 2.5202547102841635 0 1 0 -16.80 0" />
      <path d="M 3.60 14.97 a 8.40 2.5202547102841635 0 1 0 16.80 0 a 8.40 2.5202547102841635 0 1 0 -16.80 0" />
      <path d="M 18.30 5.70 A 2 2 0 0 0 18.30 18.30" />
      <path d="M 18.30 5.70 A 2 2 0 0 1 18.30 18.30" />
      <path d="M 12.00 3.09 A 2 2 0 0 0 12.00 20.91" />
      <path d="M 12.00 3.09 A 2 2 0 0 1 12.00 20.91" />
      <path d="M 5.70 5.70 A 2 2 0 0 0 5.70 18.30" />
      <path d="M 5.70 5.70 A 2 2 0 0 1 5.70 18.30" />
      {children}
    </svg>
  );
});

export default TitilloCheckout;
