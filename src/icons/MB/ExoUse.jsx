import React from 'react';

export const iconData = {
  "id": "ExoUse",
  "name": "ExoUse",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 12.00 a 8.97 8.97 0 1 0 17.94 0 a 8.97 8.97 0 1 0 -17.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 9.01 a 8.46 2.5368009960027194 0 1 0 16.91 0 a 8.46 2.5368009960027194 0 1 0 -16.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 14.99 a 8.46 2.5368009960027194 0 1 0 16.91 0 a 8.46 2.5368009960027194 0 1 0 -16.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.34 5.66 A 2 2 0 0 0 18.34 18.34"
      }
    ],
    [
      "path",
      {
        "d": "M 18.34 5.66 A 2 2 0 0 1 18.34 18.34"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.03 A 2 2 0 0 0 12.00 20.97"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.03 A 2 2 0 0 1 12.00 20.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 5.66 A 2 2 0 0 0 5.66 18.34"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 5.66 A 2 2 0 0 1 5.66 18.34"
      }
    ]
  ]
};

export const ExoUse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 12.00 a 8.97 8.97 0 1 0 17.94 0 a 8.97 8.97 0 1 0 -17.94 0" />
      <path d="M 3.54 9.01 a 8.46 2.5368009960027194 0 1 0 16.91 0 a 8.46 2.5368009960027194 0 1 0 -16.91 0" />
      <path d="M 3.54 14.99 a 8.46 2.5368009960027194 0 1 0 16.91 0 a 8.46 2.5368009960027194 0 1 0 -16.91 0" />
      <path d="M 18.34 5.66 A 2 2 0 0 0 18.34 18.34" />
      <path d="M 18.34 5.66 A 2 2 0 0 1 18.34 18.34" />
      <path d="M 12.00 3.03 A 2 2 0 0 0 12.00 20.97" />
      <path d="M 12.00 3.03 A 2 2 0 0 1 12.00 20.97" />
      <path d="M 5.66 5.66 A 2 2 0 0 0 5.66 18.34" />
      <path d="M 5.66 5.66 A 2 2 0 0 1 5.66 18.34" />
      {children}
    </svg>
  );
});

export default ExoUse;
