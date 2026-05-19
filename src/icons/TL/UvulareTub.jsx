import React from 'react';

export const iconData = {
  "id": "UvulareTub",
  "name": "UvulareTub",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 12.00 a 6.59 6.59 0 1 1 13.18 0 a 6.59 6.59 0 1 1 -13.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.71 12.00 L 21.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 17.45 L 18.87 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.71 L 12.00 21.71"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 17.45 L 5.13 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 12.00 L 2.29 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 6.55 L 5.13 5.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.29 L 12.00 2.29"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 6.55 L 18.87 5.13"
      }
    ]
  ]
};

export const UvulareTub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0" />
      <path d="M 5.41 12.00 a 6.59 6.59 0 1 1 13.18 0 a 6.59 6.59 0 1 1 -13.18 0" />
      <path d="M 19.71 12.00 L 21.71 12.00" />
      <path d="M 17.45 17.45 L 18.87 18.87" />
      <path d="M 12.00 19.71 L 12.00 21.71" />
      <path d="M 6.55 17.45 L 5.13 18.87" />
      <path d="M 4.29 12.00 L 2.29 12.00" />
      <path d="M 6.55 6.55 L 5.13 5.13" />
      <path d="M 12.00 4.29 L 12.00 2.29" />
      <path d="M 17.45 6.55 L 18.87 5.13" />
      {children}
    </svg>
  );
});

export default UvulareTub;
