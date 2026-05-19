import React from 'react';

export const iconData = {
  "id": "ViolaExport",
  "name": "ViolaExport",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 9.09 a 8.23 2.470423662182198 0 1 0 16.47 0 a 8.23 2.470423662182198 0 1 0 -16.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 14.91 a 8.23 2.470423662182198 0 1 0 16.47 0 a 8.23 2.470423662182198 0 1 0 -16.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 5.82 A 2 2 0 0 0 18.18 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 5.82 A 2 2 0 0 1 18.18 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.27 A 2 2 0 0 0 12.00 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.27 A 2 2 0 0 1 12.00 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 5.82 A 2 2 0 0 0 5.82 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 5.82 A 2 2 0 0 1 5.82 18.18"
      }
    ]
  ]
};

export const ViolaExport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0" />
      <path d="M 3.77 9.09 a 8.23 2.470423662182198 0 1 0 16.47 0 a 8.23 2.470423662182198 0 1 0 -16.47 0" />
      <path d="M 3.77 14.91 a 8.23 2.470423662182198 0 1 0 16.47 0 a 8.23 2.470423662182198 0 1 0 -16.47 0" />
      <path d="M 18.18 5.82 A 2 2 0 0 0 18.18 18.18" />
      <path d="M 18.18 5.82 A 2 2 0 0 1 18.18 18.18" />
      <path d="M 12.00 3.27 A 2 2 0 0 0 12.00 20.73" />
      <path d="M 12.00 3.27 A 2 2 0 0 1 12.00 20.73" />
      <path d="M 5.82 5.82 A 2 2 0 0 0 5.82 18.18" />
      <path d="M 5.82 5.82 A 2 2 0 0 1 5.82 18.18" />
      {children}
    </svg>
  );
});

export default ViolaExport;
