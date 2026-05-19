import React from 'react';

export const iconData = {
  "id": "UndatoPursuit",
  "name": "UndatoPursuit",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 12.00 a 6.60 6.60 0 1 1 13.19 0 a 6.60 6.60 0 1 1 -13.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.84 12.00 L 21.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.92 18.79 L 16.92 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 18.79 L 7.08 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 12.00 L 2.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 5.21 L 7.08 3.48"
      }
    ],
    [
      "path",
      {
        "d": "M 15.92 5.21 L 16.92 3.48"
      }
    ]
  ]
};

export const UndatoPursuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0" />
      <path d="M 5.40 12.00 a 6.60 6.60 0 1 1 13.19 0 a 6.60 6.60 0 1 1 -13.19 0" />
      <path d="M 19.84 12.00 L 21.84 12.00" />
      <path d="M 15.92 18.79 L 16.92 20.52" />
      <path d="M 8.08 18.79 L 7.08 20.52" />
      <path d="M 4.16 12.00 L 2.16 12.00" />
      <path d="M 8.08 5.21 L 7.08 3.48" />
      <path d="M 15.92 5.21 L 16.92 3.48" />
      {children}
    </svg>
  );
});

export default UndatoPursuit;
