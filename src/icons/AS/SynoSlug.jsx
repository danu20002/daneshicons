import React from 'react';

export const iconData = {
  "id": "SynoSlug",
  "name": "SynoSlug",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.70 12.00 a 2.30 2.30 0 1 0 4.60 0 a 2.30 2.30 0 1 0 -4.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 12.00 a 4.19 4.19 0 1 0 8.37 0 a 4.19 4.19 0 1 0 -8.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 12.00 a 6.27 6.27 0 1 0 12.55 0 a 6.27 6.27 0 1 0 -12.55 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 12.00 a 8.25 8.25 0 1 0 16.49 0 a 8.25 8.25 0 1 0 -16.49 0"
      }
    ]
  ]
};

export const SynoSlug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.70 12.00 a 2.30 2.30 0 1 0 4.60 0 a 2.30 2.30 0 1 0 -4.60 0" />
      <path d="M 7.81 12.00 a 4.19 4.19 0 1 0 8.37 0 a 4.19 4.19 0 1 0 -8.37 0" />
      <path d="M 5.73 12.00 a 6.27 6.27 0 1 0 12.55 0 a 6.27 6.27 0 1 0 -12.55 0" stroke-dasharray="3 1" />
      <path d="M 3.75 12.00 a 8.25 8.25 0 1 0 16.49 0 a 8.25 8.25 0 1 0 -16.49 0" />
      {children}
    </svg>
  );
});

export default SynoSlug;
