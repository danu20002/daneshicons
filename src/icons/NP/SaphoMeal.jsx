import React from 'react';

export const iconData = {
  "id": "SaphoMeal",
  "name": "SaphoMeal",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0"
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
        "d": "M 20.25 12.00 L 22.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 16.13 L 20.88 17.13"
      }
    ],
    [
      "path",
      {
        "d": "M 16.13 19.15 L 17.13 20.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.25 L 12.00 22.25"
      }
    ],
    [
      "path",
      {
        "d": "M 7.87 19.15 L 6.87 20.88"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 16.13 L 3.12 17.13"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 12.00 L 1.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 7.87 L 3.12 6.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.87 4.85 L 6.87 3.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.75 L 12.00 1.75"
      }
    ],
    [
      "path",
      {
        "d": "M 16.13 4.85 L 17.13 3.12"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 7.87 L 20.88 6.87"
      }
    ]
  ]
};

export const SaphoMeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0" />
      <path d="M 5.84 12.00 a 6.16 6.16 0 1 1 12.32 0 a 6.16 6.16 0 1 1 -12.32 0" />
      <path d="M 20.25 12.00 L 22.25 12.00" />
      <path d="M 19.15 16.13 L 20.88 17.13" />
      <path d="M 16.13 19.15 L 17.13 20.88" />
      <path d="M 12.00 20.25 L 12.00 22.25" />
      <path d="M 7.87 19.15 L 6.87 20.88" />
      <path d="M 4.85 16.13 L 3.12 17.13" />
      <path d="M 3.75 12.00 L 1.75 12.00" />
      <path d="M 4.85 7.87 L 3.12 6.87" />
      <path d="M 7.87 4.85 L 6.87 3.12" />
      <path d="M 12.00 3.75 L 12.00 1.75" />
      <path d="M 16.13 4.85 L 17.13 3.12" />
      <path d="M 19.15 7.87 L 20.88 6.87" />
      {children}
    </svg>
  );
});

export default SaphoMeal;
