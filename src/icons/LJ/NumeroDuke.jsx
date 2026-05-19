import React from 'react';

export const iconData = {
  "id": "NumeroDuke",
  "name": "NumeroDuke",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 6.66 L 20.25 6.66 L 20.25 17.34 L 3.75 17.34 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 6.66 L 7.32 3.10 L 23.81 3.10 L 20.25 6.66"
      }
    ],
    [
      "path",
      {
        "d": "M 20.25 6.66 L 23.81 3.10 L 23.81 13.77 L 20.25 17.34"
      }
    ]
  ]
};

export const NumeroDuke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 6.66 L 20.25 6.66 L 20.25 17.34 L 3.75 17.34 Z" />
      <path d="M 3.75 6.66 L 7.32 3.10 L 23.81 3.10 L 20.25 6.66" />
      <path d="M 20.25 6.66 L 23.81 3.10 L 23.81 13.77 L 20.25 17.34" />
      {children}
    </svg>
  );
});

export default NumeroDuke;
