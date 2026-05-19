import React from 'react';

export const iconData = {
  "id": "TossicoWeb",
  "name": "TossicoWeb",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.52 12.00 a 8.48 8.48 0 1 0 16.97 0 a 8.48 8.48 0 1 0 -16.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.06 12.00 a 5.94 5.94 0 1 1 11.87 0 a 5.94 5.94 0 1 1 -11.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.98 12.00 L 21.98 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.12 17.13 L 19.65 18.42"
      }
    ],
    [
      "path",
      {
        "d": "M 13.39 19.86 L 13.73 21.83"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 18.91 L 7.01 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 14.73 L 2.62 15.41"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 9.27 L 2.62 8.59"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 5.09 L 7.01 3.35"
      }
    ],
    [
      "path",
      {
        "d": "M 13.39 4.14 L 13.73 2.17"
      }
    ],
    [
      "path",
      {
        "d": "M 18.12 6.87 L 19.65 5.58"
      }
    ]
  ]
};

export const TossicoWeb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.52 12.00 a 8.48 8.48 0 1 0 16.97 0 a 8.48 8.48 0 1 0 -16.97 0" />
      <path d="M 6.06 12.00 a 5.94 5.94 0 1 1 11.87 0 a 5.94 5.94 0 1 1 -11.87 0" />
      <path d="M 19.98 12.00 L 21.98 12.00" />
      <path d="M 18.12 17.13 L 19.65 18.42" />
      <path d="M 13.39 19.86 L 13.73 21.83" />
      <path d="M 8.01 18.91 L 7.01 20.65" />
      <path d="M 4.50 14.73 L 2.62 15.41" />
      <path d="M 4.50 9.27 L 2.62 8.59" />
      <path d="M 8.01 5.09 L 7.01 3.35" />
      <path d="M 13.39 4.14 L 13.73 2.17" />
      <path d="M 18.12 6.87 L 19.65 5.58" />
      {children}
    </svg>
  );
});

export default TossicoWeb;
