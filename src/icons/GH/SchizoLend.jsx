import React from 'react';

export const iconData = {
  "id": "SchizoLend",
  "name": "SchizoLend",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 12.00 a 8.51 8.51 0 1 0 17.02 0 a 8.51 8.51 0 1 0 -17.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 12.00 a 6.46 6.46 0 1 1 12.93 0 a 6.46 6.46 0 1 1 -12.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.01 12.00 L 22.01 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.94 16.00 L 20.67 17.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.00 18.94 L 17.00 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.01 L 12.00 22.01"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 18.94 L 7.00 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 16.00 L 3.33 17.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 12.00 L 1.99 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 8.00 L 3.33 7.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 5.06 L 7.00 3.33"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.99 L 12.00 1.99"
      }
    ],
    [
      "path",
      {
        "d": "M 16.00 5.06 L 17.00 3.33"
      }
    ],
    [
      "path",
      {
        "d": "M 18.94 8.00 L 20.67 7.00"
      }
    ]
  ]
};

export const SchizoLend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 12.00 a 8.51 8.51 0 1 0 17.02 0 a 8.51 8.51 0 1 0 -17.02 0" />
      <path d="M 5.54 12.00 a 6.46 6.46 0 1 1 12.93 0 a 6.46 6.46 0 1 1 -12.93 0" />
      <path d="M 20.01 12.00 L 22.01 12.00" />
      <path d="M 18.94 16.00 L 20.67 17.00" />
      <path d="M 16.00 18.94 L 17.00 20.67" />
      <path d="M 12.00 20.01 L 12.00 22.01" />
      <path d="M 8.00 18.94 L 7.00 20.67" />
      <path d="M 5.06 16.00 L 3.33 17.00" />
      <path d="M 3.99 12.00 L 1.99 12.00" />
      <path d="M 5.06 8.00 L 3.33 7.00" />
      <path d="M 8.00 5.06 L 7.00 3.33" />
      <path d="M 12.00 3.99 L 12.00 1.99" />
      <path d="M 16.00 5.06 L 17.00 3.33" />
      <path d="M 18.94 8.00 L 20.67 7.00" />
      {children}
    </svg>
  );
});

export default SchizoLend;
