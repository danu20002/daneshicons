import React from 'react';

export const iconData = {
  "id": "TormentoZoom",
  "name": "TormentoZoom",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.97 6.49 C 15.59 7.48, 6.29 10.60, 21.34 18.85"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 3.48 C 4.73 4.88, 19.90 19.56, 18.32 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 5.24 C 11.46 4.29, 19.10 19.54, 21.30 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 4.20 C 5.30 7.03, 4.44 15.54, 19.29 15.62"
      }
    ],
    [
      "path",
      {
        "d": "M 9.09 9.04 C 9.91 19.72, 13.25 8.31, 20.19 16.93"
      }
    ],
    [
      "path",
      {
        "d": "M 2.71 6.58 C 17.19 9.96, 7.16 19.01, 16.26 17.09"
      }
    ]
  ]
};

export const TormentoZoom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.97 6.49 C 15.59 7.48, 6.29 10.60, 21.34 18.85" />
      <path d="M 4.24 3.48 C 4.73 4.88, 19.90 19.56, 18.32 20.64" />
      <path d="M 7.31 5.24 C 11.46 4.29, 19.10 19.54, 21.30 16.69" />
      <path d="M 4.48 4.20 C 5.30 7.03, 4.44 15.54, 19.29 15.62" />
      <path d="M 9.09 9.04 C 9.91 19.72, 13.25 8.31, 20.19 16.93" />
      <path d="M 2.71 6.58 C 17.19 9.96, 7.16 19.01, 16.26 17.09" />
      {children}
    </svg>
  );
});

export default TormentoZoom;
