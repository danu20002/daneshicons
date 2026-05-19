import React from 'react';

export const iconData = {
  "id": "ClinoPlea",
  "name": "ClinoPlea",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 12.00 a 7.87 7.87 0 1 0 15.75 0 a 7.87 7.87 0 1 0 -15.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 12.00 a 4.94 4.94 0 1 1 9.87 0 a 4.94 4.94 0 1 1 -9.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.37 12.00 L 21.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 16.33 L 19.58 17.51"
      }
    ],
    [
      "path",
      {
        "d": "M 14.28 19.01 L 14.90 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 9.72 19.01 L 9.10 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 16.33 L 4.42 17.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.63 12.00 L 2.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 7.67 L 4.42 6.49"
      }
    ],
    [
      "path",
      {
        "d": "M 9.72 4.99 L 9.10 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 14.28 4.99 L 14.90 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 7.67 L 19.58 6.49"
      }
    ]
  ]
};

export const ClinoPlea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 12.00 a 7.87 7.87 0 1 0 15.75 0 a 7.87 7.87 0 1 0 -15.75 0" />
      <path d="M 7.06 12.00 a 4.94 4.94 0 1 1 9.87 0 a 4.94 4.94 0 1 1 -9.87 0" />
      <path d="M 19.37 12.00 L 21.37 12.00" />
      <path d="M 17.97 16.33 L 19.58 17.51" />
      <path d="M 14.28 19.01 L 14.90 20.92" />
      <path d="M 9.72 19.01 L 9.10 20.92" />
      <path d="M 6.03 16.33 L 4.42 17.51" />
      <path d="M 4.63 12.00 L 2.63 12.00" />
      <path d="M 6.03 7.67 L 4.42 6.49" />
      <path d="M 9.72 4.99 L 9.10 3.08" />
      <path d="M 14.28 4.99 L 14.90 3.08" />
      <path d="M 17.97 7.67 L 19.58 6.49" />
      {children}
    </svg>
  );
});

export default ClinoPlea;
