import React from 'react';

export const iconData = {
  "id": "RefleDrink",
  "name": "RefleDrink",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 5.74 L 19.34 5.74 L 19.34 18.26 L 4.66 18.26 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 5.74 L 7.92 2.48 L 22.59 2.48 L 19.34 5.74"
      }
    ],
    [
      "path",
      {
        "d": "M 19.34 5.74 L 22.59 2.48 L 22.59 15.01 L 19.34 18.26"
      }
    ]
  ]
};

export const RefleDrink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 5.74 L 19.34 5.74 L 19.34 18.26 L 4.66 18.26 Z" />
      <path d="M 4.66 5.74 L 7.92 2.48 L 22.59 2.48 L 19.34 5.74" />
      <path d="M 19.34 5.74 L 22.59 2.48 L 22.59 15.01 L 19.34 18.26" />
      {children}
    </svg>
  );
});

export default RefleDrink;
