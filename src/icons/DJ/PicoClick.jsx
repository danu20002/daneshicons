import React from 'react';

export const iconData = {
  "id": "PicoClick",
  "name": "PicoClick",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.43 0 a 8.21 8.21 0 1 0 -16.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 12.00 a 6.44 6.44 0 1 1 12.87 0 a 6.44 6.44 0 1 1 -12.87 0"
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
        "d": "M 17.91 16.96 L 19.44 18.24"
      }
    ],
    [
      "path",
      {
        "d": "M 13.34 19.60 L 13.69 21.57"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 18.68 L 7.14 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 14.64 L 2.87 15.32"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 9.36 L 2.87 8.68"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 5.32 L 7.14 3.59"
      }
    ],
    [
      "path",
      {
        "d": "M 13.34 4.40 L 13.69 2.43"
      }
    ],
    [
      "path",
      {
        "d": "M 17.91 7.04 L 19.44 5.76"
      }
    ]
  ]
};

export const PicoClick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.43 0 a 8.21 8.21 0 1 0 -16.43 0" />
      <path d="M 5.56 12.00 a 6.44 6.44 0 1 1 12.87 0 a 6.44 6.44 0 1 1 -12.87 0" />
      <path d="M 19.71 12.00 L 21.71 12.00" />
      <path d="M 17.91 16.96 L 19.44 18.24" />
      <path d="M 13.34 19.60 L 13.69 21.57" />
      <path d="M 8.14 18.68 L 7.14 20.41" />
      <path d="M 4.75 14.64 L 2.87 15.32" />
      <path d="M 4.75 9.36 L 2.87 8.68" />
      <path d="M 8.14 5.32 L 7.14 3.59" />
      <path d="M 13.34 4.40 L 13.69 2.43" />
      <path d="M 17.91 7.04 L 19.44 5.76" />
      {children}
    </svg>
  );
});

export default PicoClick;
