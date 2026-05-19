import React from 'react';

export const iconData = {
  "id": "NeutroSable",
  "name": "NeutroSable",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 12.00 a 7.17 7.17 0 1 0 14.33 0 a 7.17 7.17 0 1 0 -14.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 12.00 a 4.55 4.55 0 1 1 9.10 0 a 4.55 4.55 0 1 1 -9.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.67 12.00 L 20.67 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.71 16.71 L 18.13 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.67 L 12.00 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 16.71 L 5.87 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.33 12.00 L 3.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 7.29 L 5.87 5.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.33 L 12.00 3.33"
      }
    ],
    [
      "path",
      {
        "d": "M 16.71 7.29 L 18.13 5.87"
      }
    ]
  ]
};

export const NeutroSable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 12.00 a 7.17 7.17 0 1 0 14.33 0 a 7.17 7.17 0 1 0 -14.33 0" />
      <path d="M 7.45 12.00 a 4.55 4.55 0 1 1 9.10 0 a 4.55 4.55 0 1 1 -9.10 0" />
      <path d="M 18.67 12.00 L 20.67 12.00" />
      <path d="M 16.71 16.71 L 18.13 18.13" />
      <path d="M 12.00 18.67 L 12.00 20.67" />
      <path d="M 7.29 16.71 L 5.87 18.13" />
      <path d="M 5.33 12.00 L 3.33 12.00" />
      <path d="M 7.29 7.29 L 5.87 5.87" />
      <path d="M 12.00 5.33 L 12.00 3.33" />
      <path d="M 16.71 7.29 L 18.13 5.87" />
      {children}
    </svg>
  );
});

export default NeutroSable;
