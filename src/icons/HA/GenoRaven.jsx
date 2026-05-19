import React from 'react';

export const iconData = {
  "id": "GenoRaven",
  "name": "GenoRaven",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.99 12.00 a 7.01 7.01 0 1 0 14.02 0 a 7.01 7.01 0 1 0 -14.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 12.00 a 4.49 4.49 0 1 1 8.99 0 a 4.49 4.49 0 1 1 -8.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.51 12.00 L 20.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.64 15.25 L 19.37 16.25"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 17.64 L 16.25 19.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.51 L 12.00 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 8.75 17.64 L 7.75 19.37"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 15.25 L 4.63 16.25"
      }
    ],
    [
      "path",
      {
        "d": "M 5.49 12.00 L 3.49 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 8.75 L 4.63 7.75"
      }
    ],
    [
      "path",
      {
        "d": "M 8.75 6.36 L 7.75 4.63"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.49 L 12.00 3.49"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 6.36 L 16.25 4.63"
      }
    ],
    [
      "path",
      {
        "d": "M 17.64 8.75 L 19.37 7.75"
      }
    ]
  ]
};

export const GenoRaven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.99 12.00 a 7.01 7.01 0 1 0 14.02 0 a 7.01 7.01 0 1 0 -14.02 0" />
      <path d="M 7.51 12.00 a 4.49 4.49 0 1 1 8.99 0 a 4.49 4.49 0 1 1 -8.99 0" />
      <path d="M 18.51 12.00 L 20.51 12.00" />
      <path d="M 17.64 15.25 L 19.37 16.25" />
      <path d="M 15.25 17.64 L 16.25 19.37" />
      <path d="M 12.00 18.51 L 12.00 20.51" />
      <path d="M 8.75 17.64 L 7.75 19.37" />
      <path d="M 6.36 15.25 L 4.63 16.25" />
      <path d="M 5.49 12.00 L 3.49 12.00" />
      <path d="M 6.36 8.75 L 4.63 7.75" />
      <path d="M 8.75 6.36 L 7.75 4.63" />
      <path d="M 12.00 5.49 L 12.00 3.49" />
      <path d="M 15.25 6.36 L 16.25 4.63" />
      <path d="M 17.64 8.75 L 19.37 7.75" />
      {children}
    </svg>
  );
});

export default GenoRaven;
