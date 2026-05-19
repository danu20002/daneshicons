import React from 'react';

export const iconData = {
  "id": "SelectoShall",
  "name": "SelectoShall",
  "category": "XJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 12.00 a 6.10 6.10 0 1 0 12.19 0 a 6.10 6.10 0 1 0 -12.19 0"
      }
    ]
  ]
};

export const SelectoShall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0" />
      <path d="M 5.90 12.00 a 6.10 6.10 0 1 0 12.19 0 a 6.10 6.10 0 1 0 -12.19 0" />
      {children}
    </svg>
  );
});

export default SelectoShall;
