import React from 'react';

export const iconData = {
  "id": "KineDesert",
  "name": "KineDesert",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 7.67 C 8.36 9.80, 12.03 16.54, 18.12 15.36"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 8.05 C 4.77 11.72, 14.01 13.94, 14.16 17.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.05 5.19 C 6.79 13.46, 10.24 18.84, 20.98 21.89"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 3.57 C 19.14 15.21, 19.78 14.64, 14.35 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 8.80 C 5.64 14.23, 17.41 14.70, 19.44 19.08"
      }
    ]
  ]
};

export const KineDesert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 7.67 C 8.36 9.80, 12.03 16.54, 18.12 15.36" />
      <path d="M 3.34 8.05 C 4.77 11.72, 14.01 13.94, 14.16 17.94" />
      <path d="M 9.05 5.19 C 6.79 13.46, 10.24 18.84, 20.98 21.89" />
      <path d="M 6.92 3.57 C 19.14 15.21, 19.78 14.64, 14.35 17.91" />
      <path d="M 6.77 8.80 C 5.64 14.23, 17.41 14.70, 19.44 19.08" />
      {children}
    </svg>
  );
});

export default KineDesert;
