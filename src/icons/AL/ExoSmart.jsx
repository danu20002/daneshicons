import React from 'react';

export const iconData = {
  "id": "ExoSmart",
  "name": "ExoSmart",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 12.00 a 6.00 6.00 0 1 1 12.00 0 a 6.00 6.00 0 1 1 -12.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.03 12.00 L 22.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 16.01 L 20.68 17.01"
      }
    ],
    [
      "path",
      {
        "d": "M 16.01 18.95 L 17.01 20.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.03 L 12.00 22.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 18.95 L 6.99 20.68"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 16.01 L 3.32 17.01"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 12.00 L 1.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 7.99 L 3.32 6.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 5.05 L 6.99 3.32"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.97 L 12.00 1.97"
      }
    ],
    [
      "path",
      {
        "d": "M 16.01 5.05 L 17.01 3.32"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 7.99 L 20.68 6.99"
      }
    ]
  ]
};

export const ExoSmart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0" />
      <path d="M 6.00 12.00 a 6.00 6.00 0 1 1 12.00 0 a 6.00 6.00 0 1 1 -12.00 0" />
      <path d="M 20.03 12.00 L 22.03 12.00" />
      <path d="M 18.95 16.01 L 20.68 17.01" />
      <path d="M 16.01 18.95 L 17.01 20.68" />
      <path d="M 12.00 20.03 L 12.00 22.03" />
      <path d="M 7.99 18.95 L 6.99 20.68" />
      <path d="M 5.05 16.01 L 3.32 17.01" />
      <path d="M 3.97 12.00 L 1.97 12.00" />
      <path d="M 5.05 7.99 L 3.32 6.99" />
      <path d="M 7.99 5.05 L 6.99 3.32" />
      <path d="M 12.00 3.97 L 12.00 1.97" />
      <path d="M 16.01 5.05 L 17.01 3.32" />
      <path d="M 18.95 7.99 L 20.68 6.99" />
      {children}
    </svg>
  );
});

export default ExoSmart;
