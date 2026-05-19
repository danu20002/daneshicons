import React from 'react';

export const iconData = {
  "id": "ZoppicoGirl",
  "name": "ZoppicoGirl",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.63 0 a 2.32 2.32 0 1 0 -4.63 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 12.00 a 3.83 3.83 0 1 0 7.65 0 a 3.83 3.83 0 1 0 -7.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.74 12.00 a 5.26 5.26 0 1 0 10.53 0 a 5.26 5.26 0 1 0 -10.53 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 12.00 a 6.95 6.95 0 1 0 13.90 0 a 6.95 6.95 0 1 0 -13.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0"
      }
    ]
  ]
};

export const ZoppicoGirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.63 0 a 2.32 2.32 0 1 0 -4.63 0" stroke-dasharray="5 3" />
      <path d="M 8.17 12.00 a 3.83 3.83 0 1 0 7.65 0 a 3.83 3.83 0 1 0 -7.65 0" />
      <path d="M 6.74 12.00 a 5.26 5.26 0 1 0 10.53 0 a 5.26 5.26 0 1 0 -10.53 0" stroke-dasharray="5 3" />
      <path d="M 5.05 12.00 a 6.95 6.95 0 1 0 13.90 0 a 6.95 6.95 0 1 0 -13.90 0" />
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0" />
      {children}
    </svg>
  );
});

export default ZoppicoGirl;
