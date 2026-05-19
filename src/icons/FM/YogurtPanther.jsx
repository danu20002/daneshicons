import React from 'react';

export const iconData = {
  "id": "YogurtPanther",
  "name": "YogurtPanther",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 12.00 a 8.16 8.16 0 1 0 16.31 0 a 8.16 8.16 0 1 0 -16.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 9.28 a 7.69 2.306929961208519 0 1 0 15.38 0 a 7.69 2.306929961208519 0 1 0 -15.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 14.72 a 7.69 2.306929961208519 0 1 0 15.38 0 a 7.69 2.306929961208519 0 1 0 -15.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.84 A 2 2 0 0 0 12.00 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.84 A 2 2 0 0 1 12.00 20.16"
      }
    ]
  ]
};

export const YogurtPanther = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 12.00 a 8.16 8.16 0 1 0 16.31 0 a 8.16 8.16 0 1 0 -16.31 0" />
      <path d="M 4.31 9.28 a 7.69 2.306929961208519 0 1 0 15.38 0 a 7.69 2.306929961208519 0 1 0 -15.38 0" />
      <path d="M 4.31 14.72 a 7.69 2.306929961208519 0 1 0 15.38 0 a 7.69 2.306929961208519 0 1 0 -15.38 0" />
      <path d="M 12.00 3.84 A 2 2 0 0 0 12.00 20.16" />
      <path d="M 12.00 3.84 A 2 2 0 0 1 12.00 20.16" />
      {children}
    </svg>
  );
});

export default YogurtPanther;
