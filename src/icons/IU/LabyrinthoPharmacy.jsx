import React from 'react';

export const iconData = {
  "id": "LabyrinthoPharmacy",
  "name": "LabyrinthoPharmacy",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.19 6.30 C 6.93 6.15, 14.73 5.57, 14.17 21.56"
      }
    ],
    [
      "path",
      {
        "d": "M 2.01 8.11 C 16.37 6.99, 15.52 16.26, 21.54 15.06"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 2.76 C 9.78 5.90, 5.26 7.34, 16.06 19.36"
      }
    ],
    [
      "path",
      {
        "d": "M 8.92 7.39 C 9.67 15.82, 14.47 14.79, 21.41 17.54"
      }
    ],
    [
      "path",
      {
        "d": "M 9.20 8.91 C 5.76 15.18, 17.61 7.29, 16.84 16.62"
      }
    ]
  ]
};

export const LabyrinthoPharmacy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.19 6.30 C 6.93 6.15, 14.73 5.57, 14.17 21.56" />
      <path d="M 2.01 8.11 C 16.37 6.99, 15.52 16.26, 21.54 15.06" />
      <path d="M 9.14 2.76 C 9.78 5.90, 5.26 7.34, 16.06 19.36" />
      <path d="M 8.92 7.39 C 9.67 15.82, 14.47 14.79, 21.41 17.54" />
      <path d="M 9.20 8.91 C 5.76 15.18, 17.61 7.29, 16.84 16.62" />
      {children}
    </svg>
  );
});

export default LabyrinthoPharmacy;
