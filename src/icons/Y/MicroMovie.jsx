import React from 'react';

export const iconData = {
  "id": "MicroMovie",
  "name": "MicroMovie",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 12.00 a 7.86 7.86 0 1 0 15.73 0 a 7.86 7.86 0 1 0 -15.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 12.00 a 4.99 4.99 0 1 1 9.99 0 a 4.99 4.99 0 1 1 -9.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 12.00 L 21.36 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.38 15.68 L 20.11 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 15.68 18.38 L 16.68 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.36 L 12.00 21.36"
      }
    ],
    [
      "path",
      {
        "d": "M 8.32 18.38 L 7.32 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 15.68 L 3.89 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 12.00 L 2.64 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 8.32 L 3.89 7.32"
      }
    ],
    [
      "path",
      {
        "d": "M 8.32 5.62 L 7.32 3.89"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.64 L 12.00 2.64"
      }
    ],
    [
      "path",
      {
        "d": "M 15.68 5.62 L 16.68 3.89"
      }
    ],
    [
      "path",
      {
        "d": "M 18.38 8.32 L 20.11 7.32"
      }
    ]
  ]
};

export const MicroMovie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 12.00 a 7.86 7.86 0 1 0 15.73 0 a 7.86 7.86 0 1 0 -15.73 0" />
      <path d="M 7.01 12.00 a 4.99 4.99 0 1 1 9.99 0 a 4.99 4.99 0 1 1 -9.99 0" />
      <path d="M 19.36 12.00 L 21.36 12.00" />
      <path d="M 18.38 15.68 L 20.11 16.68" />
      <path d="M 15.68 18.38 L 16.68 20.11" />
      <path d="M 12.00 19.36 L 12.00 21.36" />
      <path d="M 8.32 18.38 L 7.32 20.11" />
      <path d="M 5.62 15.68 L 3.89 16.68" />
      <path d="M 4.64 12.00 L 2.64 12.00" />
      <path d="M 5.62 8.32 L 3.89 7.32" />
      <path d="M 8.32 5.62 L 7.32 3.89" />
      <path d="M 12.00 4.64 L 12.00 2.64" />
      <path d="M 15.68 5.62 L 16.68 3.89" />
      <path d="M 18.38 8.32 L 20.11 7.32" />
      {children}
    </svg>
  );
});

export default MicroMovie;
