import React from 'react';

export const iconData = {
  "id": "SpheroReform",
  "name": "SpheroReform",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 12.00 a 7.43 7.43 0 1 0 14.87 0 a 7.43 7.43 0 1 0 -14.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 12.00 a 4.56 4.56 0 1 1 9.11 0 a 4.56 4.56 0 1 1 -9.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 12.00 L 20.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.83 15.75 L 19.52 16.83"
      }
    ],
    [
      "path",
      {
        "d": "M 14.88 18.31 L 15.71 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 11.01 18.86 L 10.73 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 17.24 L 6.15 18.75"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 13.95 L 3.43 14.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 10.05 L 3.43 9.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 6.76 L 6.15 5.25"
      }
    ],
    [
      "path",
      {
        "d": "M 11.01 5.14 L 10.73 3.16"
      }
    ],
    [
      "path",
      {
        "d": "M 14.88 5.69 L 15.71 3.87"
      }
    ],
    [
      "path",
      {
        "d": "M 17.83 8.25 L 19.52 7.17"
      }
    ]
  ]
};

export const SpheroReform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 12.00 a 7.43 7.43 0 1 0 14.87 0 a 7.43 7.43 0 1 0 -14.87 0" />
      <path d="M 7.44 12.00 a 4.56 4.56 0 1 1 9.11 0 a 4.56 4.56 0 1 1 -9.11 0" />
      <path d="M 18.93 12.00 L 20.93 12.00" />
      <path d="M 17.83 15.75 L 19.52 16.83" />
      <path d="M 14.88 18.31 L 15.71 20.13" />
      <path d="M 11.01 18.86 L 10.73 20.84" />
      <path d="M 7.46 17.24 L 6.15 18.75" />
      <path d="M 5.35 13.95 L 3.43 14.52" />
      <path d="M 5.35 10.05 L 3.43 9.48" />
      <path d="M 7.46 6.76 L 6.15 5.25" />
      <path d="M 11.01 5.14 L 10.73 3.16" />
      <path d="M 14.88 5.69 L 15.71 3.87" />
      <path d="M 17.83 8.25 L 19.52 7.17" />
      {children}
    </svg>
  );
});

export default SpheroReform;
