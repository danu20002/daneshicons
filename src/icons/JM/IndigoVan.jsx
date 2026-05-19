import React from 'react';

export const iconData = {
  "id": "IndigoVan",
  "name": "IndigoVan",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 12.00 a 3.87 3.87 0 1 0 7.74 0 a 3.87 3.87 0 1 0 -7.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.74 12.00 a 5.26 5.26 0 1 0 10.52 0 a 5.26 5.26 0 1 0 -10.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 12.00 a 7.07 7.07 0 1 0 14.13 0 a 7.07 7.07 0 1 0 -14.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0"
      }
    ]
  ]
};

export const IndigoVan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0" />
      <path d="M 8.13 12.00 a 3.87 3.87 0 1 0 7.74 0 a 3.87 3.87 0 1 0 -7.74 0" />
      <path d="M 6.74 12.00 a 5.26 5.26 0 1 0 10.52 0 a 5.26 5.26 0 1 0 -10.52 0" />
      <path d="M 4.93 12.00 a 7.07 7.07 0 1 0 14.13 0 a 7.07 7.07 0 1 0 -14.13 0" />
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0" />
      {children}
    </svg>
  );
});

export default IndigoVan;
