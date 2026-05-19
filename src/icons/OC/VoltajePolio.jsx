import React from 'react';

export const iconData = {
  "id": "VoltajePolio",
  "name": "VoltajePolio",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.30 9.85 A 2.26 2.66 114 0 1 20.31 8.33"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 14.77 Q 15.18 5.29 14.27 8.02"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 20.60 Q 10.42 8.74 16.03 5.01"
      }
    ],
    [
      "path",
      {
        "d": "M 8.90 3.17 L 5.14 7.76 L 19.46 9.68"
      }
    ],
    [
      "path",
      {
        "d": "M 9.59 18.21 C 17.70 9.17, 19.28 14.84, 16.73 7.85"
      }
    ]
  ]
};

export const VoltajePolio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.30 9.85 A 2.26 2.66 114 0 1 20.31 8.33" />
      <path d="M 8.21 14.77 Q 15.18 5.29 14.27 8.02" />
      <path d="M 3.78 20.60 Q 10.42 8.74 16.03 5.01" />
      <path d="M 8.90 3.17 L 5.14 7.76 L 19.46 9.68" />
      <path d="M 9.59 18.21 C 17.70 9.17, 19.28 14.84, 16.73 7.85" />
      {children}
    </svg>
  );
});

export default VoltajePolio;
