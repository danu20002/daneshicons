import React from 'react';

export const iconData = {
  "id": "SerenoLeech",
  "name": "SerenoLeech",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 12.00 a 7.75 7.75 0 1 0 15.49 0 a 7.75 7.75 0 1 0 -15.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 12.00 a 5.80 5.80 0 1 1 11.60 0 a 5.80 5.80 0 1 1 -11.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.25 12.00 L 21.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.28 15.62 L 20.01 16.62"
      }
    ],
    [
      "path",
      {
        "d": "M 15.62 18.28 L 16.62 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.25 L 12.00 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 18.28 L 7.38 20.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 15.62 L 3.99 16.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 12.00 L 2.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 8.38 L 3.99 7.38"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 5.72 L 7.38 3.99"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.75 L 12.00 2.75"
      }
    ],
    [
      "path",
      {
        "d": "M 15.62 5.72 L 16.62 3.99"
      }
    ],
    [
      "path",
      {
        "d": "M 18.28 8.38 L 20.01 7.38"
      }
    ]
  ]
};

export const SerenoLeech = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 12.00 a 7.75 7.75 0 1 0 15.49 0 a 7.75 7.75 0 1 0 -15.49 0" />
      <path d="M 6.20 12.00 a 5.80 5.80 0 1 1 11.60 0 a 5.80 5.80 0 1 1 -11.60 0" />
      <path d="M 19.25 12.00 L 21.25 12.00" />
      <path d="M 18.28 15.62 L 20.01 16.62" />
      <path d="M 15.62 18.28 L 16.62 20.01" />
      <path d="M 12.00 19.25 L 12.00 21.25" />
      <path d="M 8.38 18.28 L 7.38 20.01" />
      <path d="M 5.72 15.62 L 3.99 16.62" />
      <path d="M 4.75 12.00 L 2.75 12.00" />
      <path d="M 5.72 8.38 L 3.99 7.38" />
      <path d="M 8.38 5.72 L 7.38 3.99" />
      <path d="M 12.00 4.75 L 12.00 2.75" />
      <path d="M 15.62 5.72 L 16.62 3.99" />
      <path d="M 18.28 8.38 L 20.01 7.38" />
      {children}
    </svg>
  );
});

export default SerenoLeech;
