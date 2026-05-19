import React from 'react';

export const iconData = {
  "id": "ToccoSponge",
  "name": "ToccoSponge",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 7.01 C 8.97 18.10, 8.81 8.74, 21.58 21.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 7.70 C 7.53 11.65, 11.81 19.89, 19.53 18.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 8.50 C 4.39 18.65, 9.71 14.38, 16.60 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 4.80 C 4.23 8.08, 19.50 17.29, 18.31 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 9.36 3.15 C 9.36 16.22, 15.12 13.71, 18.65 16.64"
      }
    ]
  ]
};

export const ToccoSponge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 7.01 C 8.97 18.10, 8.81 8.74, 21.58 21.07" />
      <path d="M 6.27 7.70 C 7.53 11.65, 11.81 19.89, 19.53 18.63" />
      <path d="M 7.37 8.50 C 4.39 18.65, 9.71 14.38, 16.60 19.96" />
      <path d="M 3.26 4.80 C 4.23 8.08, 19.50 17.29, 18.31 20.19" />
      <path d="M 9.36 3.15 C 9.36 16.22, 15.12 13.71, 18.65 16.64" />
      {children}
    </svg>
  );
});

export default ToccoSponge;
