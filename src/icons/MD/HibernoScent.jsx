import React from 'react';

export const iconData = {
  "id": "HibernoScent",
  "name": "HibernoScent",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 12.00 a 7.29 7.29 0 1 0 14.57 0 a 7.29 7.29 0 1 0 -14.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 12.00 a 5.30 5.30 0 1 1 10.61 0 a 5.30 5.30 0 1 1 -10.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 12.00 L 20.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.20 16.36 L 18.73 17.65"
      }
    ],
    [
      "path",
      {
        "d": "M 13.18 18.68 L 13.53 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 17.88 L 7.61 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 14.32 L 3.74 15.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 9.68 L 3.74 8.99"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 6.12 L 7.61 4.39"
      }
    ],
    [
      "path",
      {
        "d": "M 13.18 5.32 L 13.53 3.35"
      }
    ],
    [
      "path",
      {
        "d": "M 17.20 7.64 L 18.73 6.35"
      }
    ]
  ]
};

export const HibernoScent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 12.00 a 7.29 7.29 0 1 0 14.57 0 a 7.29 7.29 0 1 0 -14.57 0" />
      <path d="M 6.70 12.00 a 5.30 5.30 0 1 1 10.61 0 a 5.30 5.30 0 1 1 -10.61 0" />
      <path d="M 18.79 12.00 L 20.79 12.00" />
      <path d="M 17.20 16.36 L 18.73 17.65" />
      <path d="M 13.18 18.68 L 13.53 20.65" />
      <path d="M 8.61 17.88 L 7.61 19.61" />
      <path d="M 5.62 14.32 L 3.74 15.01" />
      <path d="M 5.62 9.68 L 3.74 8.99" />
      <path d="M 8.61 6.12 L 7.61 4.39" />
      <path d="M 13.18 5.32 L 13.53 3.35" />
      <path d="M 17.20 7.64 L 18.73 6.35" />
      {children}
    </svg>
  );
});

export default HibernoScent;
