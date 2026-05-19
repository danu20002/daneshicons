import React from 'react';

export const iconData = {
  "id": "TessoDime",
  "name": "TessoDime",
  "category": "UX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.81 0 a 8.41 8.41 0 1 0 -16.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 12.00 a 5.80 5.80 0 1 1 11.59 0 a 5.80 5.80 0 1 1 -11.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.91 12.00 L 21.91 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.65 16.27 L 20.33 17.36"
      }
    ],
    [
      "path",
      {
        "d": "M 15.28 19.19 L 16.12 21.01"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 19.83 L 10.59 21.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 17.98 L 5.51 19.49"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 14.23 L 2.49 14.79"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 9.77 L 2.49 9.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 6.02 L 5.51 4.51"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 4.17 L 10.59 2.19"
      }
    ],
    [
      "path",
      {
        "d": "M 15.28 4.81 L 16.12 2.99"
      }
    ],
    [
      "path",
      {
        "d": "M 18.65 7.73 L 20.33 6.64"
      }
    ]
  ]
};

export const TessoDime = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.81 0 a 8.41 8.41 0 1 0 -16.81 0" />
      <path d="M 6.20 12.00 a 5.80 5.80 0 1 1 11.59 0 a 5.80 5.80 0 1 1 -11.59 0" />
      <path d="M 19.91 12.00 L 21.91 12.00" />
      <path d="M 18.65 16.27 L 20.33 17.36" />
      <path d="M 15.28 19.19 L 16.12 21.01" />
      <path d="M 10.87 19.83 L 10.59 21.81" />
      <path d="M 6.82 17.98 L 5.51 19.49" />
      <path d="M 4.41 14.23 L 2.49 14.79" />
      <path d="M 4.41 9.77 L 2.49 9.21" />
      <path d="M 6.82 6.02 L 5.51 4.51" />
      <path d="M 10.87 4.17 L 10.59 2.19" />
      <path d="M 15.28 4.81 L 16.12 2.99" />
      <path d="M 18.65 7.73 L 20.33 6.64" />
      {children}
    </svg>
  );
});

export default TessoDime;
