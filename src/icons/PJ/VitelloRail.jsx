import React from 'react';

export const iconData = {
  "id": "VitelloRail",
  "name": "VitelloRail",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 4.19 C 15.57 4.63, 5.30 19.09, 20.07 16.15"
      }
    ],
    [
      "path",
      {
        "d": "M 8.09 3.43 C 5.06 13.13, 11.58 10.58, 16.90 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 8.08 C 17.78 7.72, 5.79 15.75, 19.14 16.60"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 4.97 C 12.57 16.20, 5.20 7.15, 14.85 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 8.77 3.27 C 10.48 4.61, 10.88 16.04, 19.70 16.54"
      }
    ],
    [
      "path",
      {
        "d": "M 9.70 7.02 C 9.51 13.74, 18.18 18.72, 17.08 19.28"
      }
    ]
  ]
};

export const VitelloRail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 4.19 C 15.57 4.63, 5.30 19.09, 20.07 16.15" />
      <path d="M 8.09 3.43 C 5.06 13.13, 11.58 10.58, 16.90 20.53" />
      <path d="M 4.76 8.08 C 17.78 7.72, 5.79 15.75, 19.14 16.60" />
      <path d="M 6.90 4.97 C 12.57 16.20, 5.20 7.15, 14.85 19.42" />
      <path d="M 8.77 3.27 C 10.48 4.61, 10.88 16.04, 19.70 16.54" />
      <path d="M 9.70 7.02 C 9.51 13.74, 18.18 18.72, 17.08 19.28" />
      {children}
    </svg>
  );
});

export default VitelloRail;
