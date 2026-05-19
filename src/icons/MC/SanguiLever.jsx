import React from 'react';

export const iconData = {
  "id": "SanguiLever",
  "name": "SanguiLever",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.10 6.01 L 20.90 6.01 L 20.90 17.99 L 3.10 17.99 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.10 6.01 L 6.61 2.51 L 24.40 2.51 L 20.90 6.01"
      }
    ],
    [
      "path",
      {
        "d": "M 20.90 6.01 L 24.40 2.51 L 24.40 14.48 L 20.90 17.99"
      }
    ]
  ]
};

export const SanguiLever = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.10 6.01 L 20.90 6.01 L 20.90 17.99 L 3.10 17.99 Z" />
      <path d="M 3.10 6.01 L 6.61 2.51 L 24.40 2.51 L 20.90 6.01" />
      <path d="M 20.90 6.01 L 24.40 2.51 L 24.40 14.48 L 20.90 17.99" />
      {children}
    </svg>
  );
});

export default SanguiLever;
