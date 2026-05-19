import React from 'react';

export const iconData = {
  "id": "SagittaSlide",
  "name": "SagittaSlide",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 12.00 a 8.55 8.55 0 1 0 17.10 0 a 8.55 8.55 0 1 0 -17.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 9.15 a 8.06 2.418321749521582 0 1 0 16.12 0 a 8.06 2.418321749521582 0 1 0 -16.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 14.85 a 8.06 2.418321749521582 0 1 0 16.12 0 a 8.06 2.418321749521582 0 1 0 -16.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 5.95 A 2 2 0 0 0 18.05 18.05"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 5.95 A 2 2 0 0 1 18.05 18.05"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.45 A 2 2 0 0 0 12.00 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.45 A 2 2 0 0 1 12.00 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 5.95 A 2 2 0 0 0 5.95 18.05"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 5.95 A 2 2 0 0 1 5.95 18.05"
      }
    ]
  ]
};

export const SagittaSlide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 12.00 a 8.55 8.55 0 1 0 17.10 0 a 8.55 8.55 0 1 0 -17.10 0" />
      <path d="M 3.94 9.15 a 8.06 2.418321749521582 0 1 0 16.12 0 a 8.06 2.418321749521582 0 1 0 -16.12 0" />
      <path d="M 3.94 14.85 a 8.06 2.418321749521582 0 1 0 16.12 0 a 8.06 2.418321749521582 0 1 0 -16.12 0" />
      <path d="M 18.05 5.95 A 2 2 0 0 0 18.05 18.05" />
      <path d="M 18.05 5.95 A 2 2 0 0 1 18.05 18.05" />
      <path d="M 12.00 3.45 A 2 2 0 0 0 12.00 20.55" />
      <path d="M 12.00 3.45 A 2 2 0 0 1 12.00 20.55" />
      <path d="M 5.95 5.95 A 2 2 0 0 0 5.95 18.05" />
      <path d="M 5.95 5.95 A 2 2 0 0 1 5.95 18.05" />
      {children}
    </svg>
  );
});

export default SagittaSlide;
