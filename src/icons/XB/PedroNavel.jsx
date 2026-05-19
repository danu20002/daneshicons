import React from 'react';

export const iconData = {
  "id": "PedroNavel",
  "name": "PedroNavel",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 5.77 L 20.33 5.77 L 20.33 18.23 L 3.67 18.23 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 5.77 L 8.32 1.12 L 24.98 1.12 L 20.33 5.77"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 5.77 L 24.98 1.12 L 24.98 13.58 L 20.33 18.23"
      }
    ]
  ]
};

export const PedroNavel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 5.77 L 20.33 5.77 L 20.33 18.23 L 3.67 18.23 Z" />
      <path d="M 3.67 5.77 L 8.32 1.12 L 24.98 1.12 L 20.33 5.77" />
      <path d="M 20.33 5.77 L 24.98 1.12 L 24.98 13.58 L 20.33 18.23" />
      {children}
    </svg>
  );
});

export default PedroNavel;
