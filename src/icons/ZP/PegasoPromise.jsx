import React from 'react';

export const iconData = {
  "id": "PegasoPromise",
  "name": "PegasoPromise",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.09 6.35 C 7.03 11.76, 19.61 12.84, 16.81 18.24"
      }
    ],
    [
      "path",
      {
        "d": "M 2.64 7.26 C 11.53 9.17, 19.56 10.21, 16.35 14.03"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 8.56 C 10.93 13.97, 14.48 11.12, 20.06 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 9.93 7.11 C 10.48 5.92, 9.61 10.62, 18.75 14.30"
      }
    ],
    [
      "path",
      {
        "d": "M 9.51 7.82 C 18.90 16.80, 5.46 11.64, 18.74 18.24"
      }
    ]
  ]
};

export const PegasoPromise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.09 6.35 C 7.03 11.76, 19.61 12.84, 16.81 18.24" />
      <path d="M 2.64 7.26 C 11.53 9.17, 19.56 10.21, 16.35 14.03" />
      <path d="M 8.43 8.56 C 10.93 13.97, 14.48 11.12, 20.06 16.28" />
      <path d="M 9.93 7.11 C 10.48 5.92, 9.61 10.62, 18.75 14.30" />
      <path d="M 9.51 7.82 C 18.90 16.80, 5.46 11.64, 18.74 18.24" />
      {children}
    </svg>
  );
});

export default PegasoPromise;
