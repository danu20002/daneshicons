import React from 'react';

export const iconData = {
  "id": "OmbraOrchestra",
  "name": "OmbraOrchestra",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.51 6.75 C 13.22 13.79, 18.29 6.20, 16.35 21.39"
      }
    ],
    [
      "path",
      {
        "d": "M 2.40 7.14 C 4.30 9.10, 14.77 4.29, 18.11 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 5.74 C 4.18 18.08, 15.34 13.52, 19.09 21.85"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 5.72 C 14.61 14.82, 7.53 6.36, 19.31 18.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 2.46 C 8.39 10.12, 17.32 7.56, 20.84 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 3.75 C 6.58 12.95, 14.74 8.38, 21.58 20.61"
      }
    ]
  ]
};

export const OmbraOrchestra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.51 6.75 C 13.22 13.79, 18.29 6.20, 16.35 21.39" />
      <path d="M 2.40 7.14 C 4.30 9.10, 14.77 4.29, 18.11 18.09" />
      <path d="M 4.37 5.74 C 4.18 18.08, 15.34 13.52, 19.09 21.85" />
      <path d="M 7.48 5.72 C 14.61 14.82, 7.53 6.36, 19.31 18.41" />
      <path d="M 5.36 2.46 C 8.39 10.12, 17.32 7.56, 20.84 17.70" />
      <path d="M 6.94 3.75 C 6.58 12.95, 14.74 8.38, 21.58 20.61" />
      {children}
    </svg>
  );
});

export default OmbraOrchestra;
