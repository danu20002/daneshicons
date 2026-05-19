import React from 'react';

export const iconData = {
  "id": "SagittaRotate",
  "name": "SagittaRotate",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.45 12.00 a 7.55 7.55 0 1 0 15.10 0 a 7.55 7.55 0 1 0 -15.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.23 12.00 a 5.77 5.77 0 1 1 11.54 0 a 5.77 5.77 0 1 1 -11.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 12.00 L 21.05 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 16.98 L 18.40 18.40"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.05 L 12.00 21.05"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 16.98 L 5.60 18.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 12.00 L 2.95 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 7.02 L 5.60 5.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.95 L 12.00 2.95"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 7.02 L 18.40 5.60"
      }
    ]
  ]
};

export const SagittaRotate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.45 12.00 a 7.55 7.55 0 1 0 15.10 0 a 7.55 7.55 0 1 0 -15.10 0" />
      <path d="M 6.23 12.00 a 5.77 5.77 0 1 1 11.54 0 a 5.77 5.77 0 1 1 -11.54 0" />
      <path d="M 19.05 12.00 L 21.05 12.00" />
      <path d="M 16.98 16.98 L 18.40 18.40" />
      <path d="M 12.00 19.05 L 12.00 21.05" />
      <path d="M 7.02 16.98 L 5.60 18.40" />
      <path d="M 4.95 12.00 L 2.95 12.00" />
      <path d="M 7.02 7.02 L 5.60 5.60" />
      <path d="M 12.00 4.95 L 12.00 2.95" />
      <path d="M 16.98 7.02 L 18.40 5.60" />
      {children}
    </svg>
  );
});

export default SagittaRotate;
