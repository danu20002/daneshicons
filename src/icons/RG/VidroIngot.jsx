import React from 'react';

export const iconData = {
  "id": "VidroIngot",
  "name": "VidroIngot",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 12.00 a 8.25 8.25 0 1 0 16.49 0 a 8.25 8.25 0 1 0 -16.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 12.00 a 5.75 5.75 0 1 1 11.50 0 a 5.75 5.75 0 1 1 -11.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.75 12.00 L 21.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.71 15.87 L 20.44 16.87"
      }
    ],
    [
      "path",
      {
        "d": "M 15.87 18.71 L 16.87 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.75 L 12.00 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 18.71 L 7.13 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 15.87 L 3.56 16.87"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 12.00 L 2.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 8.13 L 3.56 7.13"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 5.29 L 7.13 3.56"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.25 L 12.00 2.25"
      }
    ],
    [
      "path",
      {
        "d": "M 15.87 5.29 L 16.87 3.56"
      }
    ],
    [
      "path",
      {
        "d": "M 18.71 8.13 L 20.44 7.13"
      }
    ]
  ]
};

export const VidroIngot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 12.00 a 8.25 8.25 0 1 0 16.49 0 a 8.25 8.25 0 1 0 -16.49 0" />
      <path d="M 6.25 12.00 a 5.75 5.75 0 1 1 11.50 0 a 5.75 5.75 0 1 1 -11.50 0" />
      <path d="M 19.75 12.00 L 21.75 12.00" />
      <path d="M 18.71 15.87 L 20.44 16.87" />
      <path d="M 15.87 18.71 L 16.87 20.44" />
      <path d="M 12.00 19.75 L 12.00 21.75" />
      <path d="M 8.13 18.71 L 7.13 20.44" />
      <path d="M 5.29 15.87 L 3.56 16.87" />
      <path d="M 4.25 12.00 L 2.25 12.00" />
      <path d="M 5.29 8.13 L 3.56 7.13" />
      <path d="M 8.13 5.29 L 7.13 3.56" />
      <path d="M 12.00 4.25 L 12.00 2.25" />
      <path d="M 15.87 5.29 L 16.87 3.56" />
      <path d="M 18.71 8.13 L 20.44 7.13" />
      {children}
    </svg>
  );
});

export default VidroIngot;
