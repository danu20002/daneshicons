import React from 'react';

export const iconData = {
  "id": "ZarSubmit",
  "name": "ZarSubmit",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.87 12.00 a 2.13 2.13 0 1 0 4.26 0 a 2.13 2.13 0 1 0 -4.26 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 12.00 a 4.39 4.39 0 1 0 8.77 0 a 4.39 4.39 0 1 0 -8.77 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 12.00 a 6.28 6.28 0 1 0 12.57 0 a 6.28 6.28 0 1 0 -12.57 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 12.00 a 8.40 8.40 0 1 0 16.80 0 a 8.40 8.40 0 1 0 -16.80 0",
        "stroke-dasharray": "5 2"
      }
    ]
  ]
};

export const ZarSubmit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.87 12.00 a 2.13 2.13 0 1 0 4.26 0 a 2.13 2.13 0 1 0 -4.26 0" stroke-dasharray="4 2" />
      <path d="M 7.61 12.00 a 4.39 4.39 0 1 0 8.77 0 a 4.39 4.39 0 1 0 -8.77 0" stroke-dasharray="5 2" />
      <path d="M 5.72 12.00 a 6.28 6.28 0 1 0 12.57 0 a 6.28 6.28 0 1 0 -12.57 0" stroke-dasharray="4 1" />
      <path d="M 3.60 12.00 a 8.40 8.40 0 1 0 16.80 0 a 8.40 8.40 0 1 0 -16.80 0" stroke-dasharray="5 2" />
      {children}
    </svg>
  );
});

export default ZarSubmit;
