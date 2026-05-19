import React from 'react';

export const iconData = {
  "id": "FastoMonument",
  "name": "FastoMonument",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.77 12.00 a 7.23 7.23 0 1 0 14.47 0 a 7.23 7.23 0 1 0 -14.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 12.00 a 4.90 4.90 0 1 1 9.79 0 a 4.90 4.90 0 1 1 -9.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.73 12.00 L 20.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.37 17.83 L 16.37 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 17.83 L 7.63 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 12.00 L 3.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 6.17 L 7.63 4.44"
      }
    ],
    [
      "path",
      {
        "d": "M 15.37 6.17 L 16.37 4.44"
      }
    ]
  ]
};

export const FastoMonument = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.77 12.00 a 7.23 7.23 0 1 0 14.47 0 a 7.23 7.23 0 1 0 -14.47 0" />
      <path d="M 7.10 12.00 a 4.90 4.90 0 1 1 9.79 0 a 4.90 4.90 0 1 1 -9.79 0" />
      <path d="M 18.73 12.00 L 20.73 12.00" />
      <path d="M 15.37 17.83 L 16.37 19.56" />
      <path d="M 8.63 17.83 L 7.63 19.56" />
      <path d="M 5.27 12.00 L 3.27 12.00" />
      <path d="M 8.63 6.17 L 7.63 4.44" />
      <path d="M 15.37 6.17 L 16.37 4.44" />
      {children}
    </svg>
  );
});

export default FastoMonument;
