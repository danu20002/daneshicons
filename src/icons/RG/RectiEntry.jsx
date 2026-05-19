import React from 'react';

export const iconData = {
  "id": "RectiEntry",
  "name": "RectiEntry",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 12.00 a 6.16 6.16 0 1 1 12.32 0 a 6.16 6.16 0 1 1 -12.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.12 12.00 L 22.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 16.06 L 20.77 17.06"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 19.03 L 17.06 20.77"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.12 L 12.00 22.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 19.03 L 6.94 20.77"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 16.06 L 3.23 17.06"
      }
    ],
    [
      "path",
      {
        "d": "M 3.88 12.00 L 1.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 7.94 L 3.23 6.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 4.97 L 6.94 3.23"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.88 L 12.00 1.88"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 4.97 L 17.06 3.23"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 7.94 L 20.77 6.94"
      }
    ]
  ]
};

export const RectiEntry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0" />
      <path d="M 5.84 12.00 a 6.16 6.16 0 1 1 12.32 0 a 6.16 6.16 0 1 1 -12.32 0" />
      <path d="M 20.12 12.00 L 22.12 12.00" />
      <path d="M 19.03 16.06 L 20.77 17.06" />
      <path d="M 16.06 19.03 L 17.06 20.77" />
      <path d="M 12.00 20.12 L 12.00 22.12" />
      <path d="M 7.94 19.03 L 6.94 20.77" />
      <path d="M 4.97 16.06 L 3.23 17.06" />
      <path d="M 3.88 12.00 L 1.88 12.00" />
      <path d="M 4.97 7.94 L 3.23 6.94" />
      <path d="M 7.94 4.97 L 6.94 3.23" />
      <path d="M 12.00 3.88 L 12.00 1.88" />
      <path d="M 16.06 4.97 L 17.06 3.23" />
      <path d="M 19.03 7.94 L 20.77 6.94" />
      {children}
    </svg>
  );
});

export default RectiEntry;
