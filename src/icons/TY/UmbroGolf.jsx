import React from 'react';

export const iconData = {
  "id": "UmbroGolf",
  "name": "UmbroGolf",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.19 20.15 L 6.44 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 20.35 16.78 A 3.68 6.39 161 0 1 17.38 5.21"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 6.10 L 7.63 21.27 L 3.04 18.33 L 6.74 6.05 L 16.75 19.03 L 11.64 10.40 L 13.55 2.57"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 5.92 L 2.54 20.45 L 8.74 3.97 L 18.96 7.39 L 3.59 8.68"
      }
    ],
    [
      "path",
      {
        "d": "M 17.30 15.09 C 11.50 19.51, 14.81 14.07, 3.60 15.38"
      }
    ]
  ]
};

export const UmbroGolf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.19 20.15 L 6.44 18.90" />
      <path d="M 20.35 16.78 A 3.68 6.39 161 0 1 17.38 5.21" />
      <path d="M 3.75 6.10 L 7.63 21.27 L 3.04 18.33 L 6.74 6.05 L 16.75 19.03 L 11.64 10.40 L 13.55 2.57" />
      <path d="M 3.79 5.92 L 2.54 20.45 L 8.74 3.97 L 18.96 7.39 L 3.59 8.68" />
      <path d="M 17.30 15.09 C 11.50 19.51, 14.81 14.07, 3.60 15.38" />
      {children}
    </svg>
  );
});

export default UmbroGolf;
