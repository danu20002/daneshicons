import React from 'react';

export const iconData = {
  "id": "PectoHinge",
  "name": "PectoHinge",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.98 4.14 C 4.86 6.34, 10.93 13.50, 18.74 16.44"
      }
    ],
    [
      "path",
      {
        "d": "M 9.32 4.67 C 10.18 7.13, 7.98 16.31, 21.20 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 3.36 C 6.65 18.63, 7.11 8.96, 14.67 16.62"
      }
    ]
  ]
};

export const PectoHinge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.98 4.14 C 4.86 6.34, 10.93 13.50, 18.74 16.44" />
      <path d="M 9.32 4.67 C 10.18 7.13, 7.98 16.31, 21.20 19.30" />
      <path d="M 3.85 3.36 C 6.65 18.63, 7.11 8.96, 14.67 16.62" />
      {children}
    </svg>
  );
});

export default PectoHinge;
