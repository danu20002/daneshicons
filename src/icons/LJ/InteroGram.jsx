import React from 'react';

export const iconData = {
  "id": "InteroGram",
  "name": "InteroGram",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 6.84 L 20.17 6.84 L 20.17 17.16 L 3.83 17.16 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 6.84 L 7.78 2.89 L 24.12 2.89 L 20.17 6.84"
      }
    ],
    [
      "path",
      {
        "d": "M 20.17 6.84 L 24.12 2.89 L 24.12 13.21 L 20.17 17.16"
      }
    ]
  ]
};

export const InteroGram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 6.84 L 20.17 6.84 L 20.17 17.16 L 3.83 17.16 Z" />
      <path d="M 3.83 6.84 L 7.78 2.89 L 24.12 2.89 L 20.17 6.84" />
      <path d="M 20.17 6.84 L 24.12 2.89 L 24.12 13.21 L 20.17 17.16" />
      {children}
    </svg>
  );
});

export default InteroGram;
