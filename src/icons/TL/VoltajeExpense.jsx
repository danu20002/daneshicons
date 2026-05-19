import React from 'react';

export const iconData = {
  "id": "VoltajeExpense",
  "name": "VoltajeExpense",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.24 12.00 a 8.76 8.76 0 1 0 17.52 0 a 8.76 8.76 0 1 0 -17.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 12.00 a 6.12 6.12 0 1 1 12.25 0 a 6.12 6.12 0 1 1 -12.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.26 12.00 L 22.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 16.47 L 20.63 17.55"
      }
    ],
    [
      "path",
      {
        "d": "M 15.43 19.52 L 16.26 21.33"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 20.18 L 10.54 22.16"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 18.24 L 5.28 19.76"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 14.33 L 2.15 14.89"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 9.67 L 2.15 9.11"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 5.76 L 5.28 4.24"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 3.82 L 10.54 1.84"
      }
    ],
    [
      "path",
      {
        "d": "M 15.43 4.48 L 16.26 2.67"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 7.53 L 20.63 6.45"
      }
    ]
  ]
};

export const VoltajeExpense = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.24 12.00 a 8.76 8.76 0 1 0 17.52 0 a 8.76 8.76 0 1 0 -17.52 0" />
      <path d="M 5.88 12.00 a 6.12 6.12 0 1 1 12.25 0 a 6.12 6.12 0 1 1 -12.25 0" />
      <path d="M 20.26 12.00 L 22.26 12.00" />
      <path d="M 18.95 16.47 L 20.63 17.55" />
      <path d="M 15.43 19.52 L 16.26 21.33" />
      <path d="M 10.82 20.18 L 10.54 22.16" />
      <path d="M 6.59 18.24 L 5.28 19.76" />
      <path d="M 4.07 14.33 L 2.15 14.89" />
      <path d="M 4.07 9.67 L 2.15 9.11" />
      <path d="M 6.59 5.76 L 5.28 4.24" />
      <path d="M 10.82 3.82 L 10.54 1.84" />
      <path d="M 15.43 4.48 L 16.26 2.67" />
      <path d="M 18.95 7.53 L 20.63 6.45" />
      {children}
    </svg>
  );
});

export default VoltajeExpense;
