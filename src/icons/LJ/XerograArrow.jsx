import React from 'react';

export const iconData = {
  "id": "XerograArrow",
  "name": "XerograArrow",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 5.10 L 20.63 5.10 L 20.63 18.90 L 3.37 18.90 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 5.10 L 6.77 1.70 L 24.03 1.70 L 20.63 5.10"
      }
    ],
    [
      "path",
      {
        "d": "M 20.63 5.10 L 24.03 1.70 L 24.03 15.50 L 20.63 18.90"
      }
    ]
  ]
};

export const XerograArrow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 5.10 L 20.63 5.10 L 20.63 18.90 L 3.37 18.90 Z" />
      <path d="M 3.37 5.10 L 6.77 1.70 L 24.03 1.70 L 20.63 5.10" />
      <path d="M 20.63 5.10 L 24.03 1.70 L 24.03 15.50 L 20.63 18.90" />
      {children}
    </svg>
  );
});

export default XerograArrow;
