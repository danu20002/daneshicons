import React from 'react';

export const iconData = {
  "id": "HaloFresco",
  "name": "HaloFresco",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.06 3.65 C 13.50 18.01, 10.90 6.19, 17.12 15.74"
      }
    ],
    [
      "path",
      {
        "d": "M 8.82 2.50 C 18.74 5.22, 17.77 4.05, 15.59 21.43"
      }
    ],
    [
      "path",
      {
        "d": "M 2.49 4.60 C 10.17 4.61, 12.12 11.67, 20.55 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 6.64 C 17.18 10.82, 11.29 4.74, 18.39 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 9.62 3.63 C 7.30 17.16, 19.23 4.63, 16.01 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 8.85 C 9.54 8.98, 13.41 13.37, 14.19 18.98"
      }
    ]
  ]
};

export const HaloFresco = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.06 3.65 C 13.50 18.01, 10.90 6.19, 17.12 15.74" />
      <path d="M 8.82 2.50 C 18.74 5.22, 17.77 4.05, 15.59 21.43" />
      <path d="M 2.49 4.60 C 10.17 4.61, 12.12 11.67, 20.55 19.13" />
      <path d="M 6.33 6.64 C 17.18 10.82, 11.29 4.74, 18.39 20.20" />
      <path d="M 9.62 3.63 C 7.30 17.16, 19.23 4.63, 16.01 18.88" />
      <path d="M 5.50 8.85 C 9.54 8.98, 13.41 13.37, 14.19 18.98" />
      {children}
    </svg>
  );
});

export default HaloFresco;
