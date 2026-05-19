import React from 'react';

export const iconData = {
  "id": "VadosoEasel",
  "name": "VadosoEasel",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 3.25 C 16.55 5.38, 18.59 18.42, 18.94 21.50"
      }
    ],
    [
      "path",
      {
        "d": "M 8.92 2.04 C 11.46 4.32, 7.63 10.68, 17.80 20.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 4.87 C 5.67 5.44, 8.08 7.24, 20.98 14.39"
      }
    ],
    [
      "path",
      {
        "d": "M 8.03 4.81 C 14.97 18.94, 10.67 9.16, 18.16 17.38"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 3.11 C 19.94 17.76, 12.14 15.50, 19.05 19.85"
      }
    ]
  ]
};

export const VadosoEasel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 3.25 C 16.55 5.38, 18.59 18.42, 18.94 21.50" />
      <path d="M 8.92 2.04 C 11.46 4.32, 7.63 10.68, 17.80 20.38" />
      <path d="M 7.00 4.87 C 5.67 5.44, 8.08 7.24, 20.98 14.39" />
      <path d="M 8.03 4.81 C 14.97 18.94, 10.67 9.16, 18.16 17.38" />
      <path d="M 3.98 3.11 C 19.94 17.76, 12.14 15.50, 19.05 19.85" />
      {children}
    </svg>
  );
});

export default VadosoEasel;
