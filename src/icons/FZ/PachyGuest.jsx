import React from 'react';

export const iconData = {
  "id": "PachyGuest",
  "name": "PachyGuest",
  "category": "FZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 8.14 L 5.57 8.14"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 8.14 L 5.57 10.71"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 18.43 L 5.57 21.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 5.57 L 8.14 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 5.57 L 8.14 8.14"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 13.29 L 8.14 15.86"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 15.86 L 8.14 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 18.43 L 8.14 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 18.43 L 8.14 21.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.71 3.00 L 10.71 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 10.71 8.14 L 10.71 10.71"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 15.86 L 10.71 15.86"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 3.00 L 13.29 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 10.71 5.57 L 13.29 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 13.29 L 13.29 15.86"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 18.43 L 13.29 21.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.86 3.00 L 15.86 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 8.14 L 15.86 8.14"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 10.71 L 15.86 10.71"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 13.29 L 15.86 13.29"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 8.14 L 18.43 10.71"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 15.86 L 18.43 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 5.57 L 21.00 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 18.43 L 21.00 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 3.00 L 21.00 3.00 L 21.00 21.00 L 3.00 21.00 Z"
      }
    ]
  ]
};

export const PachyGuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 8.14 L 5.57 8.14" />
      <path d="M 5.57 8.14 L 5.57 10.71" />
      <path d="M 5.57 18.43 L 5.57 21.00" />
      <path d="M 5.57 5.57 L 8.14 5.57" />
      <path d="M 8.14 5.57 L 8.14 8.14" />
      <path d="M 8.14 13.29 L 8.14 15.86" />
      <path d="M 8.14 15.86 L 8.14 18.43" />
      <path d="M 5.57 18.43 L 8.14 18.43" />
      <path d="M 8.14 18.43 L 8.14 21.00" />
      <path d="M 10.71 3.00 L 10.71 5.57" />
      <path d="M 10.71 8.14 L 10.71 10.71" />
      <path d="M 8.14 15.86 L 10.71 15.86" />
      <path d="M 13.29 3.00 L 13.29 5.57" />
      <path d="M 10.71 5.57 L 13.29 5.57" />
      <path d="M 13.29 13.29 L 13.29 15.86" />
      <path d="M 13.29 18.43 L 13.29 21.00" />
      <path d="M 15.86 3.00 L 15.86 5.57" />
      <path d="M 13.29 8.14 L 15.86 8.14" />
      <path d="M 13.29 10.71 L 15.86 10.71" />
      <path d="M 13.29 13.29 L 15.86 13.29" />
      <path d="M 18.43 8.14 L 18.43 10.71" />
      <path d="M 18.43 15.86 L 18.43 18.43" />
      <path d="M 18.43 5.57 L 21.00 5.57" />
      <path d="M 18.43 18.43 L 21.00 18.43" />
      <path d="M 3.00 3.00 L 21.00 3.00 L 21.00 21.00 L 3.00 21.00 Z" />
      {children}
    </svg>
  );
});

export default PachyGuest;
