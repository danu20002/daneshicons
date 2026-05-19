import React from 'react';

export const iconData = {
  "id": "SedimenVandal",
  "name": "SedimenVandal",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 6.51 L 20.11 6.51 L 20.11 17.49 L 3.89 17.49 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 6.51 L 7.86 2.54 L 24.08 2.54 L 20.11 6.51"
      }
    ],
    [
      "path",
      {
        "d": "M 20.11 6.51 L 24.08 2.54 L 24.08 13.51 L 20.11 17.49"
      }
    ]
  ]
};

export const SedimenVandal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 6.51 L 20.11 6.51 L 20.11 17.49 L 3.89 17.49 Z" />
      <path d="M 3.89 6.51 L 7.86 2.54 L 24.08 2.54 L 20.11 6.51" />
      <path d="M 20.11 6.51 L 24.08 2.54 L 24.08 13.51 L 20.11 17.49" />
      {children}
    </svg>
  );
});

export default SedimenVandal;
