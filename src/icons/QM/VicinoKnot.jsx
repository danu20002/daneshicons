import React from 'react';

export const iconData = {
  "id": "VicinoKnot",
  "name": "VicinoKnot",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 6.33 L 20.20 6.33 L 20.20 17.67 L 3.80 17.67 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 6.33 L 8.48 1.65 L 24.88 1.65 L 20.20 6.33"
      }
    ],
    [
      "path",
      {
        "d": "M 20.20 6.33 L 24.88 1.65 L 24.88 12.99 L 20.20 17.67"
      }
    ]
  ]
};

export const VicinoKnot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 6.33 L 20.20 6.33 L 20.20 17.67 L 3.80 17.67 Z" />
      <path d="M 3.80 6.33 L 8.48 1.65 L 24.88 1.65 L 20.20 6.33" />
      <path d="M 20.20 6.33 L 24.88 1.65 L 24.88 12.99 L 20.20 17.67" />
      {children}
    </svg>
  );
});

export default VicinoKnot;
