import React from 'react';

export const iconData = {
  "id": "SegnoDale",
  "name": "SegnoDale",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.58 12.00 a 7.42 7.42 0 1 0 14.84 0 a 7.42 7.42 0 1 0 -14.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.47 12.00 a 5.53 5.53 0 1 1 11.06 0 a 5.53 5.53 0 1 1 -11.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 12.00 L 20.92 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.89 16.89 L 18.31 18.31"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.92 L 12.00 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 7.11 16.89 L 5.69 18.31"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 12.00 L 3.08 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.11 7.11 L 5.69 5.69"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.08 L 12.00 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.89 7.11 L 18.31 5.69"
      }
    ]
  ]
};

export const SegnoDale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.58 12.00 a 7.42 7.42 0 1 0 14.84 0 a 7.42 7.42 0 1 0 -14.84 0" />
      <path d="M 6.47 12.00 a 5.53 5.53 0 1 1 11.06 0 a 5.53 5.53 0 1 1 -11.06 0" />
      <path d="M 18.92 12.00 L 20.92 12.00" />
      <path d="M 16.89 16.89 L 18.31 18.31" />
      <path d="M 12.00 18.92 L 12.00 20.92" />
      <path d="M 7.11 16.89 L 5.69 18.31" />
      <path d="M 5.08 12.00 L 3.08 12.00" />
      <path d="M 7.11 7.11 L 5.69 5.69" />
      <path d="M 12.00 5.08 L 12.00 3.08" />
      <path d="M 16.89 7.11 L 18.31 5.69" />
      {children}
    </svg>
  );
});

export default SegnoDale;
