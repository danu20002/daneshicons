import React from 'react';

export const iconData = {
  "id": "AviDegree",
  "name": "AviDegree",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.56 7.26 C 18.70 8.65, 17.36 9.93, 14.75 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 4.64 C 9.14 10.66, 9.93 8.32, 14.98 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 7.29 C 17.11 15.91, 9.45 17.87, 21.83 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 2.64 9.37 C 10.06 6.25, 5.53 16.92, 19.47 20.71"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 3.75 C 17.44 17.06, 4.13 13.04, 19.48 17.18"
      }
    ]
  ]
};

export const AviDegree = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.56 7.26 C 18.70 8.65, 17.36 9.93, 14.75 20.45" />
      <path d="M 5.64 4.64 C 9.14 10.66, 9.93 8.32, 14.98 19.56" />
      <path d="M 4.50 7.29 C 17.11 15.91, 9.45 17.87, 21.83 20.40" />
      <path d="M 2.64 9.37 C 10.06 6.25, 5.53 16.92, 19.47 20.71" />
      <path d="M 7.44 3.75 C 17.44 17.06, 4.13 13.04, 19.48 17.18" />
      {children}
    </svg>
  );
});

export default AviDegree;
