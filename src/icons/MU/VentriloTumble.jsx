import React from 'react';

export const iconData = {
  "id": "VentriloTumble",
  "name": "VentriloTumble",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 7.97 a 6.97 2.0921826169041275 0 1 0 13.95 0 a 6.97 2.0921826169041275 0 1 0 -13.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 2.415844394126907 0 1 0 16.11 0 a 8.05 2.415844394126907 0 1 0 -16.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 16.03 a 6.97 2.0921826169041275 0 1 0 13.95 0 a 6.97 2.0921826169041275 0 1 0 -13.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.69 6.31 A 2 2 0 0 0 17.69 17.69"
      }
    ],
    [
      "path",
      {
        "d": "M 17.69 6.31 A 2 2 0 0 1 17.69 17.69"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.95 A 2 2 0 0 0 12.00 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.95 A 2 2 0 0 1 12.00 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 6.31 6.31 A 2 2 0 0 0 6.31 17.69"
      }
    ],
    [
      "path",
      {
        "d": "M 6.31 6.31 A 2 2 0 0 1 6.31 17.69"
      }
    ]
  ]
};

export const VentriloTumble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0" />
      <path d="M 5.03 7.97 a 6.97 2.0921826169041275 0 1 0 13.95 0 a 6.97 2.0921826169041275 0 1 0 -13.95 0" />
      <path d="M 3.95 12.00 a 8.05 2.415844394126907 0 1 0 16.11 0 a 8.05 2.415844394126907 0 1 0 -16.11 0" />
      <path d="M 5.03 16.03 a 6.97 2.0921826169041275 0 1 0 13.95 0 a 6.97 2.0921826169041275 0 1 0 -13.95 0" />
      <path d="M 17.69 6.31 A 2 2 0 0 0 17.69 17.69" />
      <path d="M 17.69 6.31 A 2 2 0 0 1 17.69 17.69" />
      <path d="M 12.00 3.95 A 2 2 0 0 0 12.00 20.05" />
      <path d="M 12.00 3.95 A 2 2 0 0 1 12.00 20.05" />
      <path d="M 6.31 6.31 A 2 2 0 0 0 6.31 17.69" />
      <path d="M 6.31 6.31 A 2 2 0 0 1 6.31 17.69" />
      {children}
    </svg>
  );
});

export default VentriloTumble;
