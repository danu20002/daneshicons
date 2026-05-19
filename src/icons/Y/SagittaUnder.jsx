import React from 'react';

export const iconData = {
  "id": "SagittaUnder",
  "name": "SagittaUnder",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 12.00 a 7.94 7.94 0 1 0 15.89 0 a 7.94 7.94 0 1 0 -15.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.59 12.00 a 5.41 5.41 0 1 1 10.82 0 a 5.41 5.41 0 1 1 -10.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.44 12.00 L 21.44 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 17.82 L 17.89 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 10.34 19.26 L 9.90 21.21"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 15.23 L 3.49 16.10"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 8.77 L 3.49 7.90"
      }
    ],
    [
      "path",
      {
        "d": "M 10.34 4.74 L 9.90 2.79"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 6.18 L 17.89 4.62"
      }
    ]
  ]
};

export const SagittaUnder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 12.00 a 7.94 7.94 0 1 0 15.89 0 a 7.94 7.94 0 1 0 -15.89 0" />
      <path d="M 6.59 12.00 a 5.41 5.41 0 1 1 10.82 0 a 5.41 5.41 0 1 1 -10.82 0" />
      <path d="M 19.44 12.00 L 21.44 12.00" />
      <path d="M 16.64 17.82 L 17.89 19.38" />
      <path d="M 10.34 19.26 L 9.90 21.21" />
      <path d="M 5.29 15.23 L 3.49 16.10" />
      <path d="M 5.29 8.77 L 3.49 7.90" />
      <path d="M 10.34 4.74 L 9.90 2.79" />
      <path d="M 16.64 6.18 L 17.89 4.62" />
      {children}
    </svg>
  );
});

export default SagittaUnder;
