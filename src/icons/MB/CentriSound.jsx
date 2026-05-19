import React from 'react';

export const iconData = {
  "id": "CentriSound",
  "name": "CentriSound",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.65 12.00 a 9.35 9.35 0 1 0 18.71 0 a 9.35 9.35 0 1 0 -18.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 12.00 a 9.35 2.8062431237194687 0 1 0 18.71 0 a 9.35 2.8062431237194687 0 1 0 -18.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 3.90 A 2 2 0 0 0 16.68 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 3.90 A 2 2 0 0 1 16.68 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 3.90 A 2 2 0 0 0 7.32 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 3.90 A 2 2 0 0 1 7.32 20.10"
      }
    ]
  ]
};

export const CentriSound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.65 12.00 a 9.35 9.35 0 1 0 18.71 0 a 9.35 9.35 0 1 0 -18.71 0" />
      <path d="M 2.65 12.00 a 9.35 2.8062431237194687 0 1 0 18.71 0 a 9.35 2.8062431237194687 0 1 0 -18.71 0" />
      <path d="M 16.68 3.90 A 2 2 0 0 0 16.68 20.10" />
      <path d="M 16.68 3.90 A 2 2 0 0 1 16.68 20.10" />
      <path d="M 7.32 3.90 A 2 2 0 0 0 7.32 20.10" />
      <path d="M 7.32 3.90 A 2 2 0 0 1 7.32 20.10" />
      {children}
    </svg>
  );
});

export default CentriSound;
