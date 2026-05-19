import React from 'react';

export const iconData = {
  "id": "VignaMound",
  "name": "VignaMound",
  "category": "YO",
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
        "d": "M 5.28 12.00 a 6.72 6.72 0 1 1 13.44 0 a 6.72 6.72 0 1 1 -13.44 0"
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
        "d": "M 18.01 17.04 L 19.54 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 13.36 19.72 L 13.71 21.69"
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
        "d": "M 4.63 14.68 L 2.75 15.37"
      }
    ],
    [
      "path",
      {
        "d": "M 4.63 9.32 L 2.75 8.63"
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
        "d": "M 13.36 4.28 L 13.71 2.31"
      }
    ],
    [
      "path",
      {
        "d": "M 18.01 6.96 L 19.54 5.67"
      }
    ]
  ]
};

export const VignaMound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.28 12.00 a 6.72 6.72 0 1 1 13.44 0 a 6.72 6.72 0 1 1 -13.44 0" />
      <path d="M 19.84 12.00 L 21.84 12.00" />
      <path d="M 18.01 17.04 L 19.54 18.33" />
      <path d="M 13.36 19.72 L 13.71 21.69" />
      <path d="M 8.08 18.79 L 7.08 20.52" />
      <path d="M 4.63 14.68 L 2.75 15.37" />
      <path d="M 4.63 9.32 L 2.75 8.63" />
      <path d="M 8.08 5.21 L 7.08 3.48" />
      <path d="M 13.36 4.28 L 13.71 2.31" />
      <path d="M 18.01 6.96 L 19.54 5.67" />
      {children}
    </svg>
  );
});

export default VignaMound;
