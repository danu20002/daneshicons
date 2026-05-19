import React from 'react';

export const iconData = {
  "id": "VellutoKnit",
  "name": "VellutoKnit",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.69 15.04 A 4.21 4.62 120 0 1 5.35 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 18.64 6.50 L 19.26 15.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 6.71 C 2.02 18.14, 10.55 8.06, 21.74 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 17.93 18.55 Q 6.14 7.37 11.37 10.67"
      }
    ]
  ]
};

export const VellutoKnit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.69 15.04 A 4.21 4.62 120 0 1 5.35 16.78" />
      <path d="M 18.64 6.50 L 19.26 15.71" />
      <path d="M 4.52 6.71 C 2.02 18.14, 10.55 8.06, 21.74 18.45" />
      <path d="M 17.93 18.55 Q 6.14 7.37 11.37 10.67" />
      {children}
    </svg>
  );
});

export default VellutoKnit;
