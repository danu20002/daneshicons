import React from 'react';

export const iconData = {
  "id": "SelectoHoney",
  "name": "SelectoHoney",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.85 9.45 L 13.85 9.45"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 8.86 L 15.13 12.32"
      }
    ],
    [
      "path",
      {
        "d": "M 15.29 11.41 L 13.29 14.88"
      }
    ],
    [
      "path",
      {
        "d": "M 14.15 14.55 L 10.15 14.55"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 15.14 L 8.87 11.68"
      }
    ],
    [
      "path",
      {
        "d": "M 8.71 12.59 L 10.71 9.12"
      }
    ]
  ]
};

export const SelectoHoney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.85 9.45 L 13.85 9.45" />
      <path d="M 13.13 8.86 L 15.13 12.32" />
      <path d="M 15.29 11.41 L 13.29 14.88" />
      <path d="M 14.15 14.55 L 10.15 14.55" />
      <path d="M 10.87 15.14 L 8.87 11.68" />
      <path d="M 8.71 12.59 L 10.71 9.12" />
      {children}
    </svg>
  );
});

export default SelectoHoney;
