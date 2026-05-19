import React from 'react';

export const iconData = {
  "id": "DuctoInflux",
  "name": "DuctoInflux",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.12 12.00 a 7.88 7.88 0 1 0 15.77 0 a 7.88 7.88 0 1 0 -15.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.14 12.00 a 5.86 5.86 0 1 1 11.71 0 a 5.86 5.86 0 1 1 -11.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.38 12.00 L 21.38 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.39 15.69 L 20.13 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 15.69 18.39 L 16.69 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.38 L 12.00 21.38"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 18.39 L 7.31 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 15.69 L 3.87 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 12.00 L 2.62 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 8.31 L 3.87 7.31"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 5.61 L 7.31 3.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.62 L 12.00 2.62"
      }
    ],
    [
      "path",
      {
        "d": "M 15.69 5.61 L 16.69 3.87"
      }
    ],
    [
      "path",
      {
        "d": "M 18.39 8.31 L 20.13 7.31"
      }
    ]
  ]
};

export const DuctoInflux = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.12 12.00 a 7.88 7.88 0 1 0 15.77 0 a 7.88 7.88 0 1 0 -15.77 0" />
      <path d="M 6.14 12.00 a 5.86 5.86 0 1 1 11.71 0 a 5.86 5.86 0 1 1 -11.71 0" />
      <path d="M 19.38 12.00 L 21.38 12.00" />
      <path d="M 18.39 15.69 L 20.13 16.69" />
      <path d="M 15.69 18.39 L 16.69 20.13" />
      <path d="M 12.00 19.38 L 12.00 21.38" />
      <path d="M 8.31 18.39 L 7.31 20.13" />
      <path d="M 5.61 15.69 L 3.87 16.69" />
      <path d="M 4.62 12.00 L 2.62 12.00" />
      <path d="M 5.61 8.31 L 3.87 7.31" />
      <path d="M 8.31 5.61 L 7.31 3.87" />
      <path d="M 12.00 4.62 L 12.00 2.62" />
      <path d="M 15.69 5.61 L 16.69 3.87" />
      <path d="M 18.39 8.31 L 20.13 7.31" />
      {children}
    </svg>
  );
});

export default DuctoInflux;
