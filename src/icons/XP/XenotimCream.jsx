import React from 'react';

export const iconData = {
  "id": "XenotimCream",
  "name": "XenotimCream",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.64 7.06 L 21.36 21.84 L 12.28 8.23 L 5.66 13.18"
      }
    ],
    [
      "path",
      {
        "d": "M 10.75 20.09 C 18.39 14.38, 6.46 9.14, 6.75 5.35"
      }
    ],
    [
      "path",
      {
        "d": "M 9.51 2.22 A 3.74 2.96 176 0 1 7.02 18.62"
      }
    ],
    [
      "path",
      {
        "d": "M 16.99 3.67 L 17.91 20.98 L 6.80 5.76 L 13.72 13.61 L 17.31 4.55 L 16.60 13.24 L 13.32 13.87"
      }
    ],
    [
      "path",
      {
        "d": "M 19.64 12.93 L 16.98 7.71 L 17.36 7.72 L 8.03 7.79 L 2.40 2.64 L 21.95 7.35 L 20.51 15.55"
      }
    ],
    [
      "path",
      {
        "d": "M 9.97 13.91 L 5.94 18.68"
      }
    ]
  ]
};

export const XenotimCream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.64 7.06 L 21.36 21.84 L 12.28 8.23 L 5.66 13.18" />
      <path d="M 10.75 20.09 C 18.39 14.38, 6.46 9.14, 6.75 5.35" />
      <path d="M 9.51 2.22 A 3.74 2.96 176 0 1 7.02 18.62" />
      <path d="M 16.99 3.67 L 17.91 20.98 L 6.80 5.76 L 13.72 13.61 L 17.31 4.55 L 16.60 13.24 L 13.32 13.87" />
      <path d="M 19.64 12.93 L 16.98 7.71 L 17.36 7.72 L 8.03 7.79 L 2.40 2.64 L 21.95 7.35 L 20.51 15.55" />
      <path d="M 9.97 13.91 L 5.94 18.68" />
      {children}
    </svg>
  );
});

export default XenotimCream;
