import React from 'react';

export const iconData = {
  "id": "UrpinoStart",
  "name": "UrpinoStart",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 12.00 a 2.41 2.41 0 1 0 4.82 0 a 2.41 2.41 0 1 0 -4.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 12.00 a 4.05 4.05 0 1 0 8.09 0 a 4.05 4.05 0 1 0 -8.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 0 12.13 0 a 6.07 6.07 0 1 0 -12.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 12.00 a 8.30 8.30 0 1 0 16.61 0 a 8.30 8.30 0 1 0 -16.61 0"
      }
    ]
  ]
};

export const UrpinoStart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 12.00 a 2.41 2.41 0 1 0 4.82 0 a 2.41 2.41 0 1 0 -4.82 0" />
      <path d="M 7.95 12.00 a 4.05 4.05 0 1 0 8.09 0 a 4.05 4.05 0 1 0 -8.09 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 0 12.13 0 a 6.07 6.07 0 1 0 -12.13 0" />
      <path d="M 3.70 12.00 a 8.30 8.30 0 1 0 16.61 0 a 8.30 8.30 0 1 0 -16.61 0" />
      {children}
    </svg>
  );
});

export default UrpinoStart;
