import React from 'react';

export const iconData = {
  "id": "StridoWhale",
  "name": "StridoWhale",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 7.67 L 13.79 7.67"
      }
    ],
    [
      "path",
      {
        "d": "M 14.65 7.93 L 16.65 11.39"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 12.26 L 14.85 15.72"
      }
    ],
    [
      "path",
      {
        "d": "M 14.21 16.33 L 10.21 16.33"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 16.07 L 7.35 12.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 11.74 L 9.15 8.28"
      }
    ]
  ]
};

export const StridoWhale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 7.67 L 13.79 7.67" />
      <path d="M 14.65 7.93 L 16.65 11.39" />
      <path d="M 16.85 12.26 L 14.85 15.72" />
      <path d="M 14.21 16.33 L 10.21 16.33" />
      <path d="M 9.35 16.07 L 7.35 12.61" />
      <path d="M 7.15 11.74 L 9.15 8.28" />
      {children}
    </svg>
  );
});

export default StridoWhale;
