import React from 'react';

export const iconData = {
  "id": "TernoCrawl",
  "name": "TernoCrawl",
  "category": "XJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 12.00 a 4.06 4.06 0 1 0 8.13 0 a 4.06 4.06 0 1 0 -8.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 12.00 a 5.68 5.68 0 1 0 11.35 0 a 5.68 5.68 0 1 0 -11.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 12.00 a 7.17 7.17 0 1 0 14.35 0 a 7.17 7.17 0 1 0 -14.35 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 12.00 a 8.59 8.59 0 1 0 17.18 0 a 8.59 8.59 0 1 0 -17.18 0"
      }
    ]
  ]
};

export const TernoCrawl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0" />
      <path d="M 7.94 12.00 a 4.06 4.06 0 1 0 8.13 0 a 4.06 4.06 0 1 0 -8.13 0" />
      <path d="M 6.32 12.00 a 5.68 5.68 0 1 0 11.35 0 a 5.68 5.68 0 1 0 -11.35 0" />
      <path d="M 4.83 12.00 a 7.17 7.17 0 1 0 14.35 0 a 7.17 7.17 0 1 0 -14.35 0" stroke-dasharray="4 2" />
      <path d="M 3.41 12.00 a 8.59 8.59 0 1 0 17.18 0 a 8.59 8.59 0 1 0 -17.18 0" />
      {children}
    </svg>
  );
});

export default TernoCrawl;
