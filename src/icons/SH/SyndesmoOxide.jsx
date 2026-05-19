import React from 'react';

export const iconData = {
  "id": "SyndesmoOxide",
  "name": "SyndesmoOxide",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.37 9.98 C 15.02 4.28, 15.16 4.14, 19.15 15.97"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 9.69 C 16.14 18.92, 16.32 13.01, 20.22 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 4.90 C 13.65 13.11, 18.67 15.47, 14.24 18.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 8.09 C 8.81 5.70, 17.12 18.52, 17.27 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 8.71 9.05 C 18.78 17.60, 4.57 18.29, 17.93 18.59"
      }
    ]
  ]
};

export const SyndesmoOxide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.37 9.98 C 15.02 4.28, 15.16 4.14, 19.15 15.97" />
      <path d="M 4.20 9.69 C 16.14 18.92, 16.32 13.01, 20.22 21.75" />
      <path d="M 5.03 4.90 C 13.65 13.11, 18.67 15.47, 14.24 18.00" />
      <path d="M 5.41 8.09 C 8.81 5.70, 17.12 18.52, 17.27 19.30" />
      <path d="M 8.71 9.05 C 18.78 17.60, 4.57 18.29, 17.93 18.59" />
      {children}
    </svg>
  );
});

export default SyndesmoOxide;
