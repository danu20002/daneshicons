import React from 'react';

export const iconData = {
  "id": "ThermoDebug",
  "name": "ThermoDebug",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 6.88 a 6.82 2.0467779072001577 0 1 0 13.65 0 a 6.82 2.0467779072001577 0 1 0 -13.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 10.29 a 8.36 2.506780744721003 0 1 0 16.71 0 a 8.36 2.506780744721003 0 1 0 -16.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 13.71 a 8.36 2.506780744721003 0 1 0 16.71 0 a 8.36 2.506780744721003 0 1 0 -16.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 17.12 a 6.82 2.0467779072001577 0 1 0 13.65 0 a 6.82 2.0467779072001577 0 1 0 -13.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 4.61 A 2 2 0 0 0 16.26 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 4.61 A 2 2 0 0 1 16.26 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 4.61 A 2 2 0 0 0 7.74 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 4.61 A 2 2 0 0 1 7.74 19.39"
      }
    ]
  ]
};

export const ThermoDebug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0" />
      <path d="M 5.18 6.88 a 6.82 2.0467779072001577 0 1 0 13.65 0 a 6.82 2.0467779072001577 0 1 0 -13.65 0" />
      <path d="M 3.64 10.29 a 8.36 2.506780744721003 0 1 0 16.71 0 a 8.36 2.506780744721003 0 1 0 -16.71 0" />
      <path d="M 3.64 13.71 a 8.36 2.506780744721003 0 1 0 16.71 0 a 8.36 2.506780744721003 0 1 0 -16.71 0" />
      <path d="M 5.18 17.12 a 6.82 2.0467779072001577 0 1 0 13.65 0 a 6.82 2.0467779072001577 0 1 0 -13.65 0" />
      <path d="M 16.26 4.61 A 2 2 0 0 0 16.26 19.39" />
      <path d="M 16.26 4.61 A 2 2 0 0 1 16.26 19.39" />
      <path d="M 7.74 4.61 A 2 2 0 0 0 7.74 19.39" />
      <path d="M 7.74 4.61 A 2 2 0 0 1 7.74 19.39" />
      {children}
    </svg>
  );
});

export default ThermoDebug;
