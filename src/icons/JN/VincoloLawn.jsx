import React from 'react';

export const iconData = {
  "id": "VincoloLawn",
  "name": "VincoloLawn",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.49 5.55 C 11.04 16.92, 8.00 13.98, 19.85 15.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 4.47 C 5.31 12.83, 14.14 5.76, 15.55 16.76"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 4.42 C 11.32 4.84, 17.17 18.23, 19.89 21.97"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 2.74 C 11.17 11.53, 14.75 6.42, 17.69 14.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.53 9.67 C 16.72 11.38, 7.62 17.02, 17.45 14.20"
      }
    ]
  ]
};

export const VincoloLawn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.49 5.55 C 11.04 16.92, 8.00 13.98, 19.85 15.98" />
      <path d="M 4.10 4.47 C 5.31 12.83, 14.14 5.76, 15.55 16.76" />
      <path d="M 6.20 4.42 C 11.32 4.84, 17.17 18.23, 19.89 21.97" />
      <path d="M 3.71 2.74 C 11.17 11.53, 14.75 6.42, 17.69 14.65" />
      <path d="M 7.53 9.67 C 16.72 11.38, 7.62 17.02, 17.45 14.20" />
      {children}
    </svg>
  );
});

export default VincoloLawn;
