import React from 'react';

export const iconData = {
  "id": "ZoccoloLicense",
  "name": "ZoccoloLicense",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.22 11.10 Q 13.89 2.72 14.96 17.86"
      }
    ],
    [
      "path",
      {
        "d": "M 9.15 4.38 L 12.26 12.27 L 7.31 18.82 L 4.14 11.97 L 17.86 9.12 L 8.04 7.21 L 15.37 21.22"
      }
    ],
    [
      "path",
      {
        "d": "M 16.83 2.47 Q 11.16 17.57 18.52 17.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.52 6.33 A 6.81 5.07 14 0 0 21.64 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 10.30 7.00 Q 20.86 5.57 7.52 14.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 19.10 C 18.18 11.71, 6.05 12.43, 10.80 5.60"
      }
    ]
  ]
};

export const ZoccoloLicense = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.22 11.10 Q 13.89 2.72 14.96 17.86" />
      <path d="M 9.15 4.38 L 12.26 12.27 L 7.31 18.82 L 4.14 11.97 L 17.86 9.12 L 8.04 7.21 L 15.37 21.22" />
      <path d="M 16.83 2.47 Q 11.16 17.57 18.52 17.79" />
      <path d="M 14.52 6.33 A 6.81 5.07 14 0 0 21.64 16.28" />
      <path d="M 10.30 7.00 Q 20.86 5.57 7.52 14.54" />
      <path d="M 7.74 19.10 C 18.18 11.71, 6.05 12.43, 10.80 5.60" />
      {children}
    </svg>
  );
});

export default ZoccoloLicense;
