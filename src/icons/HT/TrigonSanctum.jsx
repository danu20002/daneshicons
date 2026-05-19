import React from 'react';

export const iconData = {
  "id": "TrigonSanctum",
  "name": "TrigonSanctum",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.99 12.00 a 7.01 7.01 0 1 0 14.03 0 a 7.01 7.01 0 1 0 -14.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 12.00 a 4.68 4.68 0 1 1 9.35 0 a 4.68 4.68 0 1 1 -9.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.51 12.00 L 20.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 17.09 L 17.31 18.66"
      }
    ],
    [
      "path",
      {
        "d": "M 10.55 18.35 L 10.11 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 14.83 L 4.33 15.69"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 9.17 L 4.33 8.31"
      }
    ],
    [
      "path",
      {
        "d": "M 10.55 5.65 L 10.11 3.70"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 6.91 L 17.31 5.34"
      }
    ]
  ]
};

export const TrigonSanctum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.99 12.00 a 7.01 7.01 0 1 0 14.03 0 a 7.01 7.01 0 1 0 -14.03 0" />
      <path d="M 7.32 12.00 a 4.68 4.68 0 1 1 9.35 0 a 4.68 4.68 0 1 1 -9.35 0" />
      <path d="M 18.51 12.00 L 20.51 12.00" />
      <path d="M 16.06 17.09 L 17.31 18.66" />
      <path d="M 10.55 18.35 L 10.11 20.30" />
      <path d="M 6.13 14.83 L 4.33 15.69" />
      <path d="M 6.13 9.17 L 4.33 8.31" />
      <path d="M 10.55 5.65 L 10.11 3.70" />
      <path d="M 16.06 6.91 L 17.31 5.34" />
      {children}
    </svg>
  );
});

export default TrigonSanctum;
