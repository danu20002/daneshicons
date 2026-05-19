import React from 'react';

export const iconData = {
  "id": "FluxoMuster",
  "name": "FluxoMuster",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.00 12.00 a 7.00 7.00 0 1 0 14.01 0 a 7.00 7.00 0 1 0 -14.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 12.00 a 5.40 5.40 0 1 1 10.79 0 a 5.40 5.40 0 1 1 -10.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 12.00 L 20.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 16.60 L 18.01 18.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.50 L 12.00 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 16.60 L 5.99 18.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 12.00 L 3.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 7.40 L 5.99 5.99"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.50 L 12.00 3.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 7.40 L 18.01 5.99"
      }
    ]
  ]
};

export const FluxoMuster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.00 12.00 a 7.00 7.00 0 1 0 14.01 0 a 7.00 7.00 0 1 0 -14.01 0" />
      <path d="M 6.60 12.00 a 5.40 5.40 0 1 1 10.79 0 a 5.40 5.40 0 1 1 -10.79 0" />
      <path d="M 18.50 12.00 L 20.50 12.00" />
      <path d="M 16.60 16.60 L 18.01 18.01" />
      <path d="M 12.00 18.50 L 12.00 20.50" />
      <path d="M 7.40 16.60 L 5.99 18.01" />
      <path d="M 5.50 12.00 L 3.50 12.00" />
      <path d="M 7.40 7.40 L 5.99 5.99" />
      <path d="M 12.00 5.50 L 12.00 3.50" />
      <path d="M 16.60 7.40 L 18.01 5.99" />
      {children}
    </svg>
  );
});

export default FluxoMuster;
