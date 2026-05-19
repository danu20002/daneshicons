import React from 'react';

export const iconData = {
  "id": "UmidoStrong",
  "name": "UmidoStrong",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 12.00 a 3.86 3.86 0 1 0 7.71 0 a 3.86 3.86 0 1 0 -7.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 12.00 a 5.66 5.66 0 1 0 11.31 0 a 5.66 5.66 0 1 0 -11.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 12.00 a 7.09 7.09 0 1 0 14.19 0 a 7.09 7.09 0 1 0 -14.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0"
      }
    ]
  ]
};

export const UmidoStrong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0" stroke-dasharray="4 2" />
      <path d="M 8.14 12.00 a 3.86 3.86 0 1 0 7.71 0 a 3.86 3.86 0 1 0 -7.71 0" />
      <path d="M 6.34 12.00 a 5.66 5.66 0 1 0 11.31 0 a 5.66 5.66 0 1 0 -11.31 0" />
      <path d="M 4.91 12.00 a 7.09 7.09 0 1 0 14.19 0 a 7.09 7.09 0 1 0 -14.19 0" />
      <path d="M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0" />
      {children}
    </svg>
  );
});

export default UmidoStrong;
